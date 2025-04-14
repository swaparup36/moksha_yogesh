import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { loadModel, createDefaultBirdModel } from '../utils/modelLoader'

interface PhoenixProps {
  onComplete: () => void
}

const Phoenix = ({ onComplete }: PhoenixProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 7)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding
    containerRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xc8a675, 0.3)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xc8a675, 0.5)
    directionalLight.position.set(-5, 2, 7)
    scene.add(directionalLight)

    const hemisphereLight = new THREE.HemisphereLight(0x4a5d82, 0xc8a675, 0.3)
    scene.add(hemisphereLight)

    const pointLight = new THREE.PointLight(0xff7700, 1, 10)
    pointLight.position.set(0, 0, 0)
    scene.add(pointLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false

    let phoenixY = -2
    let phoenixModel: THREE.Group | null = null
    let phoenixMixer: THREE.AnimationMixer | null = null
    let activeAction: THREE.AnimationAction | null = null

    const textureLoader = new THREE.TextureLoader()
    const cloudTexture1 = textureLoader.load('/assets/textures/cloud-texture1.png')
    const cloudTexture2 = textureLoader.load('/assets/textures/cloud-texture2.png')

    cloudTexture1.wrapS = cloudTexture1.wrapT = THREE.RepeatWrapping
    cloudTexture2.wrapS = cloudTexture2.wrapT = THREE.RepeatWrapping

    const skyGeometry = new THREE.SphereGeometry(100, 32, 32)
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x4a5d82) },
        bottomColor: { value: new THREE.Color(0xc8a675) },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide,
    })
    const sky = new THREE.Mesh(skyGeometry, skyMaterial)
    scene.add(sky)

    const createCloudLayer = (y: number, scale: number, opacity: number, texture: THREE.Texture) => {
      const cloudGeometry = new THREE.PlaneGeometry(200, 200)
      const cloudMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: opacity,
        depthWrite: false,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0xc8a675),
        emissiveIntensity: 0.05,
        color: new THREE.Color(0xf5f5f5),
      })
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
      cloud.rotation.x = Math.PI / 2
      cloud.position.y = y
      cloud.scale.set(scale, scale, 1)

      cloud.userData.initialY = y

      return cloud
    }

    const cloudLayers = [
      { y: -20, scale: 2, opacity: 0.5, texture: cloudTexture1 },
      { y: 0, scale: 1.5, opacity: 0.6, texture: cloudTexture2 },
      { y: 20, scale: 1, opacity: 0.4, texture: cloudTexture1 },
      { y: 30, scale: 1.2, opacity: 0.5, texture: cloudTexture2 },
    ]

    const clouds = cloudLayers.map(layer => createCloudLayer(layer.y, layer.scale, layer.opacity, layer.texture))
    clouds.forEach(cloud => scene.add(cloud))

    const WIND_SPEED = 0.001
    const WIND_VARIATION = 0.00005
    let windTime = 0

    const animateClouds = () => {
      windTime += 0.01
      const windStrength = WIND_SPEED + Math.sin(windTime) * WIND_VARIATION

      clouds.forEach((cloud, index) => {
        cloud.rotation.z += 0.0001 * (index + 1)
        cloud.position.y += Math.sin(windTime + index) * 0.01
        const material = cloud.material as THREE.MeshStandardMaterial

        if (material.map) {
          material.map.offset.x += windStrength * (index + 1)
        }

        cloud.rotation.x = Math.PI / 2 + Math.sin(windTime + index) * 0.05
      })

      if (phoenixModel && animationPhase === 0) {
        phoenixModel.rotation.z = Math.sin(windTime * 0.5) * 0.05
        phoenixModel.position.y = phoenixY + Math.sin(windTime) * 0.1
      }
    }

    loadModel()
      .then(loaded => {
        phoenixModel = loaded.model
        scene.add(phoenixModel)
        phoenixModel.position.y = phoenixY

        if (loaded.animations.length > 0 && loaded.mixer) {
          phoenixMixer = loaded.mixer
          const animation = loaded.animations[0]
          activeAction = phoenixMixer.clipAction(animation)
          activeAction.setEffectiveTimeScale(5)
          activeAction.play()
        } else {
          console.log('Model loaded without animations or mixer')
        }
      })
      .catch(error => {
        console.error('Failed to load bird model:', error)
        const defaultBird = createDefaultBirdModel()
        phoenixModel = defaultBird.model
        scene.add(phoenixModel)
        phoenixModel.position.y = phoenixY

        if (defaultBird.animations.length > 0 && defaultBird.mixer) {
          phoenixMixer = defaultBird.mixer
          const animation = defaultBird.animations[0]
          activeAction = phoenixMixer.clipAction(animation)
          activeAction.setEffectiveTimeScale(1.0)
          activeAction.setLoop(THREE.LoopRepeat, Infinity)
          activeAction.play()
        }
      })

    let animationPhase = 0

    const mouse = new THREE.Vector2()

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      if (animationPhase === 0 && phoenixModel) {
        gsap.to(phoenixModel.rotation, {
          x: mouse.y * 0.2,
          y: mouse.x * 0.2,
          duration: 1,
          ease: 'power2.out',
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    const clock = new THREE.Clock()
    let elapsedTime = 0

    const animate = () => {
      const delta = clock.getDelta()
      elapsedTime += delta

      if (phoenixMixer) {
        phoenixMixer.update(delta)
      }

      if (animationPhase === 0 && elapsedTime > 2) {
        animationPhase = 1
        gsap.to(camera.position, {
          y: 5,
          z: 20,
          duration: 3,
          ease: 'power1.inOut',
        })
        gsap.to(controls.target, {
          y: 10,
          duration: 3,
          ease: 'power1.inOut',
        })
      }

      if (animationPhase === 1) {
        if (phoenixModel) {
          phoenixModel.position.y += 0.2

          if (phoenixModel.position.y > 20) {
            animationPhase = 2
            setTimeout(() => {
              onComplete()
              gsap.to(containerRef.current, {
                opacity: 0,
                duration: 1.0,
                onComplete: () => {
                  if (containerRef.current) {
                    containerRef.current.style.display = 'none'
                  }
                },
              })
            }, 300)
          }
        }
      }

      animateClouds()
      controls.update()
      renderer.render(scene, camera)

      if (animationPhase < 2 || (phoenixModel && phoenixModel.position.y < 30)) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (object.material instanceof THREE.Material) {
            object.material.dispose()
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          }
        }
      })

      renderer.dispose()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className='phoenix-canvas'
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 50 }}
    />
  )
}

export default Phoenix


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

const DEFAULT_BIRD_MODEL_URL = '/assets/3Dmodels/bird.glb';
interface LoadedModel {
  model: THREE.Group;
  animations: THREE.AnimationClip[];
  mixer?: THREE.AnimationMixer;
}

/**
 * @param url URL of the GLTF/GLB model
 * @returns Promise that resolves with the loaded model and animations
 */
export const loadModel = (url: string = DEFAULT_BIRD_MODEL_URL): Promise<LoadedModel> => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    
    loader.load(
      url,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(4, 4, 4);
        
        let mixer;
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          console.log('Available animations:', gltf.animations.map(a => a.name));
          
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopRepeat, Infinity);
            action.timeScale = 1.0;
            console.log(`Playing animation: ${clip.name}`);
          });
        }
        
        resolve({
          model,
          animations: gltf.animations,
          mixer
        });
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error('An error happened while loading the model:', error);
        reject(error);
      }
    );
  });
};


export const createDefaultBirdModel = (): LoadedModel => {
  const birdGroup = new THREE.Group();
  const bodyGeometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
  const bodyMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xDE9E41,
    emissive: 0xD95204,
    emissiveIntensity: 0.3,
    roughness: 0.7
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.rotation.x = Math.PI / 2;
  birdGroup.add(body);
  
  const wingGeometry = new THREE.CircleGeometry(1.2, 12, 0, Math.PI);
  const wingMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xFA8334, 
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9
  });
  
  const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
  leftWing.position.set(0.6, 0, 0);
  leftWing.rotation.y = Math.PI / 2;
  leftWing.rotation.z = -Math.PI / 4;
  birdGroup.add(leftWing);
  
  const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
  rightWing.position.set(-0.6, 0, 0);
  rightWing.rotation.y = -Math.PI / 2;
  rightWing.rotation.z = Math.PI / 4;
  birdGroup.add(rightWing);
  
  const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
  const headMaterial = new THREE.MeshStandardMaterial({ color: 0xDE9E41 });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.set(0, 0.7, 0);
  birdGroup.add(head);
  
  const beakGeometry = new THREE.ConeGeometry(0.1, 0.3, 4);
  const beakMaterial = new THREE.MeshStandardMaterial({ color: 0xD95204 });
  const beak = new THREE.Mesh(beakGeometry, beakMaterial);
  beak.position.set(0, 0.8, 0.3);
  beak.rotation.x = -Math.PI / 2;
  birdGroup.add(beak);
  
  const tailGeometry = new THREE.ConeGeometry(0.3, 1, 4);
  const tailMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xFF4500,
    emissive: 0xFF4500,
    emissiveIntensity: 0.3
  });
  const tail = new THREE.Mesh(tailGeometry, tailMaterial);
  tail.position.set(0, -0.8, 0);
  tail.rotation.x = Math.PI / 2;
  birdGroup.add(tail);
  
  const mixer = new THREE.AnimationMixer(birdGroup);
  const tracks = [];
  const leftWingKF = new THREE.QuaternionKeyframeTrack(
    '.children[1].quaternion',
    [0, 0.5, 1],
    [
      leftWing.quaternion.x, leftWing.quaternion.y, leftWing.quaternion.z, leftWing.quaternion.w,
      leftWing.quaternion.x, leftWing.quaternion.y, leftWing.quaternion.z - 0.2, leftWing.quaternion.w,
      leftWing.quaternion.x, leftWing.quaternion.y, leftWing.quaternion.z, leftWing.quaternion.w
    ]
  );

  const rightWingKF = new THREE.QuaternionKeyframeTrack(
    '.children[2].quaternion',
    [0, 0.5, 1],
    [
      rightWing.quaternion.x, rightWing.quaternion.y, rightWing.quaternion.z, rightWing.quaternion.w,
      rightWing.quaternion.x, rightWing.quaternion.y, rightWing.quaternion.z + 0.2, rightWing.quaternion.w,
      rightWing.quaternion.x, rightWing.quaternion.y, rightWing.quaternion.z, rightWing.quaternion.w
    ]
  );
  
  tracks.push(leftWingKF, rightWingKF);
  const clip = new THREE.AnimationClip('wingFlap', 1, tracks);
  
  return {
    model: birdGroup,
    animations: [clip],
    mixer
  };
};

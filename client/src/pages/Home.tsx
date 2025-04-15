import { Helmet } from 'react-helmet'
import Hero from '~/components/Home/Hero'
import Specials from '~/components/Home/Specials'
import GetStarted from '~/components/Home/GetStarted'
import styles from '~/components/Home/styles.module.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { start } from 'nprogress'

gsap.registerPlugin(useGSAP, ScrollTrigger);
export function Component() {
  const main = useRef(null)
  const hero = useRef(null)
  const specials = useRef(null)
  const gs = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        end: "+=1500",
        scrub: 1
      }
    })
    tl.from(hero.current, {
      opacity: 0
    })
    
    tl.from(specials.current, {
      xPercent: -100,
      opacity: 0,
      scrollTrigger: {
        start: "center bottom"
      }
    })
    
    tl.from(gs.current, {
      xPercent: -100,
      opacity: 0
    })
  })

  return (
    <>
      <Helmet>
        <title>MOKSHA IX | Home</title>
      </Helmet>
      <main className={styles['home']} ref={main}>
        <div ref={hero}>
          <Hero />
        </div>
        <div ref={specials}>
          <Specials />
        </div>
        <div ref={gs}>
          <GetStarted />
        </div>
      </main>
    </>
  )
}

Component.displayName = 'Home'

import { Helmet } from 'react-helmet'
import Hero from '~/components/Home/Hero'
import Specials from '~/components/Home/Specials'
import GetStarted from '~/components/Home/GetStarted'
import styles from '~/components/Home/styles.module.css'
import SplashCursor from '../components/SplashCursor'
import Phoenix from '~/components/MokhshaBird'
import { useState } from 'react'

export function Component() {
  const [showContent, setShowContent] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)

  const handleComplete = () => {
    setShowContent(true)
    setIsAnimating(false)
  }

  return (
    <>
      <Helmet>
        <title>MOKSHA IX | Home</title>
      </Helmet>
      <main className={`${styles['home']} ${isAnimating ? styles['animating'] : ''}`}>
        <Phoenix onComplete={handleComplete} />
        <SplashCursor></SplashCursor>
        <Hero />
        <Specials />
        <GetStarted />
      </main>
    </>
  )
}

Component.displayName = 'Home'

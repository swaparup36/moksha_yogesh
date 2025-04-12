import { Helmet } from 'react-helmet'
import Hero from '~/components/Home/Hero'
import Specials from '~/components/Home/Specials'
import GetStarted from '~/components/Home/GetStarted'
import styles from '~/components/Home/styles.module.css'
import SplashCursor from '../components/SplashCursor'
export function Component() {
  return (
    <>
      <Helmet>
        <title>MOKSHA IX | Home</title>
      </Helmet>
      <main className={styles['home']}>
        <SplashCursor></SplashCursor> 
        <Hero />
        <Specials />
        <GetStarted />
      </main>
    </>
  )
}

Component.displayName = 'Home'

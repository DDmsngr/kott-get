import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Free100 from './components/Free100'
import Hero from './components/Hero'
import Install from './components/Install'
import { useRelease } from './useRelease'

export default function App() {
  const release = useRelease()
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Hero release={release} />
        <main>
          <Install />
          <Features />
          <Free100 />
          <Faq />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}

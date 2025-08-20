
import Hero from '../components/hero'
import Services from '../components/services'
import About from '../components/about'
import Contact from '../components/contact'
import WhatsAppButton from '../components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
      <WhatsAppButton />
    </main>
  )
}

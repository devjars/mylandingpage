import './App.css'
import IconMarquee from './components/IconMarquee'
import Layout from './Layout'
import Hero from './sections/Hero'
import Qoute from "./sections/Qoute"
import Abouts from './sections/About'
import Features from "./sections/Features"
import ThumbnailMarquee from "./components/ThumbnailMarquee"
import Contact from "./sections/Contact"

function App() {
  return (
    <Layout>
      <Hero />
      <IconMarquee />
      <Abouts />
      <Features />
      <ThumbnailMarquee />
      <Qoute />
      <Contact />
    </Layout>
  )
}

export default App

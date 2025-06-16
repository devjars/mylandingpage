import Features from "./sections/Features"
import './App.css'
import IconMarquee from './components/IconMarquee'
import Layout from './Layout'
import Abouts from './sections/About'
import Hero from './sections/Hero'
import ThumbnailMarquee from "./components/ThumbnailMarquee"
import Contact from "./sections/Contact"
import Qoute from "./sections/Qoute"

function App() {

  return (
   <Layout>
    <></>
    <Hero/>
    <IconMarquee/>
    <Abouts/>
    <Features/>
    <ThumbnailMarquee/>
    <Qoute/>
    <Contact/>
   </Layout>
  )
}

export default App

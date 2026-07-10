import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Booking />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App

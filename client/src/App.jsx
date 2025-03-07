import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Header from './components/Header'
import './assets/App.css'
import Footer from './components/Footer'
import About from './components/About'
import Catalog from './components/Catalog'

function App() {
  return (
    <>
      <Header />
      <div id='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

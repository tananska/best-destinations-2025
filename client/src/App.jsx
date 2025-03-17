import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Header from './components/Header'
import '../public/App.css'
import Footer from './components/Footer'
import About from './components/About'
import Catalog from './components/Catalog'
import Details from './components/Details'
import Create from './components/Create'
import Login from './components/Login'
import Register from './components/Register'
import Notfound from './components/Notfound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path='/catalog/:destinationId/details' element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

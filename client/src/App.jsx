import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import Header from './components/navigation/Header'
import '../public/App.css'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Create from './components/create/Create'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Notfound from './components/not-found/Notfound'

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

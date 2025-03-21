import { Route, Routes } from 'react-router'
import { useState } from 'react'

// import usePersistedState from './hooks/usePersistedState'
import { UserContext } from './contexts/UserContext'

import Home from './components/home/Home'
import Header from './components/navigation/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import Details from './components/details/Details'
import Create from './components/create/Create'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Notfound from './components/not-found/Notfound'

import './App.css'

function App() {

  const [authData, setAuthData] = useState({});

  const userLoginHandler = (authData) => {
    setAuthData(authData);
  }

  const userLogoutHandler = () => {
    setAuthData({});
  }

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path='/catalog/:destinationId/details' element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </UserContext.Provider>
  )
}

export default App

import { Route, Routes } from 'react-router'
import { useState } from 'react'

// import usePersistedState from './hooks/usePersistedState'
import { UserContext } from './contexts/UserContext'

import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Destinations from './components/destinations/Destinations'
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
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path='/destination/:destinationId/details' element={<Details />} />
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

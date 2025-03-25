import { Route, Routes } from 'react-router'

import UserProvider from './providers/UserProvider'

import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Destinations from './components/destinations/Destinations'
import Details from './components/details/Details'
import Edit from './components/edit/Edit'
import Create from './components/create/Create'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Notfound from './components/not-found/Notfound'
import AuthGuard from './components/guards/AuthGuard'

import './App.css'

function App() {

  return (
    <UserProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path='/destinations/:destinationId/details' element={<Details />} />
        <Route element={<AuthGuard />}>
          <Route path='/destinations/:destinationId/edit' element={<Edit />} />
          <Route path="/destinations/create" element={<Create />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App

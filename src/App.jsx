import { useState } from 'react'
import './App.css'
import Navbarr from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbarr />
    <Home />
    <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Default from './pages/Default'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Portfolio from './pages/Portfolio'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route path="/"  element={<Home/>}/>
          <Route path="about"  element={<About/>}/>
          <Route path="contact"  element={<Contact/>}/>
          <Route path="portfolio"  element={<Portfolio/>}/>
          {/*Cualquier ruta */}
          <Route path="*"  element={<Default/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
    
    </>
  )
}

export default App

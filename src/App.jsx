import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import FrontendPage from './pages/front-end'
import BackendPage from './pages/back-end'
import KontaktPage from './pages/kontakt'
import ContactPage from './pages/contact'
import Portfolio1Page from './pages/portfolio1'


function App() {

  return (
    <>

  <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/frontend' element={<FrontendPage/>}/>
    <Route path='/backend' element={<BackendPage/>}/>
    <Route path='/portfolio' element={<Portfolio1Page/>}/>
    <Route path='/kontakt' element={<KontaktPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    

    </Routes>
  </Router>
    </>
  )
}
export default App
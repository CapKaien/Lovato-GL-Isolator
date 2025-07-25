import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <Footer />
    </Router>
  )
}

export default App

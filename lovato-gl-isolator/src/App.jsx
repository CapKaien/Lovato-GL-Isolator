import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Add other routes here */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App

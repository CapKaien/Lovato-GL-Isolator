import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css'
import Content from './components/Content'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Content />
              <Testimonials />
            </>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App

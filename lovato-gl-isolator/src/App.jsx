// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import ScrollWrapper from "./components/ScrollWrapper";
import ChatbotWidget from "./components/ChatbotWidget";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <ScrollWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <div data-scroll-section>
                <Hero />
                <Content />
                <ChatbotWidget />
                <Testimonials />
                <Footer />
              </div>
            }
          />
        </Routes>
        {/* Optional: place Footer inside scroll if needed */}
        
      </ScrollWrapper>
    </Router>
  );
}

export default App;

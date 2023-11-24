import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/navigation-bar"
import Work from "./components/work"
import About from "./components/about"
import Contact from "./components/contact"
import Root from "./components/root"
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        {/* basename="/prajwalsingh"> */}
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

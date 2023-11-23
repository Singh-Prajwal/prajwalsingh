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
      <BrowserRouter basename="/prajwalsingh">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/prajwalsingh/contact" element={<Contact />} />
          <Route path="/prajwalsingh/about" element={<About />} />
          <Route path="/prajwalsingh/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

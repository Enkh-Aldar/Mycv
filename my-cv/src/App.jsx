import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"


function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Store from "../src/pages/Store"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App

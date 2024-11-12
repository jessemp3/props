import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection"
import Footer from "./Components/Footer/Footer"
import Escocia from "./Components/Escocia/Escocia"
import China from "./Components/China/China"
import Arruba from "./Components/Arruba/Arruba"
import Grand from "./Components/Grand/Grand"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path="" element={<HeroSection/>} />
          <Route path="Escocia" element={<Escocia/>} />
          <Route path="Grand" element={<Grand/>} />
          <Route path="China" element={<China/>} />
          <Route path="Arruba" element={<Arruba/>} />
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App

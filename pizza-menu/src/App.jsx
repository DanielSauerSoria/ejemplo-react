import './App.css'
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Owner from './pages/Owner'
//import Card from './components/Card'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    /* <Card /> */
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Owner" element={<Owner />} />
      </Routes>
    </>

  )
}

export default App

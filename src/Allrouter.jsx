import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Service from "./components/Service"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Product from "./components/Product"

const Allrouter = ()=>{

    return(
        <>
        <Routes>
            <Route to="/" element={<Home/>}></Route>
            <Route to="/About" element={<About/>}></Route>
            <Route to="/Service" element={<Service/>}></Route>
            <Route to="/Contact" element={<Contact/>}></Route>
            
        </Routes>
        <Header/>
      <Product/>
        </>
    )
}

export default Allrouter
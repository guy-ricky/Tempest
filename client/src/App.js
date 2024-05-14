import React from "react"
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nyumbani from "./pages/Nyumbani";
import { LoginCard } from "./pages/Login";
import { RegisterCard } from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
 function App () {
   return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Nyumbani/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<LoginCard/>} />
      <Route path="/signup" element={<RegisterCard/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/cart" element={<Cart/>} />
    </Route>
    </Routes>
    </BrowserRouter>
   )
 }

 export default App;
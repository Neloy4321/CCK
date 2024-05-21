import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom";
import Products from './products/Products';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Contact from './contact/Contact';
import About from './about/About';


function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product"
            element={authUser ? <Products /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App

import React from "react";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Pharmacy from "./pages/Pharmacy";
import Reception from "./pages/Reception";
import Telemedicine from "./pages/Telemedicine";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => (
  <>
  <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      
  </>
    
);


export default App;

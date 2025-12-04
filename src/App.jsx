import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Video from "./pages/Video";

import NotFound from "./pages/NotFound";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgetPassword"

import Addhotel from "./pages/auth/Addhotel"
import ResetPassword from "./pages/auth/ResetPassword";
import Facilities from "./pages/facilities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home />} />

        <Route path="/addhotel" element={<Addhotel />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Video" element={<Video />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/ResetPassword/:token" element={<ResetPassword/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
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
import Facilities from "./pages/Facilities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home />} />

        <Route path="/addhotel" element={<Addhotel />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/video" element={<Video />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
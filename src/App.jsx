import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Room from "./pages/Room";
import HeaderRooms from "./pages/HeaderRooms";
import NotFound from "./pages/NotFound";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgetPassword"
import HeaderRoom from "./pages/HeaderRooms";
import Addhotel from "./pages/Addhotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home />} />

        <Route path="/addhotel" element={<Addhotel />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room" element={<Room />} />
        <Route path="/HeaderRooms" element={<HeaderRooms />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
       <Route path="/headerroom" element={<HeaderRoom />} /> 
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
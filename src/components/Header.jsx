import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../../src/css/Header.css";
import axios from 'axios';
const Header = () => {
    const [user, setUser ] = useState("")


  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      getUser(token)
    }
  },[])


  const getUser = async (token) => {
     axios.defaults.headers.common['Authorization'] = token;
   const res = await axios.get("http://localhost:5000/auth/getUser");
   console.log(res.data.data)
   setUser(res.data.data)
  }

  const logout = () => {
    const confirm = window.confirm("Are you Sure?")
    if(confirm){
      
    localStorage.removeItem("token");
    window.location.reload();

    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark fixed-top shadow">
      <div className="container">
        {/* Navbar Brand Link */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36, fontWeight: 700 }}>
            L
          </span>
          <span className="fw-bold">LuxStay</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto list-unstyled ">
         
            <li className="nav-item"><Link  className="text-white text-white  active px-3" to="/">Home</Link></li>
            <li className="nav-item"><Link className="text-white px-3" to="/room">Rooms</Link></li>
            <li className="nav-item"><Link className="text-white px-3" to="/about">About</Link></li>
            <li className="nav-item"><Link className="text-white px-3" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex gap-2  ">
        <ul className="nav navbar-nav pull-right gap-3 list-unstyled d-flex align-items-center justify-content-center">
       
        {!user && (<>     <Link to ="/Signup">
         <li className="nav-item bg-warning rounded px-2 m-0 py-2 ">
         
      
            
           <span className="text-white">
        Signup
          </span>
         
        </li>
         </Link>
            <Link to ="/Login">
        <li className="nav-item bg-warning rounded  px-2 m-0 py-2 ">
       <span className="text-white">
          Signin
          </span>
          
          </li>
            </Link>
        </>)  }
        
        {user && (
          <>

          <li>
          
        <p className="bg-warning rounded px-2 m-0 py-2 d-flex "> profile: {user.email}</p>
        </li>
        <li>
          <button onClick={logout} className="bg-warning text-danger py-2 border-0   rounded logout ">Logout</button>
          </li>
          </>
          
        )}
       
      </ul>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

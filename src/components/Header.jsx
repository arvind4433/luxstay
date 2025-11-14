import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../../src/css/Header.css"
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
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark fixed-top shadow">
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
          <ul className="navbar-nav mx-auto ">
         
            <li className="nav-item"><Link  className="text-white text-white  active px-3" to="/">Home</Link></li>
            <li className="nav-item"><Link className="text-white px-3" to="/room">Rooms</Link></li>
            <li className="nav-item"><Link className="text-white px-3" to="/about">About</Link></li>
            <li className="nav-item"><Link className="text-white px-3" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex gap-2">
        <ul className="nav navbar-nav pull-right">
       
        {!user && (<>     <Link to ="/Signup">
         <li className="nav-item">
         
          <a href="signup" className="text-white">
            Signup
          </a>
         
        </li>
         </Link>
            <Link to ="/Login">
        <li className="nav-item">
       
          <a href="signin" className="text-white">
           
            <span className="btn btn-sm rounded primary _600">Signin</span>
          
          </a>
          </li>
            </Link>
        </>)  }
        
        {user && (
          <>
          
        <p>  {user.email}</p>
          <button onClick={logout} className="btn btn-black">Logout</button>
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

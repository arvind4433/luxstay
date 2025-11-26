import { Link } from "react-router-dom"
import Header from "../components/Header";
import Room from "../pages/Room";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
const Home =()=>{
    return(
        <>
        <Header />
       <Sidebar />
   <Room/>
        <Footer/>
        </>
    )
}
export default Home;
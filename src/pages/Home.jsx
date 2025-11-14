import { Link } from "react-router-dom"
import Header from "../components/Header";
import Room from "../pages/Room";
import Footer from "../components/Footer";
import Hero from "../pages/Hero"
const Home =()=>{
    return(
        <>
        <Header />
        <Hero/>
   <Room/>
        <Footer/>
        </>
    )
}
export default Home;
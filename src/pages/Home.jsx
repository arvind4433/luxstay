import { Link } from "react-router-dom"
import Header from "../components/Header";
import Video from "../pages/Video";
import Footer from "../components/Footer";
import Facilities from "./temp"
import Information from "../pages/Information"



const Home =()=>{
    return(
        <>
        <Header />
       
   <Video/>
   
   
<Information/>
< Facilities/>
        <Footer/>
        </>
    )
}
export default Home;
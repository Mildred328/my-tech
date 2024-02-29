
import img1 from "../assets/images/samsung vacuum cleaner.webp"
import Menu from "../component/Nav"
import Spin from "../component/Loader"
import "../css/Home.css"
import Hero from "../component/Hero"
import ProductCard from "../component/ProductCard"
import { Nav } from "react-bootstrap"
function Home () {


    return(
        <>
        {/* <Spin/> */}
        {/* <Menu/> */}
        <Hero heading= "Welcome to Home Page" image={img1}/>
        <ProductCard/>
       <Nav/>
        {/* <h1 className="bg-danger text-light">Welcome to Home Page</h1> */}
        <div className="" style={{backgroundColor: "greenyellow", height: "700px", borderRadius: "15px"}}>
            <img src={img1} alt="" width={250} height={250} />
        </div>
        </>
    )
   
}

export default Home
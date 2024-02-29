import React from 'react'
import hero from "../assets/images/samsung washing machine.jpg"

const Hero = (props) => {
    // Destructuring the props.
    const { heading, image} = props
  return (
    <div style={{backgroundColor: "purple", color: "white"}}>
        <div className="" >
            <img src={image} alt="" height= "200px"/>
        </div>
        {/* <h1>Welcome to my page</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero
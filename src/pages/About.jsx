


import React from 'react'
import Menu from '../component/Nav';
import "../css/About.css"
import Hero from '../component/Hero';
import img from "../assets/images/samsung washing machine.jpg"
import { Nav } from 'react-bootstrap';


const About = () => {
  // JSX
  const myJsx = <h3>This is JSX baby.</h3>
  const myFav = <h4>List of my Favourite Food.
    <ul>
      <li>Apple</li>
      <li>Orange</li>
      <li>Pineapple</li>
    </ul>
  </h4>
  const food = ["amala", "tuwo", "semo", "poundo"]

  const myStyle = {listStyle: "none", color: "blue", backgroundColor: "grey", width: "50%", marginInline: "auto"}

  return (
    <div>
        <Hero heading="Welcome to my about page" image={img}/>
        {/* <Nav/> */}
        <h1>My Tech App 1.0</h1>
        {myJsx}
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>

      <h1>My Tech App 1.0</h1>
      {myJsx}
      {myFav}
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dicta sequi odit odio impedit nemo voluptatum. Tenetur aspernatur soluta repudiandae.</p>

    {/* map through food array */}
    {food.map((food, index)=>{
      return (
        <div className="" key={index} style={myStyle}>
          <p>My Favourite food is {food}</p>
        </div>
      );
    })}

    </div>
  );
};

 
export default About
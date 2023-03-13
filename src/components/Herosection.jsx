import React from 'react'
import styled from "styled-components";

import { NavLink } from 'react-router-dom';

const HeroSection = (props) => {
  return (
    <Wrapper>
    <div className='container'>
    <div className='grid grid-two-column'>  
    <div className='hero-section-data'>
        <p className='intro-data'>Welcome to</p>
        <h1>{props.mydata.name}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum, minima perspiciatis eius velit a dolorum ea quaerat adipisci voluptatum facere omnis
             tempora nemo perferendis debitis maxime reprehenderit commodi magni.
        </p>
        <NavLink to="">
            <button className='btn'>Shop Now</button>

        </NavLink>

    </div>
    <div className='hero-section-pic'>
        <figure>
            <img src='images/pexels-robin-1020370.jpg' alt='hero' className='img-style'/>
        </figure>
        

    </div>
    </div>
    </div>
    </Wrapper>
    
    
  )
};

const Wrapper =styled.section`
 
.container{
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 5rem;
}
    

.grid{
    display: grid;
    gap: 9rem;
    
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}
.btn{
    background-color: rgb(98, 43, 243);
    padding: 1.4re 2.4rem;
    color: rgb(255, 255, 255);
    background-color: none;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 6px;
}
.btn:hover, .btn:active{
    background-color: rgb(43, 243, 70);
    color: rgb(0,0,0);
}
.img-style{
    height: 20rem;
    min-width: 25rem;
}
.hero-section-data{
    padding: 5rem;

}
.hero-section-data p{

    margin: 2rem 0;
  
}
.hero-section-data h1{

    text-transform: capitalize;
    font-weight: bold;
  
}
.hero-section-data .intro-data{

    margin-bottom: 0;
  
}
.hero-section-pic{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
figure{
    position: relative;
}
figure::after{
    content: "";
    position: absolute;
    width: 60%;
    height: 80%;
    background-color: rgba(81,56,238,0.4);
    left:50%;
    top:-1.5rem;
    z-index: -1;
}`;

export default HeroSection;
import React from 'react'
import {useProContext} from "../Context/ProductContext";
import Product from "./Product";
import styled from "styled-components";




const FeatureProduct = () => {
    const{isLoading,featuredProducts}=useProContext();
    
    if(isLoading){
        return <div>....Loading</div>
    }
  return (
    <> 
    <Wrapper>
    <div className="container">
        <div className="intro-data">Check-Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
            {featuredProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>
            })}


        </div>

        
        
    </div>
    </Wrapper>
    </>
    
  )
}

const Wrapper = styled.section`
  padding: 2rem 0;
  background-color: skyblue;
  .container {
    max-width: 120rem;
  }
  .grid{
    display: grid;
    gap: 9rem;
    
}
.grid-three-column{
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    padding: 0rem 1.5rem;
    
}





















  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
   
   
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 2%;
      right: 20%;
      text-transform: uppercase;
      background-color:white;
      color: grey;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: yellow;
    border-radius: 1rem;
    
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color:black;
      text-transform: capitalize;
      text-decoration:none
    }
    .card-data--price {
      color:black;
      text-decoration:none
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeatureProduct
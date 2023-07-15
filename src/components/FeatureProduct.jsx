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
     
    <Wrapper>
    <div className="container">
      <div className='intro-data-div'>
      <div className="intro-data">Check Now!</div>
      
      <div className="common-heading">Our Feature Services</div>
      </div>
        
        
        <div className="grid grid-three-column feature" >
            {featuredProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>
            })}


        </div>
      

        
        
    </div>
    </Wrapper>
    
    
  )
}

const Wrapper = styled.section`
 
padding:5rem 0;
background-color:rgba(148, 175, 181, 0.6);
.container{
  max-width: 120rem;
}
.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}
.feature{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
 .intro-data {
  margin-bottom:0;
  margin-top:0;
  text-transform: uppercase;
  color: #5138ee;
  font-size:2rem;
  font-weight: 600;
}
.card {
  background-color: white;
  border-radius: 1rem;
}
.card:hover{
  transform: translatey(-2rem);
}
figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow:hidden;
  transition:all 0.2s linear;
 
  &:hover::after{
    width:100%;
  }
}
  img {
    max-width: 90%;
    margin-top: 2rem;
    height: 15rem;
    transition: all 0.2s linear;
  }
  .card-data {
    padding: 0 2rem;
  }
  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  
  a {
    color:black;
    font-size:1.4rem:

   
  }
  h3,p{
    color:black;
  }
}

@media screen and (max-width: 1246px) {
  .intro-data-div{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
  }
}
@media screen and (max-width: 1242px) {
  .feature{
    justify-content: space-evenly;
    
  }
}

@media screen and (max-width: 968px) {
  .feature{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    place-items:center;
   
  }
  
  
 

}
@media screen and (max-width: 555px) {
  .common-heading {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 3rem;
    text-transform: capitalize;
  }
}











`;

export default FeatureProduct
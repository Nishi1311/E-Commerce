import React from 'react';
import styled from "styled-components";

import {TbTruckDelivery} from "react-icons/tb" ; 
import {MdSecurity} from "react-icons/md" ;
import {GiReceiveMoney} from "react-icons/gi" ;
import {RiSecurePaymentLine} from "react-icons/ri" ;



const Services = () => {
  return (
    <Wrapper>
    <div className='container'>
        <div className='grid grid-three-column'>
            <div className='services-1'>
                <TbTruckDelivery className="icon"/>
                <h3>Super Fast and Free Delivery</h3>
                
            </div>
            <div className='grid grid-two-row'>
                <div className="services-colum-2">
                    <MdSecurity className="icon"/>
                    <h3>Non-contact Shipping</h3>
                </div>
            
                <div className="services-colum-2">
                    <GiReceiveMoney className="icon"/>
                    <h3>Money-back Guaranteed</h3>
                </div>

            </div>
            

            <div className='services-3'>
                <RiSecurePaymentLine className="icon"/>
                <h3>Super Secure Payment system</h3>

            </div>

        </div>
    </div>
    </Wrapper>
    
  )
}
const Wrapper =styled.section`
.container{
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 2rem;
    
}
.grid{
    display: grid;
    gap: 9rem;
    
}

.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}
.grid-two-row{
   
    grid-template-rows: repeat(2,1fr);
    
}
.services-1,.services-3{
    width: auto;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background-color: aquamarine;
    text-align: center;
    box-shadow: rgba(0,0,0,0.05)0px 1px 2px 0px;
    flex-direction:column;
}


.services-colum-2{
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.05)0px 1px 2px 0px;
}
.container h3{
    font-size: 1.5rem;
    margin-top: 1.4rem;
}
.icon{
    color: #5138ee;
    width: 2.5rem;
    height: 2.5rem;
    padding: 1.5rem;
    border-radius: 50%;
    background-color: #fff;
}`;

export default Services
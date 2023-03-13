import React,{useState}from 'react';
import styled from "styled-components";

import {NavLink} from "react-router-dom";


import {FiShoppingCart} from 'react-icons/fi';
import {CgMenu,CgClose} from 'react-icons/cg';






const Header = () => {
  const [menuIcon,setmenuIcon]= useState();
  return (
    <MainHeader>
    
    <div className={menuIcon ? "logodiv" : "logodiv1"}>
     <NavLink to="/">
      <img src='./images/logo.png' alt='my logo img' className="logo"/>
      </NavLink>
    </div>
    <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className='navbar-lists'>
            <li>
                <NavLink to={"/"} className="link" onClick={()=>setmenuIcon(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/About"}className="link" onClick={()=>setmenuIcon(false)}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/Products"}className="link" onClick={()=>setmenuIcon(false)}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/Contact"}className="link" onClick={()=>setmenuIcon(false)}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={"/Cart"} className="cart-trolley-link">
                <FiShoppingCart className="cart-trolley"></FiShoppingCart>
                <span className="cart-total-item">3</span>
                </NavLink>
            </li>
        </ul>
      </div>
      <div className={menuIcon ? "active mobile-navbar-btn" : "mobile-navbar-btn"}>
        <CgMenu name="menu-outline" className='mobile-nav-icon' onClick={()=>setmenuIcon(true)}/>
        <CgClose className='mobile-nav-icon close-outline' onClick={()=>setmenuIcon(false)}/>
        </div>
      
     
     
       
     
  
  </MainHeader>
  )
};
const MainHeader = styled.header`

  padding:0 4.8rem;
  
  position: relative;
  display:flex;
  justify-content: space-between;
  align-items:center;
  background-color: blueviolet;
 width: 89vw;
 height:8rem;
  
 
 
 
 .logo{
     height: 6rem;
     padding: 1rem;
 }
 .navbar-lists{
     display: flex;
     gap:8rem;
     align-items: center;
     list-style: none;
     font-size: 1.5rem;
     
     
     
 }
 .link{
     text-decoration: none; 
     
 }
 .cart-trolley-link{
     position: relative;
 }
 .cart-trolley{
     position: relative;
     font-size: 2.5rem;
 }
 .cart-total-item{
     position: absolute;
     content: "";
     width: 1.5rem;
     height:1rem;
     background-color: slateblue;
     left:1.8rem; 
     top:-2.1rem;
     border-radius: 45%;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0.3rem;
     
 }.mobile-navbar-btn{
     display: none;
     background-color: transparent;
     cursor: pointer;
     border: none;
 }
 @media screen and (max-width: 798px) {
     
        height:6rem;
        background-color: honeydew;
         
        
        .logo{
         height: 4rem;
         padding: 1rem;
     }
     .mobile-navbar-btn{
         display:inline-block;
         border: 2px solid black;
         top: 30rem;
                     
         }
     .close-outline{
         display: none;
     }
      .mobile-nav-icon{
         font-size: 4.2rem;
      }
      .navbar-lists{
         width: 103vw;
         height: 100vh;
         position: absolute;
         top: 4rem;
         left:0;
        background-color: honeydew;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         visibility: hidden;
         opacity: 0;
         
     }
    
     }
     .logodiv{
         display: none;
     }
     .active .mobile-nav-icon{
         display:none;
     }
     .active .close-outline{
         display:inline-block;
         z-index: 9999;
     }
     
     
     .active .navbar-lists{
         
         
      
         visibility: visible;
         opacity: 1;
         
         z-index: 999;
     }
     .active .link{
         font-size: 2rem;
     }

`;
export default Header;
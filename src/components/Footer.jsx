import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
                <NavLink to="/" className="btn"> Get Started </NavLink>
              
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Thapa Technical</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  
                    <FaYoutube className="icons" />
                 
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 7903251025</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className=" grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} NishiStore. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
















const Wrapper=styled.section`

.contact-short{
    
    background-color: oldlace;
    
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    border-radius: 1rem;
    position:relative;
    z-index:1;
    
    
}
.grid{
    display: grid;
    gap: 9rem;
    
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
    place-items: center;
    
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
.btn1{
    text-decoration: none;
}
footer{
    padding: 10rem 0 9rem 0;
    background-color:navy;
    position:relative;
    top:-5rem;
    z-index:0.9;
}

.grid-four-column{
    grid-template-columns: repeat(4,1fr);
}

.container{
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 2rem;
    
}
.footer-social--icons{
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content:flex-start;
    
}





.icons{
    color:black;
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    
}
.footer-bottom-section{
    margin-bottom:0;
    
}`;
export default Footer;
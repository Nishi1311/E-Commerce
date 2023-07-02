import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
        <div className="contact-short">
          <div className="footer-div">
          <div className="grid grid-two-column div-footer">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
                <NavLink to="/" className="btn"> Get Started </NavLink>
              
            </div>
          </div>
        </div>
        </div>
        
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column footer">
            
            <div className="footer-about">
              <h3>HELP</h3>
              <h4>FAQ</h4>
              <h4>Accessibility</h4>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe for important updates</h3>
              <form action="#" className="footer-subscribe-div">
                <input type="email" name="email" placeholder="YOUR E-MAIL"className="email--enter" />

                <input type="submit" value="subscribe" className="email--enter-div" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaFacebook className="icons" />
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
            <div className=" grid grid-two-column  footer-below">
              <p>
                @{new Date().getFullYear()} Bazzar. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
  )
}











const Wrapper=styled.section`
.contact-short{
  position:relative;
  top:9rem;
  z-index:1;



.footer-div{
    
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,111,121,1) 35%, rgba(0,212,255,1) 100%);
  padding: 5rem 2rem;

 place-self:center;
  max-width: 60vw;
  margin:auto;
    
   
  border-radius: 1rem;
   
  z-index:1;
    
    
}   
}
.div-footer{
  display:flex;
  align-items: center;
  justify-content:center;
}
h4{
  font-size:1.5rem;
  font-weight:400;
}
.footer-subscribe-div{
  display:flex;
  gap:0.5rem;
  flex-direction:column;
}
.email--enter{
  border-radius:4rem;
  padding:0.8rem;
}
.email--enter-div{
  border-radius:4rem;
  padding:0.8rem;
  background-color:yellow;
}





.btn1{
    text-decoration: none;
}
footer{
    
    padding: 10rem 3rem 3rem 1rem;
   
    position:relative;
    background-image: url('images/pexels-photomix-company-96627.jpg');
    background-repeat:no-repeat;
    
   
    
    z-index:0.9;
}
.footer{
  padding:4rem;
}






.footer-social--icons{
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content:flex-start;
    
}





.icons{
    color:black;
    width: 4rem;
    height: 4rem;
    padding:0.5rem;
    border-radius: 50%;
  &:hover{
    color:black;
    background-color:white;
  }  
    
}
.footer-below{
  display:flex;
  justify-content:center;
}

@media screen and (max-width: 1200px) {
  .grid-two-column{
    grid-template-columns: 1fr;
    place-items: center;
    gap:1.5rem;
    
}
.grid-four-column{
  grid-template-columns: repeat(2,1fr);
  
  
}
h3{
  font-size:2rem;
  font-weight:700;
}
.div-footer > .btn{
  font-size:1rem;
}
}

@media screen and (max-width: 900px) {
  .footer{
    padding:3rem;
  }
  .footer-div{
    
   
    padding: 5rem 2rem;
      
      
  }
}
@media screen and (max-width: 580px) {
  .grid-two-column{
    grid-template-columns: repeat(1,1fr);
    
    
  }
  .div-footer{
    flex-direction:column;
  }
}

@media screen and (max-width: 520px) {
  .container{
 padding:1rem 1rem;
  }
  footer{
    margin:0.5rem;
    padding-left:3rem;
  }
  h3{
    font-size:1.3rem;
  }
p{
  font-size:0.8rem;

}
  .grid{
    gap:2.5rem;
  }

.footer{
  padding:1.5rem;
}

.footer-div {
  padding:1rem 1rem;
  h3{
    font-size:1.3rem;
    font-weight:bold;
   }
  
  }
.btn{
  font-size:1rem;
}
.footer-social--icons{
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content:flex-start;
  
}
.email--enter{
  max-width:80%;
}
.footer-subscribe-div{
  display: flex;
  flex-direction:column;
}
.email--enter-div{
  max-width:80%;
}
.div-footer > .btn{
  font-size:0.8rem;
}
.footer-bottom--section p{
  font-size:1.5rem;
}
.div-footer h3{
  font-size:1.5rem;
}



}
@media screen and (max-width: 475px) {
  footer{
    padding-left:1rem;
    padding-right:1rem;
  }
  h3{
    font-size:1rem;
  }
  h4{
    font-size:1rem;
  }

p{
  font-size:0.8rem;

}
.footer-bottom--section p{
  font-size:1rem;
}
.grid-four-column{
  grid-template-columns: repeat(1,1fr);
  
  
}


}
@media screen and (max-width: 345px) {

  .email--enter-div{
    max-width:50%;
  }
  footer{
   
    padding-left:0.3rem;
  }
  .icons{
    color:black;
    width: 2rem;
    height: 2rem;
    padding:0.2rem;
    border-radius: 50%;}
    .footer-social--icons{
      
      gap:0.5rem;
     
      
  }
  .grid{
    gap:2rem;
  }
    

}
`;
export default Footer;
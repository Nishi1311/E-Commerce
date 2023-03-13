import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
<Wrapper>
<div className="container">
  <div className='connect'>
    <h2>Feel Free To Contact Us</h2>
</div>
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248835.48874896605!2d77.49749505684784!3d12.96863700997227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1675422097488!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="location"></iframe>
  

  

</div>
<div className='contact-form'>
  <form action="https://formspree.io/f/xwkjvdkw" method="POST" className='inputtext'>
    <div className='inputtext1'>
    <input type="text" name='UserName' placeholder="Username" required></input>
    </div>
    <div className='inputtext1'>
    <input type='email' name='E-Mail' placeholder="Email"  required></input>
    </div>
    <div >
    <textarea name='Message' cols='30' rows="10" placeholder="Enter your message here"  required></textarea>
    </div>
    <div className='btn'>
      <input type='submit' value='Submit' ></input>
    </div>

  </form>
</div>

</div>
  </Wrapper>
  )
}


const Wrapper=styled.section`

.container{
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 2rem;
  
}
.connect{
  display: flex;
  
  align-items: center;
  justify-content: center;
  
}
.contact-form{
  margin: 2rem 0;
  padding: 2rem 0;
  display:flex;
  gap: 7rem;
  align-items: center;
  justify-content: center;
  
  flex-direction: column;
  background-color: aqua;
}
.inputtext{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  
  
}
.inputtext1{
  border: 2px solid black;
  border-radius: 0.5rem;
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
}`;

export default Contact
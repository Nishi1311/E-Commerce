import React from 'react';
import styled from "styled-components";


const Trusted = () => {
  return (
    <Wrapper>
    <div className='div1 container'>
      <h3>Trusted by 10000+ Companies</h3>
      <div className='div2'>
          <div className='grid grid-five-column'>
            <div>abc</div>
            <div>bcd</div>
            <div>def</div>
            <div>hhh</div>
            <div>jjjik</div>
            
          </div>
      </div>
    </div>
    </Wrapper>
  )
}



const Wrapper=styled.section`
.div1{
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: dimgray;
}
.div2{
    border: 2px solid black;
    border-radius: 10rem;
}
.container{
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 2rem;
    
}
.grid{
    display: grid;
    gap: 9rem;
    
}

.grid-five-column{
    grid-template-columns: repeat(5,1fr);
}
h3{
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: bold;
}
`;

export default Trusted;
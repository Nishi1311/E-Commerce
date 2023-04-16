import React from 'react'
import {BsFillGridFill} from 'react-icons/bs';
import {BsList} from 'react-icons/bs';
import styled from 'styled-components';
import {useFilterContext} from "../Context/FilterContext"
const Sort = () => {
  const {filter_products,setGridView ,setListView,grid_view,sorting}=useFilterContext()
  return (
    <Wrapper>
    <div className='grid grid-three-column'>
      <div className='icon-div'>
        <button  onClick={setGridView} className={grid_view ? "active btn" : "btn"}>
          <BsFillGridFill/>
        </button>
        <button onClick={setListView} className={!grid_view ? "active btn" : "btn"}>
          <BsList/>
        </button>
      </div>
      <div>{`${filter_products.length}`} available products</div>
      <div className="sort-selection">
        
          <label htmlFor="sort"></label>
          <select name="sort" id="sort"onClick={sorting}>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
        
          </select>
        
      </div>
      </div>
    
    </Wrapper>
  )
}
const Wrapper= styled.section`
.grid{
  display: grid;
  gap: 9rem;
  margin-top:1rem;
  
}

.grid-three-column{
  grid-template-columns: repeat(3,1fr);
}
.btn{
  background-color: grey;
    padding: 1rem;
    margin: 0 0.5rem;

    color: black;
    
    cursor: pointer;
    font-size:1rem;
    border: none;
    
    
   
}
.active{
  background-color: black;
  color: white;
}
`

export default Sort
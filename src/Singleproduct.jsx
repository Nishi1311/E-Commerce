import React, { useEffect }from 'react';
import { useParams } from 'react-router-dom';
import{useProContext}from "./Context/ProductContext";
/*import PageNavigation from './components/PageNavigation';
import {TbTruckDelivery,TbReplace} from "react-icons/tb" ;
import {MdSecurity} from "react-icons/md" ;
import MyImage from './components/MyImage';
import FormatPrice from './Helper/FormatPrice';*/
 
const API= "https://api.pujakaitem.com/api/products ";

const SingleProduct = () => {
  const{getSingleProduct,isSingleLoading}=useProContext();
    const {id}=useParams();
    /*const{
      name,company,price,stock,stars,reviews,image,description}=singleProduct*/
    
    useEffect(()=>{
      getSingleProduct(`${API}?id=${id}`)
    });

    if(isSingleLoading){
      return <div>Loading...</div>
    }
   
    
  return (
    <>
    <div>hi</div>
    
   

      </>
  )
}


export default SingleProduct
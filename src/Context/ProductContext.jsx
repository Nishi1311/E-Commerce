import React, { useContext,useEffect,useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/ProductReducer';


const ProductContext=React.createContext();
const initialState={
   isLoading:false,
   isError:false,
   products:[],
   featuredProducts:[],
}

const AppProvider=({children})=>{
   const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
      dispatch({type:'SET_LOADING'})
     axios.get("https://api.pujakaitem.com/api/products").then((res)=>{
       dispatch({type:'SET_API_DATA',payload:res.data})
     }).catch((err)=>{
      dispatch({type:'API_ERROR'})
     })
    },[])
    return(
        <ProductContext.Provider value={{...state}}> 
        {children}
        </ProductContext.Provider> 
    )
 }
 const useProContext=()=>{
    return useContext(ProductContext)
 }
 export {ProductContext,AppProvider,useProContext};
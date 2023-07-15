import React,{useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";



const CartContext = React.createContext();
const getLocalCartData=()=>{
 let localData=localStorage.getItem('nishiitem');
  //if (localData ===[])
  //{
    //return [];
  //}
  //else{
    //return JSON.parse(localData);
 // }
 const parsedata=JSON.parse(localData);
 if(!Array.isArray(parsedata))return [];

 return parsedata;
}

const initialState = {
  cart: getLocalCartData(),
  //cart:[],
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};


const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, products) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, products }});
   
  };
  const removeItem=(id)=>{
    dispatch({ type: "REMOVE_FROM_CART", payload:  id });
  }
   
  const setdecrease = (id) => {
    dispatch({ type: "DECREASE", payload:  id });
  };
   
  const setincrease = (id) => {
    dispatch({ type: "INCREASE", payload:  id });
  };

 useEffect(()=>{
    localStorage.setItem('nishiitem',JSON.stringify(state.cart))
  },[state.cart])
 
  const clearCart=()=>{
    dispatch({ type: "CLEAR_CART"});
  }

 

  return (
    <CartContext.Provider value={{ ...state, addToCart,removeItem,clearCart,setdecrease,setincrease}}>
      {children} 
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, products} = action.payload;
      // tackle the existing product
      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      }
      else{

    
    
  
      let cartProduct;
  
      cartProduct = {
        id: id + color,
        name: products.name,
        color,
        amount,
        image: products.image[0].url,
        price: products.price,
        max: products.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  //remove selected row from cart
    if (action.type === "REMOVE_FROM_CART") {
      let updatedCart=state.cart.filter((curele)=> curele.id !== action.payload);
      return{
        ...state,
        cart: updatedCart,
      }
    }
    //clearcart
    if (action.type === "CLEAR_CART") {
      return{
        ...state,
        cart:[],
      }
    }
    //decrement
    if(action.type==="DECREASE")
    {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id ===action.payload) {
          let decrementAmount = curElem.amount-1;
          if(decrementAmount <= 1)
          {
            decrementAmount = 1;
          }
          return{
            ...curElem,
            amount:decrementAmount,
          }


    }
    else{
      return curElem
    }
  })
  return{
    ...state,
    cart:updatedProduct
  }
}
//increment

if(action.type==="INCREASE")
    {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id ===action.payload) {
          let incrementAmount = curElem.amount+1;
          if(incrementAmount >= curElem.max)
          {
            incrementAmount = curElem.max;
          }
          return{
            ...curElem,
            amount:incrementAmount,
          }


    }
    else{
      return curElem
    }
  })
  return{
    ...state,
    cart:updatedProduct
  }
}
//CART TOTAL ITEm,

/////
if (action.type === "CART_TOTAL_ITEM_PRICE") {
     let {total_item,total_price}= state.cart.reduce((initialVal, curElem) => {
       let { price,amount } = curElem;

       initialVal.total_item = initialVal.total_item + amount;
       initialVal.total_price = initialVal.total_price + price * amount;
       return initialVal;
     }, 
     {
      total_item:0,
      total_price:0,
     }
     );

     return {
       ...state,
       total_item,
       total_price,
     };
   }

   //if (action.type === "CART_TOTAL_ITEM") {
    //let {total_item} = state.cart.reduce((initialVal, curElem) => {
     // let { amount } = curElem;

      //initialVal.total_item += amount;
      //return initialVal;
    //});

   // return {
    //  ...state,
      //total_item,
    ////};
  //}

//if (action.type === "CART_TOTAL_PRICE") {
     //let total_price = state.cart.reduce((initialVal, curElem) => {
      // let { price, amount } = curElem;

       //initialVal = initialVal + price * amount;

      // return initialVal;
    // }, 0);

     //return {
      // ...state,
      // total_price,
   // };
  // }




  
    
  //////
    return state;
  };
  
  export default CartReducer;


 

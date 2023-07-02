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

    return state;
  };
  
  export default CartReducer;


 

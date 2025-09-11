// import { createContext } from "react";
// import { FoodList } from "../assets/Asset";

// export const Context = createContext(null)

// const StoreContextProvider = (props) =>{


//     const contexValue ={
//         FoodList,
//     }
//     return (
//         <StoreContext.Provider value ={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;

import { createContext,useState,useEffect} from "react";
import { foodList } from "../assets/Asset.jsx";

// Create context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]){
      setCartItems((prev)=> ({...prev, [itemId]:1}))
    }
    else {
      setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  useEffect(()=>{
    console.log("Cart items updated:", cartItems);
  },[cartItems])
  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

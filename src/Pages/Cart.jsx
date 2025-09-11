// import React, { useContext } from "react";
// import { StoreContext } from "../Context/Context.jsx"

// const Cart = () => {
//   const { cartItems, foodList, addToCart, removeFromCart } = useContext(StoreContext);

//   // Filter food items that are in the cart
//   const cartData = foodList.filter((item) => cartItems[item.id] > 0);

//   // Calculate total
//   const total = cartData.reduce(
//     (sum, item) => sum + item.price * cartItems[item.id],
//     0
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Your Cart</h2>

//       {cartData.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartData.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 padding: "10px 0",
//                 borderBottom: "1px solid #ddd",
//               }}
//             >
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>Price: ₹{item.price}</p>
//                 <p>Quantity: {cartItems[item.id]}</p>
//               </div>
//               <div>
//                 <button onClick={() => removeFromCart(item.id)}>-</button>
//                 <button onClick={() => addToCart(item.id)}>+</button>
//               </div>
//             </div>
//           ))}

//           <h3>Total: ₹{total}</h3>
//           <button style={{ marginTop: "10px" }}>Proceed to Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { StoreContext } from "../Context/Context.jsx";
import { Asset } from '../../src/assets/Asset.jsx';
import "../Styles/Cart.css";   // Import external CSS

const Cart = () => {
  const { cartItems, foodList, addToCart, removeFromCart, setCartItems } =
    useContext(StoreContext);

  // Filter items in cart
  const cartData = foodList.filter((item) => cartItems[item.id] > 0);

  // Calculate total
  const total = cartData.reduce(
    (sum, item) => sum + item.price * cartItems[item.id],
    0
  );

  // Remove item completely
  const removeItemCompletely = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  return (
    <>
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>

      {cartData.length === 0 ? (
        
        <div className="empty-cart1">
          <img src={Asset.emptycart} alt="" />
          <p className="empty-cart">Your cart is empty.</p>
        </div>
        
      ) : (
        <div className="cart-items">
          {cartData.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Item Image */}
              <img src={item.image} alt={item.name} className="cart-item-image" />

              {/* Item Info */}
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Subtotal: ₹{item.price * cartItems[item.id]}</p>
              </div>

              {/* Quantity Controls */}
              <div className="cart-item-controls">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{cartItems[item.id]}</span>
                <button onClick={() => addToCart(item.id)}>+</button>
              </div>

              {/* Remove Item Button */}
              <button
                onClick={() => removeItemCompletely(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <h3 className="cart-total">Total: ₹{total}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>

    </>
  );
};

export default Cart;

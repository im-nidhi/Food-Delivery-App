// import React,{useContext}  from 'react'
// import './FoodItem.css'
// import { StoreContext } from '../../Context/Context.jsx'

// const FoodItem = ({id, name, price,description,image}) => {


//   const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
//   return (
//     <div className='food-item'>
//         <div className="food-item-image-container">
//             <img src={image} alt={name} />
            
   

//         </div>
//         {!cartItems[id]
//                 ? <button className='add-to-cart' onClick={() => addToCart(id)}>Add to Cart</button>
//                 : (
//                     <div className='cart-controls'>
//                         <button onClick={() => removeFromCart(id)} >-</button>
//                         <span>{cartItems[id]}</span>
//                         <button onClick={() => addToCart(id)}>+</button>
//                     </div>
//                   )
//             }
//         <div className="food-item-info">
//             <p>{name}</p>
//             <p>{description}</p>
//             <p>${price}</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItem


import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../Context/Context.jsx'
import { useNavigate } from 'react-router-dom'

const FoodItem = ({ id, name, price, description, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  const navigate = useNavigate()

  // handle click on food card → go to /meenu?category=<category>
  const handleFoodClick = () => {
    navigate(`/meenu?category=${category}`)
  }

  return (
    <div className='food-item'>
      <div 
        className="food-item-image-container"
        onClick={handleFoodClick} 
        style={{ cursor: "pointer" }}
      >
        <img src={image} alt={name} />
      </div>

      {!cartItems[id]
        ? <button className='add-to-cart' onClick={() => addToCart(id)}>Add to Cart</button>
        : (
          <div className='cart-controls'>
            <button onClick={() => removeFromCart(id)}>-</button>
            <span>{cartItems[id]}</span>
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        )
      }

      <div className="food-item-info" onClick={handleFoodClick} style={{ cursor: "pointer" }}>
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem

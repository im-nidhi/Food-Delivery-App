// // import React, { useContext } from "react";
// // import "./FoodDisplay.css";
// // import { StoreContext } from "../../Context/Context.jsx";
// // import FoodItem from "../FoodItem/FoodItem.jsx";

// // const FoodDisplay = ({ category, foods }) => {
// //   // if foods prop is passed, use it. Otherwise, use context foodList
// //   const { foodList } = useContext(StoreContext);
// //   const displayFoods = foods || foodList;

// //   return (
// //     <div className="food-display">
// //       <h2>Top Dishes Near You</h2>
// //       <div className="food-display-list">
// //         {displayFoods.map((item, index) => {
// //           if (category === "All" || category === item.category) {
// //             return (
// //               <FoodItem
// //                 key={index}
// //                 id={item.id}
// //                 name={item.name}
// //                 price={item.price}
// //                 description={item.description}
// //                 image={item.image}
// //               />
// //             );
// //           }
// //           return null; // must return something inside map
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FoodDisplay;

// import React, { useContext } from "react";
// import "./FoodDisplay.css";
// import { StoreContext } from "../../Context/Context.jsx";
// import FoodItem from "../FoodItem/FoodItem.jsx";

// const FoodDisplay = ({ category, foods, setCategory }) => {
//   const { foodList } = useContext(StoreContext);
//   const displayFoods = foods || foodList;

//   return (
//     <div className="food-display">
//       <h2>Top Dishes Near You</h2>
//       <div className="food-display-list">
//         {displayFoods.map((item, index) => {
//           if (category === "All" || category === item.category) {
//             return (
//               <FoodItem
//                 key={index}
//                 id={item.id}
//                 name={item.name}
//                 price={item.price}
//                 description={item.description}
//                 image={item.image}
//                 category={item.category} 
//                 onClick={() => setCategory && setCategory(item.category)} 
//               />
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;

import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/Context.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({ category, foodList: propFoodList }) => {
  const { foodList: contextFoodList } = useContext(StoreContext);

  // use prop if provided, else fallback to context
  const displayFoods = propFoodList || contextFoodList;

  const filteredFoods = displayFoods.filter(
    (item) => category === "All" || category === item.category
  );

  return (
    <div className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredFoods.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

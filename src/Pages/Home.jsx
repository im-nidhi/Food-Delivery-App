// import categories from "../data/categories.json"; 
// import React from "react";
// import { Asset } from "../Components/assets/Asset";
// import '../Styles/category.css';

// function Home() {
//   return (
//     <div className="categories-container">
//       <h2 className="categories-title">What's on your mind?</h2>

//         <div className="categories-grid">
//             {categories.map((cat, i) => (
//                 <div key={i} className="category-item">
//                     <img src={Asset[cat.img]} alt={cat.name} />
//                     <p onClick={sub()}>{cat.name}</p>
                    
//                 </div>
//              ))}

                   
//         </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Asset } from "../Components/assets/Asset";
// import categories from "../data/categories.json";
// import "../Styles/category.css";
// import Header from "../Components/Header/Header";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <Header/>>
//     <div className="categories-container">
//       <h2 className="categories-title">What's on your mind?</h2>

//       <div className="categories-grid">
//         {categories.map((cat, i) => (
//           <div key={i} className="category-item">
            
          
//             <p 
//               className="category-name"
//               onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
//             >
//               {cat.name}
//             </p>

//             <img src={Asset[cat.img]} alt={cat.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useState } from "react";
// import { Asset } from "../Components/assets/Asset";
// import categories from "../data/categories.json";
// import "../Styles/category.css";

// function Home() {
//   const [openCategory, setOpenCategory] = useState(null);

//   const toggleCategory = (name) => {
//     setOpenCategory(openCategory === name ? null : name);
//   };

//   return (
//     <div className="categories-container">
//       <h2 className="categories-title">What's on your mind?</h2>

//       <div className="categories-grid">
//         {categories.map((cat, i) => (
//           <div key={i} className="category-item">
//              <img src={Asset[cat.img]} alt={cat.name} />
            
//             <p 
//               className="category-name" 
//               onClick={() => toggleCategory(cat.name)}
//             >
//               {cat.name}
//             </p>

//             {openCategory === cat.name && (
//               <div className="subcategories-grid">
//                 {cat.subcategories.map((sub, j) => (
//                   <div 
//                     key={j} 
//                     className="subcategory-card"
//                     onClick={() => alert(`Clicked ${sub.name}`)}
//                   >
//                     <img src={Asset[sub.img]} alt={sub.name} />
//                     <p>{sub.name}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


import React , { useState} from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Explore Menu/Menu'
import FoodDisplay from '../Components/Food Display/FoodDisplay';
import FeedbackForm from '../Components/Form/FeedbackForm';
import { foodList } from '../assets/Asset';

const Home = () => {

  const [category, setCategory] = useState("All");

  const previewFoodList = foodList.slice(0, 8)
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      {/* <FoodDisplay category={category} /> */}
      <FoodDisplay category={category}  foodList={previewFoodList} />
      <FeedbackForm/>
    </div>
  )
}

export default Home

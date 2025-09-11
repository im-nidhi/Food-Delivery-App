// import React, {useState} from 'react'
// import Menu from '../Components/Explore Menu/Menu'
// import FoodDisplay from '../Components/Food Display/FoodDisplay';

// const Meenu = () => {
//    const [category, setCategory] = useState("All"); 
//   return (
//     <>
//       <Menu category={category} setCategory={setCategory} />
//       <FoodDisplay category={category} />
//     </>
//   )
// }

// export default Meenu


import React, { useState, useEffect } from 'react'
import Menu from '../Components/Explore Menu/Menu'
import FoodDisplay from '../Components/Food Display/FoodDisplay'
import { useLocation } from 'react-router-dom'

const Meenu = () => {
  const [category, setCategory] = useState("All");
  const location = useLocation();

  // read ?category= from query string when page loads / changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("category");
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [location]);

  return (
    <>
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  )
}

export default Meenu

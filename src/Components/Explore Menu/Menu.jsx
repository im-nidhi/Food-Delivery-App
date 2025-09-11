import React from 'react';
import './Menu.css'
import { MenuList } from '../../assets/Asset.jsx';

const Menu = ({category, setCategory}) =>{
    return(
<>
        <div className='menu-container'>
            <h1 className='menu-title'>Explore Our Menu</h1>
            <div className="explore-menu-list">
            {MenuList.map((item,index)=>{
                return(
                     <div
              key={index}
              className={`explore-menu-list-item ${category === item.menuName ? "active" : ""}`}
              onClick={() => setCategory(item.menuName)} 
              style={{ cursor: "pointer" }}
            >
                        <img src={item.menuImage}  alt="" />
                        <p> {item.menuName} </p>
                    </div>
                )
            })}
        </div>
        </div>
</>
    )
}

export default Menu;

// import React from 'react';
// import './Menu.css'
// import { MenuList } from '../../assets/Asset.jsx';

// const Menu = ({ category, setCategory }) => {
//   return (
//     <div className='menu-container'>
//       <h1 className='menu-title'>Explore Our Menu</h1>
//       <div className="explore-menu-list">
//         {MenuList.map((item, index) => (
//           <div
//             key={index}
//             className={`menu-item ${category === item.menuName ? "active" : ""}`}
//             onClick={() => setCategory(item.menuName)}
//             style={{ cursor: "pointer" }}
//           >
//             <img src={item.menuImage} alt={item.menuName} />
//             <p>{item.menuName}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Menu;

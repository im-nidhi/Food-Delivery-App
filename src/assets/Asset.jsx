import logo from './Logo.jpg'

import emptycart from './emptycart.gif'

import biryani from './biryani.webp'
import pizza from './pizza.jpg'
import noodles from './noodles.webp'
import icecream from './icecream.jpg'
import khichdi from './khichdi.jpg'
import chinese from './chinese.webp'
import burger from './burger.jpg'
import sweets from './sweets.jpg'
import salad from './salad.jpg'
import sandwich from './sandwich.jpg'
import pasta from './pasta.webp'
import biryani1 from './Hyderabadi-Biryani.webp'

import List1 from './Menu1.jpg'
import List2 from './Menu2.webp'
import List3 from './Menu3.webp'
import List4 from './Menu4.webp'
import List5 from './Menu5.jpeg'
import List6 from './Menu6.jpg'
import List7 from './Menu7.webp' 

import Category1 from './Category1.jpg'
import Category2 from './Category2.jpg'
import Category3 from './category3.jpeg'
import Category4 from './Category4.jpeg'
import Category5 from './Category5.jpg'
import Category6 from './Category6.jpg'
import Category7 from './Category7.jpeg'
import Category8 from './Category8.jpg'
import Category9 from './Category9.avif'
import Category10 from './Category10.webp' 
import Category11 from './Category11.jpg'
import Category12 from './Category12.webp'
import Category13 from './Category13.jpeg'
import Category14 from './Category14.jpeg'
import Category15 from './Category15.jpg'
import Category16 from './Category16.jpg'
import Category17 from './Category17.jpg'
import Category18 from './Category18.jpeg'
import Category19 from './Category19.webp'
import Category20 from './Category20.jpeg'
import Category21 from './Category21.jpeg'
import Category22 from './Category22.jpg'
import Category23 from './Category23.jpg'
import Category24 from './Category24.png'
import Category25 from './Category25.jpg'
import Category26 from './Category26.jpeg'
import Category27 from './Category27.webp'
import Category28 from './Category28.jpg'
import Category29 from './Category29.jpg'
import Category30 from './Category30.webp' 
import Category31 from './Category31.jpg'
import Category32 from './Category32.png'
import Category33 from './Category33.jpeg'
import Category34 from './Category34.jpg'
import Category35 from './Category35.jpg'
import Category36 from './Category36.jpg'
import Category37 from './Category37.jpeg'
import Category38 from './Category38.jpeg'
import Category39 from './Category39.jpeg'
import Category40 from './Category40.jpg'

export const Asset ={
    logo,
    biryani,
    biryani1,
    pizza,
    noodles,
    icecream,
    khichdi,
    chinese,
    burger,
    sweets,
    salad,
    sandwich,
    pasta,
    emptycart
}

export const MenuList = [
    {
        menuName: "Indian",
        menuImage: List1,
    },
    {
        menuName: "Chinese",
        menuImage: List2 ,
    },
    {
        menuName: "Italian",
        menuImage: List3,
    },
    {
        menuName: "Fast Food",
        menuImage: List4,
    },
    {
        menuName: "Beverages",
        menuImage: List5 ,
    },
    // ,
    // {
    //     menuName: "Healthy Options",
    //     menuImage: List7,
    // }
]

export const foodList = [
  {
    id: "1",
    name: "Paneer Tikka Masala",
    image: Category1,
    price: 220,
    description: "Cottage cheese cubes cooked in a creamy tomato gravy with Indian spices.",
    category: "Indian"
  },
  {
    "id": "2",
    "name": "Dal Makhani",
    "image": Category2,
    "price": 180,
    "description": "Slow-cooked black lentils and kidney beans in a buttery sauce.",
    "category": "Indian"
  },
  {
    "id": "3",
    "name": "Veg Biryani",
    "image": Category3,
    "price": 200,
    "description": "Aromatic basmati rice cooked with vegetables and traditional spices.",
    "category": "Indian"
  },
  {
    "id": "4",
    "name": "Chole Bhature",
    "image": Category4,
    "price": 150,
    "description": "Fluffy fried bhature served with spicy chickpea curry.",
    "category": "Indian"
  },
  {
    "id": "5",
    "name": "Masala Dosa",
    "image": Category5,
    "price": 120,
    "description": "Crispy rice crepe filled with spiced potato stuffing, served with chutneys.",
    "category": "Indian"
  },
  {
    "id": "6",
    "name": "Idli Sambar",
    "image": Category6,
    "price": 100,
    "description": "Soft steamed rice cakes served with sambhar and coconut chutney.",
    "category": "Indian"
  },

  {
    "id": "7",
    "name": "Veg Hakka Noodles",
    "image": Category7,
    "price": 160,
    "description": "Stir-fried noodles with vegetables and Indo-Chinese flavors.",
    "category": "Chinese"
  },
  {
    "id": "8",
    "name": "Manchurian",
    "image": Category8,
    "price": 150,
    "description": "Crispy vegetable balls tossed in a spicy soy-based gravy.",
    "category": "Chinese"
  },
  {
    "id": "9",
    "name": "Spring Rolls",
    "image": Category9,
    "price": 120,
    "description": "Crispy rolls stuffed with mixed vegetables served with dip.",
    "category": "Chinese"
  },
  {
    "id": "10",
    "name": "Fried Rice",
    "image": Category10,
    "price": 150,
    "description": "Wok-tossed rice with vegetables, soy sauce, and spices.",
    "category": "Chinese"
  },
  {
    "id": "11",
    "name": "Chilli Paneer",
    "image": Category11,
    "price": 170,
    "description": "Paneer cubes stir-fried with capsicum, onion, and spicy sauce.",
    "category": "Chinese"
  },
  {
    "id": "12",
    "name": "Schezwan Noodles",
    "image": Category12,
    "price": 170,
    "description": "Spicy noodles flavored with Schezwan sauce and vegetables.",
    "category": "Chinese"
  },

  {
    "id": "13",
    "name": "Margherita Pizza",
    "image": Category13,
    "price": 250,
    "description": "Classic pizza with mozzarella cheese and tomato sauce.",
    "category": "Italian"
  },
  {
    "id": "14",
    "name": "Farmhouse Pizza",
    "image": Category14,
    "price": 300,
    "description": "Loaded with fresh onions, capsicum, mushrooms, and tomatoes.",
    "category": "Italian"
  },
  {
    "id": "15",
    "name": "Pepperoni Pizza",
    "image": Category15,
    "price": 320,
    "description": "Cheesy pizza topped with spicy pepperoni slices.",
    "category": "Italian"
  },
  {
    "id": "16",
    "name": "White Sauce Pasta",
    "image": Category16,
    "price": 200,
    "description": "Creamy pasta in a white sauce with herbs and cheese.",
    "category": "Italian"
  },
  {
    "id": "17",
    "name": "Red Sauce Pasta",
    "image": Category17,
    "price": 190,
    "description": "Pasta in a tangy tomato-based sauce with Italian herbs.",
    "category": "Italian"
  },
  {
    "id": "18",
    "name": "Garlic Bread with Cheese",
    "image": Category18,
    "price": 120,
    "description": "Toasted garlic bread topped with melted cheese.",
    "category": "Italian"
  },

  {
    "id": "19",
    "name": "Veg Burger",
    "image": Category19,
    "price": 120,
    "description": "Veggie patty served with lettuce, tomato, and mayo in a bun.",
    "category": "Fast Food"
  },
  {
    "id": "20",
    "name": "French Fries",
    "image": Category20,
    "price": 90,
    "description": "Golden crispy fries served with ketchup.",
    "category": "Fast Food"
  },
  {
    "id": "21",
    "name": "Grilled Sandwich",
    "image": Category21,
    "price": 100,
    "description": "Stuffed with veggies and cheese, grilled to perfection.",
    "category": "Fast Food"
  },
  {
    "id": "22",
    "name": "Tacos",
    "image": Category22,
    "price": 150,
    "description": "Crispy taco shells filled with beans, veggies, and cheese.",
    "category": "Fast Food"
  },
  {
    "id": "23",
    "name": "Nachos with Cheese",
    "image": Category23,
    "price": 130,
    "description": "Crunchy nachos topped with melted cheese and salsa.",
    "category": "Fast Food"
  },

  {
    "id": "24",
    "name": "Cold Coffee",
    "image": Category24,
    "price": 100,
    "description": "Refreshing chilled coffee topped with cream or ice cream.",
    "category": "Beverages"
  },
  {
    "id": "25",
    "name": "Hot Coffee",
    "image": Category25,
    "price": 80,
    "description": "Freshly brewed hot coffee with rich aroma.",
    "category": "Beverages"
  },
  {
    "id": "26",
    "name": "Masala Chai",
    "image": Category26,
    "price": 50,
    "description": "Spiced Indian tea made with milk, ginger, and cardamom.",
    "category": "Beverages"
  },
  {
    "id": "27",
    "name": "Milkshake (Chocolate)",
    "image": Category27,
    "price": 120,
    "description": "Creamy chocolate milkshake topped with whipped cream.",
    "category": "Beverages"
  },
  {
    "id": "28",
    "name": "Orange Juice",
    "image": Category28,
    "price": 90,
    "description": "Freshly squeezed orange juice full of vitamin C.",
    "category": "Beverages"
  },
  {
    "id": "29",
    "name": "Mango Juice",
    "image": Category29,
    "price": 100,
    "description": "Refreshing seasonal mango juice with natural sweetness.",
    "category": "Beverages"
  },

  {
    "id": "30",
    "name": "Ice Cream (Vanilla)",
    "image": Category30,
    "price": 80,
    "description": "Classic vanilla ice cream scoop served chilled.",
    "category": "Desserts"
  },
  {
    "id": "31",
    "name": "Gulab Jamun",
    "image": Category31,
    "price": 90,
    "description": "Soft fried dumplings soaked in sugar syrup.",
    "category": "Desserts"
  },
  {
    "id": "32",
    "name": "Rasmalai",
    "image": Category32,
    "price": 100,
    "description": "Soft paneer balls soaked in sweetened flavored milk.",
    "category": "Desserts"
  },
  {
    "id": "33",
    "name": "Cheesecake",
    "image": Category33,
    "price": 180,
    "description": "Creamy cheesecake with a crunchy biscuit base.",
    "category": "Desserts"
  },
  {
    "id": "34",
    "name": "Donuts",
    "image": Category34,
    "price": 80,
    "description": "Soft, sweet fried dough topped with chocolate or glaze.",
    "category": "Desserts"
  },
  {
    "id": "35",
    "name": "Cupcakes",
    "image": Category35,
    "price": 70,
    "description": "Mini sponge cakes topped with flavored frosting.",
    "category": "Desserts"
  },

   {
    "id": "36",
    "name": "Smoothie Bowl",
    "image": Category36,
    "price": 160,
    "description": "Thick smoothie topped with fruits, nuts, and seeds.",
    "category": "Healthy Options"
  },
  {
    "id": "37",
    "name": "Salad Bowl",
    "image": Category37,
    "price": 150,
    "description": "A mix of fresh greens, vegetables, and dressing.",
    "category": "Healthy Options"
  },
 
  {
    "id": "38",
    "name": "Grilled Sandwich",
    "image": Category38,
    "price": 100,
    "description": "Low-oil sandwich made with fresh veggies and whole wheat bread.",
    "category": "Healthy Options"
  },
  {
    "id": "39",
    "name": "Fruit Platter",
    "image": Category39,
    "price": 140,
    "description": "Freshly cut seasonal fruits served chilled.",
    "category": "Healthy Options"
  },
  {
    "id": "40",
    "name": "Oats Bowl",
    "image": Category40,
    "price": 120,
    "description": "Nutritious oats porridge topped with fruits and honey.",
    "category": "Healthy Options"
  }
]

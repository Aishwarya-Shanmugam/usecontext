import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { createContext } from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import CardComp from './CardComp';


//create Context for sending props 

export const myContext = createContext("")

const App = () => {
  const products = [
    {
        "id": 1,
        "title": "Apple iPhone 13 (128GB)",
        "description": "Sleek design, powerful performance, and innovative features redefine the smartphone experience.",
        "price": 52090,
        "color": "Starlight",
        "discountPercentage": 13,
        "rating": 4.6,
        "stock": 94,
        "brand": "Apple",
        "category": "Smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61NTwRtdzfL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71OxEU5mSCL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71G44HUh7yL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/81otRqY0XXL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61BvZ6EbUvL._SX679_.jpg"
        ]
    },
    {
        "id": 2,
        "title": "Apple 20W USB-C Power Adapter(for iphone, ipad & Airpods) ",
        "description": "Efficiently charge your devices with the iPhone 20W adapter's powerful and fast-charging capabilities.",
        "price": 1699,
        "color": "White",
        "discountPercentage": 11,
        "rating": 4.5,
        "stock": 150,
        "brand": "Apple",
        "category": "Smartphones Accessories",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
          "https://m.media-amazon.com/images/I/61FbIIF5ptL._SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61vtLhO6fDL._SY879_.jpg",
          "https://m.media-amazon.com/images/I/61zIwncQXKL._SX679_.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Apple AirPods(2nd Generation)Case",
        "description": "Seamlessly connect, clear sound, and effortless Siri access in a sleek wireless design.",
        "price": 11999,
        "color": "White",
        "discountPercentage": 19,
        "rating": 4,
        "stock": 50,
        "brand": "Apple",
        "category": "Smartphones Accessories",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
          "https://m.media-amazon.com/images/I/7120GgUKj3L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71NLN1HgFkL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71NTi82uBEL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71QT9PrfxyL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71djnhmfy-L._SX679_.jpg"
        ]
    },
    {
        "id": 4,
        "title": "Apple Silicone Case with MagSafe (for iphone 13)",
        "description": "Protective red silicone iPhone 13 case with MagSafe compatibility for seamless charging and accessories.",
        "price": 3920,
        "color": "Red",
        "discountPercentage": 20,
        "rating": 4.8,
        "stock": 200,
        "brand": "Apple",
        "category": "Smartphones Accessories",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
          "https://m.media-amazon.com/images/I/51PgyFNQVWL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/813d-7KkJEL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71DYmksa77L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71LqeXo57oL._SX679_.jpg"
        ]
    }
]
const[data, setData]= useState(products)

//calculate total quantity 

const totQuantity = data.reduce((total, data)=> total +(data.quantity || 1) ,0)

//calculate total price

const totPrice = data.reduce((total, data)=> total+data.price*(data.quantity||1),0)

  return (
    <div>
     <NavBar totQuantity={totQuantity} />
     <div className='container-fluid h-10  d-flex justify-content-evenly align-items-center p-3 mt-5 ' style={{backgroundColor:"#102863", color:"white", borderRadius:"20px"}}>
          {/* Displaying total price */}
          <h3>Total Price: ₹{totPrice}</h3>
          {/* Displaying total quantity */}
          <h3>Total Quantity: {totQuantity}</h3>
          <button class="btn btn-danger">proceed to pay</button>
      </div>

      {/* Main content container */}
      <div class=" container px-4 px-lg-5 mt-5">
        {/* Providing context to child components */}
        <myContext.Provider value={[data, setData,totPrice,totQuantity]}>
          {/* Child Components */}
          <CardComp />
        </myContext.Provider>
      </div>

    </div>
  );
};

export default App;

import React, { useContext, useReducer, useState } from 'react'
import { createContext } from 'react'
import { cartReducer } from './Reducer';
import { productRducer } from './Reducer';


const Cart=createContext();
export default function Context(props) {
    
   
    const[prod,setprod]=useState(props.p1);
    const[username,setusername]=useState("Guest");
    const[useremail,setuseremail]=useState("");
    const[login,setlogin]=useState(false);
    const[admin,setadmin]=useState(false);
    const[data,setdata]=useState({
      brand
: 
"Marc laurent",
"category"
: 
"men",
colors
: 
['blue', 'black', 'mustard', 'white'],
description
: 
"Name : Trendy Marc Laurent Brand,Cotton Check shirts for Men Vol1 Cotton Shirts for Men, Shirts for Men, Best Shirts for Men, Trending Shirts for Men, Men Shirts New Collection, Check Shirts for Men  Fabric : Cotton  Sleeve Length : Long Sleeves  Pattern : Checked",
fabric
: 
"cotton",
images
:  ['https://images.meesho.com/images/products/230371435/mpa3j_512.webp', 'https://images.meesho.com/images/products/230371431/58zag_512.webp', 'https://images.meesho.com/images/products/230371432/bjlwt_512.webp', 'https://images.meesho.com/images/products/230371433/kezpe_512.webp'],
name
: 
"Check shirt",
price
: 
357,
quantity
: 
[10],
rating
: 
4,
reviews
: 
[{
  "username":"yusvanth",
  "rating":1,
  "userreview":"bad"
},
{
  "username":"yusvanth",
  "rating":1,
  "userreview":"bad"
},
{
  "username":"yusvanth",
  "rating":1,
  "userreview":"bad"
}],
sizes
: 
 ['M', 'L', 'XL', 'XXL'],
sleeve
: 
"full",
type
: 
"shirt",

_id
: 
"6448beca1c41147af6ffd609"
    })
    const products=prod;
    console.log("h",props);

    const[state,dispatch]=useReducer(cartReducer,{
      products:products,
      cart:[]
    })

    const[productState,productDispatch]=useReducer(productRducer,{
      quantity:false,
      rating:0,
      searchQuery:"",
    })
  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch,setusername,
      username,
      admin,
    setlogin,
  setuseremail,
  useremail,
  login,
setadmin,
setdata,
data}}>{props.children}</Cart.Provider>
  )
}
export const CartState=()=>{
  return useContext(Cart);
}




  
import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';
import axios from 'axios'
import SingleProduct from './SingleProduct';
import './styles.css'
import Filters from './Filters';

export default function Home() {
  const auth=CartState();
  const {productState,productDispatch}=CartState();

  const[products,setproducts]=useState([]);
  const[product1,setproduct1]=useState([]);
  const[product2,setproduct2]=useState([]);
 
  console.log("payload",productState);
  useEffect(() => {
    axios.get("https://shoppingecart.onrender.com/admin/admin").then((res)=>{
            setproducts(res.data.user);
            setproduct2(res.data.user);
            console.log("ss",res.data.user)
            
        }).catch((err)=>{
            console.log(err)
        })
  },[])
const fetch=async()=>{
  if(product1.length!=product2.length){
  let data=await axios.get("https://shoppingecart.onrender.com/admin/admin")
   setproduct1(data.data.user)
  }
}
  const fetchDate=(a)=>{
    console.log(product1.length," ",a.length);
    if(products.length!=a.length){
      setproducts(a);
     }
     else{
      let flg=false;
      for(let i=0;i<products.length;i++)
      {
        if(products[i]._id!==a[i]._id){
          flg=true;
          break;
        }
      }
      if(flg){
        setproducts(a);
      }
     }
  fetch();
  }
 



  const transform = async() => {
    // if (products.length != 0) {
      let sortProduct = product1;
      let pro = productState.sort;
      let rat=productState.rating;
      let search=productState.searchQuery;
      let type=productState.type;

  
      if (pro) {
        sortProduct = await sortProduct.sort((a, b) => {
          return pro === "Low to high" ? a.price - b.price : b.price - a.price;
        });
      }
      if(rat){
        sortProduct=await sortProduct.filter(
          (prod)=>{return prod.rating >= rat }
        )
      }
      if(type){
        sortProduct=await sortProduct.filter(
          (prod)=>{return prod.type === type }
        )
      }
      if(search){
        sortProduct=await sortProduct.filter((prod)=>{
          console.log(prod.name.toLowerCase().includes(search))
          
          return prod.name.toLowerCase().includes(search)
          
        })
        
       
      }
      {console.log(sortProduct.length)}
      console.log(sortProduct);
       fetchDate(sortProduct);
       return sortProduct;

    // }
    // let s1=new Array();
    // console.log("hhh",typeof(s1))
    // return s1;
  }

  

  
  
    
    
  return (
    <div className='home'>
      <Filters />
      

      <div className='productContainer'>
        {console.log("09",typeof(transform()))}
        {console.log("10",auth.state.products)}
            {
            products.map((prod)=>{
              return <SingleProduct prod={prod} key={prod._id}/>
            })
            }
           
            
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Myorder1 from './Myorder1';
import RatingPage from './RatingPage';
import { CartState } from '../context/Context';
export default function Myorder() {
  const auth=CartState();
  const[data,setdata]=useState([]);
  const[range,setrange]=useState([]);
  const[flg,setflg]=useState("");
  const[user,setuser]=useState([]);
  const value= localStorage.getItem("emaildata");

  useEffect(() => {
    axios.get(`https://shoppingecart.onrender.com/order/getdata?id=${auth.useremail}`)
    .then((res)=>{console.log(res);setdata(res.data.product);setrange(res.data.range);setuser(res.data.user)})
    .catch((err)=>console.log(err))
  }, [])
  
  return (
    <div>
      {console.log("00000000",auth)}
      { 
data.map((x,index) => {
  return index!==flg ? <Myorder1 key={index} prod={x} prod1={range[index]} flag={setflg} ind={index} /> 
                      : <RatingPage prod={x} prod1={user[index]} flag={setflg} />
     })      }
    </div>
  )
}


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Context from './Context';
import { CartState } from './Context';

export default function Data() {
  const auth=CartState();
    const[pro,setpro]=useState([]);
    useEffect(()=>{
         axios.get("https://shoppingecart.onrender.com/admin/admin").then((res)=>{
            setpro(res.data.user);
           // console.log("88",res.data.user);
            auth.dispatch({"type":"change","data":res.data.user})
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <Context p1={pro} />
  )
}


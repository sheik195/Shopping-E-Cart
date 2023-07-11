import React, { useEffect, useState } from 'react'
import axios from "axios";
import AdminTable from './AdminTable';
import UpadateTable from './UpadateTable';
export default function AdminControl2() {
    const[list,setlist]=useState([])
    const[flg,setflg]=useState(1);
    const[editflg,seteditflg]=useState(-1);
    useEffect(() => {
        axios.get("https://shoppingecart.onrender.com/admin/admin").then((res)=>{
              setlist(res.data.user);
              console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      }, [flg])
      var b=list.map((x)=>
      editflg!==x._id ?
      <AdminTable id={x._id} name={x.name}  type={x.type} age={x.age} brand={x.brand} category={x.category} price={x.price} sizes={x.sizes} quantity={x.quantity} colors={x.colors} sleeve={x.sleeve} fabric={x.fabric} description={x.description} images={x.images} rating={x.rating} editflag={seteditflg} flag={flg} setflag={setflg}/>
       : 
        <UpadateTable refs={x} id={editflg} changeid={seteditflg} name={x.name}  type={x.type} age={x.age} brand={x.brand} category={x.category} price={x.price} sizes={x.sizes} quantity={x.quantity} colors={x.colors} sleeve={x.sleeve} fabric={x.fabric} description={x.description} images={x.images} rating={x.rating} flag={flg} setflag={setflg}/>
      )
  return (
    <div>
        <table  class="table table-striped table-dark">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
       <th scope="col">Type</th>
        <th scope="col">Brand</th>
        <th scope="col">category</th>
        <th scope="col">Age</th>
        <th scope="col">Prices</th>
        <th scope="col">Size</th>
        <th scope="col">Quantity</th>
      <th scope="col">colors</th>
       <th scope="col">sleeve</th>
       <th scope="col">Fabric</th>
       <th scope="col">Description</th>
      <th scope="col">Image</th>
       <th scope="col">Rating</th>
       <th scope="col">Delete</th>
       <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    {b}
  </tbody>
</table>
    </div>
  )
}

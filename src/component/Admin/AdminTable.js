import React from 'react'
import axios from "axios";
export default function AdminTable(x) {
  const del=(val,s1,s2)=>{
    axios.post("https://shoppingecart.onrender.com/admin/delproduct",{id:val}).then((res)=>{console.log(res);
  s2(s1+1)
  }).catch((err)=>{console.log(err)})
  }
  return (
      <tr scope="row">
      <td>{x.name}</td>
      <td>{x.type}</td>
      <td>{x.brand}</td>
      <td>{x.category}</td>
     
      {x.category==="Kids" ? <td> {x.age} </td> : <td>-----</td> }
      
      <td>{x.price}</td>
      <td>{x.sizes}</td>
      <td>{x.quantity}</td>
      <td>{x.colors}</td>
      { x.type==="shirt" || x.type=="t-shirt" ?
      
      <td>{x.sleeve}</td>:
      <td>-----</td>
      }
      {
        x.type==="saree" ?

      <td>{x.fabric}</td>:
      <td>-----</td>
      }
      <td>{x.description}</td>
      <td>{x.images}</td>
      <td>{x.rating}</td>
      <td>
      <button onClick={()=>del(x.id,x.flag,x.setflag)}>Delete</button>
      </td>
      <td>
      <button onClick={()=>{x.editflag(x.id);x.setflag(x.flag+1)}}>Edit</button>
      </td>
      </tr>
  )
}

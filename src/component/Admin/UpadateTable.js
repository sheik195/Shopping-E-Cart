import React, { useState } from 'react'
import axios from "axios";
export default function UpadateTable(x) {
  
    const[name,setname]=useState(x.name);
  const[obj,setobj]=useState({});
  const[type,settype]=useState(x.type);
  const[img,setimg]=useState(x.images.toString());
  const[age,setage]=useState("2-4");
  const[img1,setimg1]=useState([]);
  const[brand,setbrand]=useState(x.brand);
  const[category,setcategory]=useState(x.category);
  const[price,setprice]=useState(x.price);
  const[size,setsize]=useState(x.sizes.toString());
  const[size1,setsize1]=useState([]);
  const[quantity,setquantity]=useState(x.quantity.toString());
  const[quantity1,setquantity1]=useState([]);
  const[colors,setcolors]=useState(x.colors.toString());
  const[colors1,setcolors1]=useState([]);
  const[sleeve,setsleeve]=useState(x.sleeve || "Full");
  const[fabric,setfabric]=useState(x.fabric || "cotton");
  const[discrip,setdiscrip]=useState(x.description);
  const[rating,setrating]=useState(x.rating);
  const[flg,setflg]=useState(0);
  function c1(){
    console.log("ss",obj);
  }
  async function change(){
    setsize1(size.split(","));
    setquantity1(quantity.split(","))
    setimg1(img.split(","));
    setcolors1(colors.split(","));
    console.log("chunk"+name);
    setobj({
      "name": name,
      "type": type,
      "brand": brand,
      "category": category,
      "price": price,
      "sizes": size1,
      "quantity": quantity1,
      "colors": colors1,
      "fabric": fabric,
      "description": discrip,
      "images": img1,
      "rating": rating
    })
    setobj({...obj})
      if(type==="shirt" || type==="t-shirt"){
        setobj(prev=>{
          return {...prev,"sleeve":sleeve}
        })
      }
      if(category==="kids"){
        setobj(prev=>{
          return {...prev,"age":age}
        })
      }
      
  }
  const click=async(val1,val2)=>{
    
    // change();
     const nw=new Object({
      "name": name,
      "type": type,
      "brand": brand,
      "category": category,
      "price": price,
      "sizes": size1,
      "quantity": quantity1,
      "colors": colors1,
      "fabric": fabric,
      "description": discrip,
      "images": img1,
      "rating": rating
    })
    if(type==="shirt" || type==="t-shirt"){
      nw={...nw,sleeve}
    }
    if(category==="kids"){
      nw={...nw,age}
    }
      try{
          const res=await axios.post("https://shoppingecart.onrender.com/admin/updproduct",{
            "id":val1,
            "upd":nw
        })
            console.log(res,"updated");
            val2(-1);
        
      }
      catch(err)
      {
        console.log(err)
      }
      finally{
        console.log("00",obj);
      }
       
  }
  return (
    <tr>
        <td>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
       </td>


        <td>
        <select value={type} onChange={(e)=>{settype(e.target.value);setflg(!flg)}}>
            <option value="saree">saree</option>
            <option value="shirt">shirt</option>
            <option value="t-shirt">t-shirt</option>
            <option value="track">track</option>
            <option value="Frock">Frock</option>
        </select>
       </td>




       <td>
        <input type="text" value={brand} onChange={(e)=>{setbrand(e.target.value)}}></input>
       </td>



         <td>
        <select value={category} onChange={(e)=>{setcategory(e.target.value)}}>
            <option value="Kids">Kids</option>
            <option value="Adult">Adult</option>
        </select>
       </td>


        
        {category==="Kids" ?<td>
        <select value={age} onChange={(e)=>{setage(e.target.value)}}>
            <option value="2-5">2-5</option>
            <option value="5-7">5-7</option>
            <option value="7-13">7-13</option>
        </select>
        </td>:<td>nil</td>}


        <td>
        <input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}}></input>
        </td>

        <td>
        <input type="text"  placeholder='please seperate by comma (,)' value={size} onChange={(e)=>{setsize(e.target.value)}}></input>
        </td>

        <td>
        <input type="text"  placeholder='coresponding to size' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}></input>
       </td>

       <td>
        <input type="text"  placeholder='please seperate by comma (,)' value={colors} onChange={(e)=>{setcolors(e.target.value)}}></input>
        </td>

        {(type==="shirt"|| type==="t-shirt")? <td><label>Sleeve</label>
        <select value={sleeve} onChange={(e)=>{setsleeve(e.target.value)}}>
            <option value="full">full</option>
            <option value="half">half</option>
           { type==="t-shirt"? <option value="no sleeve">No Sleeve</option>:<></>}
        </select>
        <button onClick={()=>{setcolors1(size.split(","));setobj(prev=>{
          return {...prev,"sleeve":sleeve}
        })}}>Add</button>
        </td>:<td>nil</td>}

        <td>
        {type==="saree" ? <><label>Fabric</label>
        <select value={fabric} onChange={(e)=>{setfabric(e.target.value)}}>
            <option value="cotton">cotton</option>
            <option value="silk">silk</option>
            <option value="cotton-silk">cotton-silk</option>
            <option value="Khodi">khodi</option>
        </select>
        </>:<></>}
        {type==="shirt" ? <><label>Fabric</label>
        <select value={fabric} onChange={(e)=>{setfabric(e.target.value)}}>
            <option value="cotton">cotton</option>
            <option value="denim">denim</option>
        </select>
        </>:<>nil</>}</td>

        <td>
        <input type="text" value={discrip} onChange={(e)=>{setdiscrip(e.target.value)}}></input>
        </td>

        <td>    
        <input type="text"  placeholder='please seperate by comma (,)' value={img} onChange={(e)=>{setimg(e.target.value)}}></input>
        <button onClick={()=>{setimg1(img.split(","))}}>Add</button>
        </td>


        <td>
        <input type="text" value={rating} onChange={(e)=>{setrating(e.target.value)}}></input>
        </td>
        <td>
          <button onClick={()=>{setflg(flg+1)}}>Change made</button>
        </td>
        <button onClick={()=>{change();click(x.id,x.changeid)}}>Add to HomePage</button>

        </tr>
  )
}


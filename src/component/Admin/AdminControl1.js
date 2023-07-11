import React, {  useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function AdminControl1() {
  const[name,setname]=useState("");
  const[obj,setobj]=useState({})
  const[type,settype]=useState("saree");
  const[img,setimg]=useState("");
  const[age,setage]=useState("2-4");
  const[img1,setimg1]=useState([]);
  const[brand,setbrand]=useState("");
  const[category,setcategory]=useState("Kids");
  const[price,setprice]=useState();
  const[size,setsize]=useState("");
  const[size1,setsize1]=useState([]);
  const[quantity,setquantity]=useState("");
  const[quantity1,setquantity1]=useState([]);
  const[colors,setcolors]=useState("");
  const[colors1,setcolors1]=useState([]);
  const[sleeve,setsleeve]=useState("full");
  const[fabric,setfabric]=useState("cotton");
  const[discrip,setdiscrip]=useState("");
  const[rating,setrating]=useState();
  const[flg,setflg]=useState(0);
  const[sub,setsub]=useState(false);
  const[load,setload]=useState(false);
  // useEffect(()=>{
  //   console.log("Hello",obj);
  // ,[sub])


  const s2=()=>{
    
   console.log( "r",typeof(obj))
   setTimeout(() => {
    axios.post("https://shoppingecart.onrender.com/admin/addproduct",obj).then((res)=>{console.log(res);setflg(flg+1);setload(false)}).catch((err)=>{console.log(err);setload(false)})
   }, 2000);

  }

  function s1(){
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
    else{
      setobj(prev=>{
        return{...prev,"sizes":size1}
      })
    }
    s2();
  }
  const  click=()=>{
    setload(true);
     setobj({
    "name":name,
    "type":type,
    "brand":brand,
    "category":category,
    "price":price,
    "quantity":quantity1,
    "colors":colors1,
    "fabric":fabric,
    "description":discrip,
    "images":img1,
    "rating":rating
    })
    setTimeout(() => {
      s1();

    }, 1000);
    console.log("k",obj)
    

    setsub(!sub);
  }
  return (

    <div>
      <Form>
        <Row>
          <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
      </Form.Group>
      </Col>

      <Col>

      <Form.Group className="mb-3">
      <Form.Label>Type</Form.Label>
      <Form.Select value={type} onChange={(e)=>{settype(e.target.value);setflg(!flg)}}>
      <option>Open this select menu</option>
      <option value="saree">saree</option>
      <option value="shirt">shirt</option>
       <option value="t-shirt">t-shirt</option>
       <option value="track">track</option>
       <option value="frock">frock</option>
      {category==="Kids" ? <option value="Frock">Frock</option>:<></>}
    </Form.Select>
    </Form.Group>
    </Col>
    </Row>

    <Row>
      <Col>

    <Form.Group className="mb-3">
        <Form.Label>Brand</Form.Label>
        <Form.Control  type="text" value={brand} onChange={(e)=>{setbrand(e.target.value)}} />
      </Form.Group>
      </Col>

      <Col>
      <Form.Group className="mb-3">
      <Form.Label>Category</Form.Label>
      <Form.Select value={category} onChange={(e)=>{setcategory(e.target.value)}}>
      <option value="Kids">Kids</option>
       <option value="men">men</option>
      <option value="wemen">wemen</option>
    </Form.Select>
    </Form.Group>
    </Col>
    </Row>


        {category==="Kids" ?<>
        <Form.Group className="mb-3">
      <Form.Label>Age</Form.Label>
      <Form.Select value={age} onChange={(e)=>{setage(e.target.value)}}>
      <option value="2-5">2-5</option>
      <option value="5-7">5-7</option>
      <option value="7-13">7-13</option>
    </Form.Select>
    </Form.Group></>
        :<></>}
        
        <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control  type="text" value={price} onChange={(e)=>{setprice(e.target.value)}} />
      </Form.Group>

      {category==="Kids" ?<></>:<><Form.Group className="mb-3">
      <Form.Label>Size</Form.Label>
      <Form.Control  type="text"  placeholder='please seperate by comma (,)' value={size} onChange={(e)=>{setsize(e.target.value)}} />
      <Button variant="primary" onClick={()=>{setsize1(size.split(","))}}>Add</Button>
    </Form.Group></>
       }

        <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control  type="text"  placeholder='coresponding to size' value={quantity} onChange={(e)=>{setquantity(e.target.value)}} />
        <Button variant="primary" onClick={()=>{setquantity1(quantity.split(","))}}>Add</Button>
      </Form.Group>


        <Form.Group className="mb-3">
        <Form.Label>Color</Form.Label>
        <Form.Control  type="text"  placeholder='please seperate by comma (,)' value={colors} onChange={(e)=>{setcolors(e.target.value)}} />
        <Button variant="primary" onClick={()=>{setcolors1( colors.split(","))}}>Add</Button>
      </Form.Group>

        
        {(type==="shirt"|| type==="t-shirt")? <><Form.Group className="mb-3">
      <Form.Label>Sleeve</Form.Label>
      <Form.Select value={sleeve} onChange={(e)=>{setsleeve(e.target.value)}}>
      <option value="full">full</option>
      <option value="half">half</option>
      { type==="t-shirt"? <option value="no sleeve">No Sleeve</option>:<></>}
    </Form.Select>
    </Form.Group>
        </>:<></>}

      <Row>
        <Col>
        {type==="saree" || type==="Frock" ? <>  <Form.Group className="mb-3">
      <Form.Label>Fabric</Form.Label>
      <Form.Select value={fabric} onChange={(e)=>{setfabric(e.target.value)}}>
      <option value="cotton">cotton</option>
            <option value="silk">silk</option>
            <option value="cotton-silk">cotton-silk</option>
         {type==="saree" ?   <option value="Khodi">khodi</option>:<></>}
    </Form.Select>
    </Form.Group>
        </>:<></>}


        
        {type==="shirt" ? <> <Form.Group className="mb-3">
      <Form.Label>Fabric</Form.Label>
      <Form.Select value={fabric} onChange={(e)=>{setfabric(e.target.value)}}>
      <option value="cotton">cotton</option>
      <option value="denim">denim</option>
    </Form.Select>
    </Form.Group>
        
        </>:<></>}
        </Col>

        <Col>
        <Form.Group className="mb-3" >
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" value={discrip} onChange={(e)=>{setdiscrip(e.target.value)}} />
      </Form.Group>
      </Col>
      </Row>


      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control  type="text"  placeholder='please seperate by comma (,)' value={img} onChange={(e)=>{setimg(e.target.value)}} />
        <Button variant="primary" onClick={()=>{setimg1(img.split(","))}}>Add</Button>
      </Form.Group>

       
        <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control  type="text" value={rating} onChange={(e)=>{setrating(e.target.value)}} />
      </Form.Group>

      <Button variant="primary" onClick={()=>{click()}}>Add to HomePage</Button>
        </Form>
    </div>
    
  )
}






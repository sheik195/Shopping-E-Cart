import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
import './Product.css'
import SingleProduct from "./SingleProduct";
import Stack from 'react-bootstrap/Stack';
import axios from 'axios'


const Product = () => {
  const auth = CartState();
  const [data, setData] = useState(auth.data);
  const [size, setSize] = useState(auth.data.sizes[0]);
  const [image, setImage] = useState(auth.data.images[0]);
  const[datas,setdatas]=useState([]);
  useEffect(() => {
     axios.get("http://localhost:3500/admin/admin").then((res)=>setdatas(res.data.user)).catch((err)=>{console.log(err)})
  }, [])

  const handleImageClick = (x) => {
    setImage(x);
  };

  const handleSizeClick = (x) => {
    setSize(x);
  };
  var b=datas.map((x,index)=>{
    if(x.type==data.type){
      return <SingleProduct prod={x} key={x._id}/>
    }
  })

  return (
    <div className="product-container">
      <div className="images-container">
        {data.images.map((x, index) => (
          <div className="image-wrapper" key={index}>
            <button
              onClick={() => handleImageClick(x)}
              aria-pressed={x === image}
            >
              <img src={x} alt={index} height="50px" width="50px" />
            </button>
          </div>
        ))}
      </div>



      <div className="product-info-container">
        <img src={image} alt={image} className="product-image" />
        <div className="product-buttons">
          <Button style={{ width: "40%" }}>Add To Cart</Button>
          <Button style={{ width: "40%", paddingLeft: "30px" }}>Buy Now</Button>
        </div>
        <div className="product-details-container">
          <div className="product-details">
            <div className="product-name">{data.name}</div>
            <div>RS {data.price}</div>
            <div>
              <Rating rating={data.rating} />
            </div>
          </div>



          <div className="product-size-container">
            <span className="title">Select Size</span>
            <span>{size}</span>
            <div className="product-sizes">
              {data.sizes.map((x, index) => (
                <div className="size-wrapper" key={index}>
                  <button onClick={() => handleSizeClick(x)}>{x}</button>
                </div>
              ))}
            </div>
          </div>


          <div className="product-description-container">
            <span className="title">Product Details</span>
            <span className="product-description">
              <div>Product Name: {data.name}</div>
              <div>Product Brand: {data.brand}</div>
            </span>
          </div>


        </div>
      </div>

      <div>
      <Stack direction="horizontal" gap={3}>
         {b}
      </Stack>
      </div>
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        {datas.reviews?.map((x,index)=>(<> <h4 key={index} id="list-item-1">{x}</h4>
            <p>...</p></>))
            }
{/*            
            <h4 id="list-item-2">Item 2</h4>
            <p>...</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>...</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>...</p> */}
     </div>
     <div>
      {data.colors.map((x,index)=> <div className="size-wrapper" key={index}>
                  <button onClick={() => handleImageClick(data.images[index])}>{x}</button>
                </div>)}
     </div>
    </div>
  );
};

export default Product;

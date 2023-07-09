import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CartState } from '../context/Context';
import axios from 'axios'
import { Card,Button } from 'react-bootstrap';
import Style from './product1.module.css'
import Stack from 'react-bootstrap/Stack';
import SingleProduct from "./SingleProduct";
import profile from '../photo/profile.jpg'
import Tosted from './Tosted';
import { Toast,ToastContainer} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Product1() {
  const auth = CartState();
  const move=useNavigate();
  const [position, setPosition] = useState( 'middle-center');
  const [data, setData] = useState(auth.data);
  const[datas,setdatas]=useState([]);
  const[size,setsize]=useState(data.sizes[0]);
  const[color,setcolor]=useState(data.colors[0]);
  const [image, setImage] = useState(auth.data.images[0]);
  const[rev,setrev]=useState([])
  const [flg,setflg]=useState(true);
  useEffect(() => {
    axios.get("http://localhost:3500/admin/admin").then((res)=>setdatas(res.data.user)).catch((err)=>{console.log(err)})
    axios.get(`http://localhost:3500/review/get?id=${data._id}`).then((res)=>{setrev([res.data.data]);console.log(res.data.data)}).catch((err)=>{console.log(err)})
       }, [])
       

       var b=datas.map((x,index)=>{
        if(x.type==data.type){
          return <SingleProduct prod={x} key={x._id}/>
        }
      })
    //   const c1 = rev.length ?
    // rev.map((prod, index) => (
    //     <span className='cartitem' key={index}>
    //         <img
    //             src={profile}
    //             className='cartItemImg'
    //             alt={data.user.name}
    //             onClick={() => { <Tosted /> }}
    //         />
    //         <div className='cartItemDetail'>
    //             <span>{prod.rating}</span>
    //             <span>{prod.sheik} </span>
    //         </div>
    //     </span>
    // ))
    // : [];

      var c=data.reviews.map((prod,index)=>(
       
        <span className='cartitem' key={index}>
      <img 
      src={profile}
      className='cartItemImg'
      alt={data.name}
      onClick={()=>{<Tosted />}}
       />
       <div className='cartItemDetail'>
          <span>{prod.username}</span>
          <span>₹{prod.userreview} </span>
       </div>
  </span>))

  const func=()=>{
    return(
    <div
    aria-live="polite"
    aria-atomic="true"
    className="bg-dark position-relative"
    style={{ minHeight: '240px' }}
  >
    <ToastContainer
      className="p-3"
      position={position}
      style={{ zIndex: 1 }}
    >
      <Toast>
        <Toast.Header closeButton={false}>
          <img
            src={profile}
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </ToastContainer>
  </div>
    )
  }

     


    const handleImageClick = (x) => {
        setImage(x);
   }



  return (
   
    <div>
      <Row>
        <Col md={2}>
        {data.images.map((x, index) => (
          <Row   key={index} style={{width:"60%"}}>
              <img src={x} alt={index}   onClick={() =>{ handleImageClick(x);setcolor(data.colors[index])}} />
            
          </Row>
        ))}
        </Col>
        <Col md={5}>
        <img src={image} alt={image}  />
        </Col>
        <Col md={5}>
          <Row>
        <Card>
      <Card.Body>
        <Card.Title style={{color:"grey"}}>{data.name}</Card.Title>
        <Card.Text style={{fontWeight:"bolder",fontSize:"25px"}}>
          {data.price}
        </Card.Text>
        <Card.Text>
        <Button style={{marginRight:"20px",borderRadius:"50px"}} variant={"outline-info"}  width="20%" size="sm"> {data.rating}.⭐</Button>
        {data.reviews.length} reviews
        </Card.Text>
        <Card.Text>
          Free Delivery
        </Card.Text>
        <Button variant="primary" onClick={()=>move("/")}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    <Row>
      <Card>
        <Card.Body>
       <Card.Title>Select Size</Card.Title>
       <div>
        {data.sizes.map((x,index)=>
        // <div>
            <Button style={{marginRight:"20px",borderRadius:"50px"}} variant={size===x ? "info":"outline-info"}  width="20%" size="sm" onClick={()=>setsize(x
              )}>{x}</Button>
        //  </div>
        )}
        </div>
        <Card.Title>Select Color</Card.Title>
        <div>
        {data.colors.map((x,index)=>
        // <div>
            <Button style={{marginRight:"20px",borderRadius:"50px"}} variant={color===x ? "info":"outline-info"}  width="20%" size="sm" onClick={()=>setcolor(x
              )}>{x}</Button>
        //  </div>
        )}
        </div>
        </Card.Body>
      </Card>
    </Row>
    <Row>
      <Card>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          <div>
            <Card.Text>Product Name: {data.name}</Card.Text>
            <Card.Text>Product Type: {data.type}</Card.Text>
            <Card.Text>Product brand: {data.brand}</Card.Text>
            <Card.Text>Product category: {data.category}</Card.Text>
            <Card.Text>Product description: {data.description}</Card.Text>
            
          </div>
        </Card.Body>
      </Card>
    </Row>
        </Col>
      </Row>
      <Row>
      <Stack direction="horizontal" gap={3}>
         {b}
      </Stack>
      </Row>
      <Row>
          <Card>
              {/* {c1.length ?
              c1:
              <></>} */}
              {console.log(rev)}
        </Card>
      </Row>
      {(!flg) ?<Tosted />:<></>}
    </div>
  )
}

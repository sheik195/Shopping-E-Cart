import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Order from '../customer/Order';

export default function Cart() {
  const auth=CartState();
  const move=useNavigate();
  const [modalShow, setModalShow] =useState(false);
  const[Hide,onHide]=useState(false);
  const[total,settotal]=useState(0);
  const handlechange=()=>{
      onHide(true);
  }
  useEffect(() => {
    if(!(auth.state.cart.length)){
      move("/");
    }
    settotal(auth.state.cart.reduce((acc,curr)=> acc+Number(curr.price)*curr.qty,0))
  }, [auth.state.cart])
  
  return (
    <div className='home'>
      <div className='productContainer'>
         <ListGroup>
         
              {auth.state.cart.map((prod)=>(
                <ListGroup.Item key={prod._id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.images[0]} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    {prod.price}
                  </Col>
                  <Col md={2}>
                    <Rating rating={prod.rating} />
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" value={prod.qty}
                    onChange={(e)=>{
                      console.log("e",e.target.value)
                      console.log("e1",auth.dispatch)
                      auth.dispatch({
                        type:"Change cart qty",
                        payload:{
                          _id:prod._id,
                          qty:e.target.value
                        },
                      })
                    }}
                    >
                      {[...Array(prod.quantity[0]).keys()].map((x)=>(
                        <option key={x+1}>{x+1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button 
                    type="button"
                    variant='light'
                    onClick={()=>{
                      auth.dispatch({
                        type:"Remove from cart",
                        payload:prod,
                      })
                    }}
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
                </ListGroup.Item>
              ))

              }
           
          </ListGroup> 
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({auth.state.cart.length}) items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total: ₹ {total}</span>
        <Button type="button" onClick={() => setModalShow(true)}>
            Proceed To Checkout
        </Button>
      </div>
      <Order
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
    </div>
  )
}

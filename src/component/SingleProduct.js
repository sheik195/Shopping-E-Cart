import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import Product1 from './Product1'
export default function SingleProduct({prod}) {
    console.log(prod);
    const auth=CartState();
    const {state}=CartState();
    const move=useNavigate();
    //  console.log("srt",state)
  return (
    <div className='products'>
        <Card>
            <Card.Img variant='top' src={prod.images[0]} alt={prod.name}  height={"250px"} width={"100px"} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom: 10}}>
                    <span>₹ {prod.price}</span>
                    <br></br>
                    <span>{prod.type}</span><br></br>
                    <Rating rating={prod.rating} />
                </Card.Subtitle>
                {
                    state.cart.some(p=>p._id===prod._id)?(
                        <Button onClick={()=>{
                            console.log("click1")
                            auth.dispatch({
                                type:"Remove from cart",
                                payload:prod
                            })
                        }}   variant='danger'>
                        Remove from Cart
                    </Button>
                    ):(
                        <Button onClick={()=>{
                            if(auth.login){
                                auth.setdata(prod);
                                move("/product1")
                            auth.dispatch({
                                type:"Add to cart",
                                payload:prod
                            })}
                            else{
                                alert("please Login");
                                move("/tabswitch");

                            }
                        }} >
                    {!prod.quantity ? "Out of stock" :"Add to Cart"}
                </Button>
                    )
                }
                
                
            </Card.Body>
        </Card>
    </div>
  )
}

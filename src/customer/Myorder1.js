import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Card, Button } from 'react-bootstrap'
import Rating from '../component/Rating'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Myorder1({prod,prod1,flag,ind}) {
    const[range,setrange]=useState();
    const[stage,setstage]=useState("");
   
    useEffect(() => {
        if(prod1==10)
        {
            setrange("success");
            setstage("Orders");
        }
        else if(prod1==25)
        {
            setrange("info");
            setstage("packed");
        }
        else if(prod1==50){
            setrange("warning");
            setstage("shipped");
        }
        else{
            setrange("danger");
            setstage("delivered");
        }
    }, [])
    
  return (
    <div className='products'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={prod.images[0]} alt={prod.name}  height={"300px"} width={"200px"} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
               <Card.Text> <Rating rating={prod.rating} /></Card.Text>
               <Card.Title style={{color:"grey",fontWeight:"lighter",fontSize:"17px"}}> status: {stage}</Card.Title>
               <Card.Title>
                      <ProgressBar variant={range} now={prod1} />
               </Card.Title>
                <Button onClick={()=>flag(ind)}>Add Rating</Button>
            </Card.Body>
           
        </Card>
    </div>
  )
}

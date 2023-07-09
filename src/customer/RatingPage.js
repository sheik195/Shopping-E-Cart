

import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { FaLayerGroup } from 'react-icons/fa';


export default function RatingPage({prod,prod1,flag}) {
    const[name,setname]=useState("");
    const[rating,setrating]=useState(1);
    const[review,setriview]=useState("");
    const handle=async()=>{
        try{
        const data=await axios.post(`http://localhost:3500/review/addreview?adminId=${prod._id}&userId=${prod1._id}`,{
            "product":prod._id,
            "user":prod1._id,
            "rating":rating,
            "description":review
        })
        console.log(data);
        flag("");
    }
    catch(err){
        console.log(err);
    }
    }
  return (
    <div>
        <div className='products'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={prod.images[0]} alt={prod.name}  height={"300px"} width={"200px"} />
            <Card.Body>
                <Card.Text>
                    <label>Rating</label>
                    <input type='Number' value={rating} onChange={(e)=>setrating(e.target.value)} min="1" max="5" />
                </Card.Text>
                <Card.Text>
                    <label>Description</label>
                    <textarea class="form-control" value={review} id="exampleFormControlTextarea1" onChange={(e)=>setriview(e.target.value)} rows="3"></textarea>
                </Card.Text>
                <Button onClick={()=>handle()}>Add Rating</Button>
            </Card.Body>
        </Card>
    </div>
    </div>
  )
}

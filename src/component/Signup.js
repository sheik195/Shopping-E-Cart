import React, {  useState } from 'react'
import { CartState } from '../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Signup() {
    const move=useNavigate();
    const[name,setname]=useState("");
    const[phn,setphn]=useState("");
    const[email,setemail]=useState("");
    const[pwd,setpwd]=useState("");
    const[show,setshow]=useState(true);
    const auth=CartState();
    const check=(res)=>{
      if(res==="success")
      {
        auth.setusername(name);
        auth.setlogin(true);
        auth.setuseremail(email);
        localStorage.setItem('emaildata', email);
        move("/");
      }
      else{
        setname("");
        setemail("");
        setphn("");
        setpwd("");
        alert("please enter valied details");
      }
    }
    const GettingData=()=>{
      axios.post("https://shoppingecart.onrender.com/login/signup",{
        "name":name,
        "email":email,
        "phn":phn,
        "pwd":pwd

      }).then((res)=>{
        console.log(res.data.status);
        check(res.data.status);
      }).catch((err)=>{
        console.log(err.status);
      })
    }

  return (
    <div>
        <Container fluid className='mt-3'>
           <Row>
             <Col  xs={6}>

                <Card className='shadow'> 

                <Card.Header  className='p-3' style={{backgroundColor:'bisque'}}>
                    <h2>USER SIGNUP</h2>  
                </Card.Header> 
                
                <Card.Body>
                      <Form >
                            <Form.Group className='mb-3'>
                              <Form.Control type='text' placeholder='Name' onChange={(e)=>(setname(e.target.value))} value={name} ></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                              <Form.Control type='text' placeholder='Phone Number' onChange={(e)=>(setphn(e.target.value))} value={phn} ></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                              <Form.Control type='email' placeholder='Email' onChange={(e)=>(setemail(e.target.value))} value={email} ></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                              <Form.Control type={show?"password":"text"} placeholder='Password' onChange={(e)=>(setpwd(e.target.value))} value={pwd} ></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-2'> 
                              <Button onClick={()=>setshow(!show)}>show</Button>
                            </Form.Group>
                            <Form.Group className='mb-2'> 
                              <Button onClick={GettingData}>LogIn</Button>
                            </Form.Group>
                      </Form>
                </Card.Body>

               </Card>

             </Col>          
           </Row>
                
       </Container>
        </div>
  )
}


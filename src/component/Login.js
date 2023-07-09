import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartState } from '../context/Context';
import Nav from 'react-bootstrap/Nav';

export default function Login() {
  const move=useNavigate();
  const[email,setemail]=useState("");
  const[pwd,setpwd]=useState("");
  const auth=CartState();
  const check=(res)=>{
    if(res.status==="Success"){
      console.log("123",res.user[0].name);
      auth.setusername(res.user[0].name);
      localStorage.setItem('emaildata', email);
      auth.setlogin(true);
      auth.setuseremail(email);
      move("/");
    }
    else{
      alert(res.status);
      setemail("");
      setpwd("");
    }
  }
  const GettingData=()=>{
    axios.post("http://localhost:3500/login/login",{
      "email":email,
      "pwd":pwd
    }).then((res)=>{
      console.log(res.data.status);
      check(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <div>
        {/* <Navbars /> */}
        <Container fluid className='mt-3'>
           <Row>
             <Col  xs={6}>

                <Card className='shadow'> 

                <Card.Header  className='p-3' style={{backgroundColor:'bisque'}}>
                    <h2>USER LOGIN</h2>  
                    <div>AAlif Textiles</div>
                    <div><Button onClick={()=>{move("/signup")}} variant="danger">SignUp</Button></div>
                </Card.Header> 
                
                <Card.Body>
                      <Form >
                            <Form.Group className='mb-3'>
                              <Form.Control type='email' placeholder='Email' onChange={(e)=>(setemail(e.target.value))} value={email} ></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                              <Form.Control type='password' placeholder='Password' onChange={(e)=>(setpwd(e.target.value))} value={pwd} ></Form.Control>
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
        Login</div>
  )
}

import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartState } from '../../context/Context';

export default function AdminLogin() {
    const auth=CartState();
    const move=useNavigate();
   const[email,setemail]=useState("");
  const[pwd,setpwd]=useState("");
  
  const check=(res)=>{
    if(res.status==="success"){
      move("/");
      auth.setusername("admin");
      auth.setlogin(true);
      auth.setadmin(true);
    }
    else{
      alert(res.status);
      console.log(res.user)
      setemail("");
      setpwd("");
    }
  }
  const GettingData=()=>{
    axios.post("https://shoppingecart.onrender.com/login/adminlogin",{
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
                    <h2>Admin LOGIN</h2>
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



       Admin Login</div>
  )
}


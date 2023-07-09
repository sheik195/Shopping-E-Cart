import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart} from 'react-icons/fa'
import {BiLogIn} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../App.css'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const auth=CartState();
    const move=useNavigate();
    const {productDispatch,productState}=CartState();
    console.log("Header",productState);
  return (
    <div>
        <Navbar bg='dark' variant='dark' style={{height:"80px"}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Aalif Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width:500}} placeholder='search product' className='m-auto' onChange={(e)=>{
                        productDispatch({
                            type:"Filter by search",
                            payload:e.target.value,
                        })
                    }}>
                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant='primary'>
                        <FaShoppingCart color="white" fontSize="25px" />
                            <Badge variant='success'>{auth.state.cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth:370}} variant='success'>
                           {auth.state.cart.length > 0 ? (
                            <>
                            {auth.state.cart.map((prod)=>(
                                <span className='cartitem' key={prod._id}>
                                    <img 
                                    src={prod.images[0]}
                                    className='cartItemImg'
                                    alt={prod.name}
                                     />
                                     <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>₹{prod.price} </span>
                                     </div>
                                     <AiFillDelete
                                     fontSize='20px'
                                     style={{cursor:"pointer"}}
                                     onClick={()=>{
                                        auth.dispatch({
                                            type:"Remove from cart",
                                            payload:prod,
                                        })
                                     }} />
                                </span>
                            ))}
                            <Link to="/cart">
                            <Button style={{width:'95%',margin:"0 10px"}}>
                                Go To Cart
                            </Button>
                            </Link>   
                            </>
                           ):(<span style={{padding:10}}>Cart is Empty!</span>)}
                           
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant='primary'>
                        <BiLogIn color="white" fontSize="25px" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth:80}} variant='success'>
                        {
                            auth.login===false ?
                            <>
                          <span style={{padding:"10px"}}>
                          <Link to="/tabswitch">
                            <Button style={{width:'95%',margin:"0 10px"}}>
                                login
                            </Button>
                            </Link>   
                          </span>
                          </>
                          :
                          <>
                           <span style={{padding:"10px"}}>
                                Welcome {auth.username}
                            </span>
                          {
                            auth.admin ?
                            <>
                            <span style={{padding:"10px"}}>
                                <Link to="/admin">
                                <Button style={{width:'95%',margin:"0 10px"}}>
                                    Admin Controls
                                </Button>
                                </Link>   
                            </span>
                            <span style={{padding:"10px"}}>

                            </span>
                            </>:<></>
                          }

                          <span style={{padding:"10px"}}>
                            <Button onClick={()=>{
                                auth.setusername("");
                                auth.setuseremail("");
                                auth.setlogin(false);
                                auth.setadmin(false);
                                auth.dispatch({
                                    type:"change"
                                })
                                move("/")
                            }}>
                                     Logout
                            </Button>  
                          </span>
                          </>
}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>

    </div>
  )
}

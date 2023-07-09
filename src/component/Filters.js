import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from '../context/Context';

export default function Filters() {
    const[rate,setRate]=useState(2);
    const {productState,productDispatch}=CartState();
    console.log("op",productState);
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <span >Type</span>
            <Form.Select 
              label="type"
               onChange={(e)=>
                  productDispatch({
                      type:"Type cart",
                      payload:e.target.value,
                  })
                }>
                <option>Open this select menu</option>
                <option value="saree">saree</option>
                <option value="shirt">shirt</option>
                <option value="t-shirt">t-shirt</option>
                <option value="track">track</option>
                <option value="frock">frock</option>
            </Form.Select>
        </span>
        <span>
            <Form.Check
            inline
            label="Low to High"
            name="group1"
            type="radio"
            id={'inline-1'}
             onChange={()=>
                productDispatch({
                    type:"Sort by price",
                    payload:"Low to high",
                })
            }
             checked={productState.sort==="Low to high" ? true : false}  
             />
           
        </span>
        <span>
        <Form.Check
            inline
            label="High to low"
            name="group1"
            type="radio"
            id={'inline-2'}
            onChange={()=>
                productDispatch({
                    type:"Sort by price",
                    payload:"High to low"
                })
            }
            checked={productState.sort==="High to low" ? true : false}
            />
        </span>
        <span>
        <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={'inline-3'}
            onChange={()=>{
                productDispatch({
                    type:"Filter by stock",     
                })
            }}
            checked={productState.quantity}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating rating={productState.rating} onClick={(i)=> productDispatch({
                type:"Filter by rating",
                payload:i+1,
            })} style={{cursor:"pointer"}} />
        </span>
        <Button variant='light' onClick={()=>{
            productDispatch({
                type:"Clear Filter"
            })
        }}>Clear Filters</Button>
    </div>
  )
}

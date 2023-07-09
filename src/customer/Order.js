import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../context/Context';
import axios from 'axios';
   

function Order(props) {
    const [flg,setflg]=useState(0);
    const move=useNavigate();
    const[data,setdata]=useState("");
    const auth=CartState();
    const handle=()=>{
        if(flg==1)
        {
            setdata("Srever Down");
            return ;
        }
        else if(flg==2)
        {
            try{
            axios.post("http://localhost:3500/order/create",{cart:auth.state.cart,email:auth.useremail})
            setdata("");
            move("/myorder");
            }
            catch(err){
                console.log(err);
            }
        }
    }

  return (
    <Modal
      {...props}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Way to Pay</h4>
        <p style={{color:"red"}}>{data}</p>
            <input type='radio' name='s1'  value='G-Pay' onClick={()=>setflg(1)} />G-Pay
            <br></br>
            <input type='radio' name='s1' value='Case on Delivery' onClick={()=>setflg(2)} />Case On Delivery
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={()=>handle()}>Proceed to Pay</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Order;
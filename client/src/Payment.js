import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import axios from 'axios';
import { NavLink } from "react-router-dom";
const Payment = () => {
    const handlePayment = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/payment');

            if(res && res.data){
                window.location.href = res.data.links[1].href;
            }
        } catch(error){
            console.error('Error' , error);
        }
    }
  return (
    <Wrapper>
        <div>
            <h1>Modes Of Payment</h1>
            <hr />
            <NavLink to = "/success">
                <Button>Cash On Delivery</Button>
            </NavLink>
            <Button onClick = {handlePayment}>Pay with Paypal</Button>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding : 3rem;
place-items : center;
h1{
    font-size : 2.5rem;
    margin-left : 3.5rem;
}

button{
    margin-top : 3rem;
    font-size : 1.2rem;
    border-radius : 15px;
    background : green;
    margin-left : 10px; 
}
`;
export default Payment

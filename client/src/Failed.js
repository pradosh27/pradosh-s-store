import React from 'react'
import styled from 'styled-components'
import { Button } from './Components'
import { NavLink } from 'react-router-dom'
const Failed = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='main'>
          <img src="images/failure.jpg" alt="error" className='failure-img'/>
          <h1>Payment Failed...</h1>
          <p>Try Again Or Poor Network Connection</p>
          <NavLink to = "/cart">
            <Button className='button'>Back</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.container{
  margin-top : 2rem;
  padding : 5rem;
  background : red;
  place-items : center;
}
.failure-img{
  height : 300px;
  width : 350px;
}
.main{
  background : white;
  place-items : center;
  padding : 1.5rem;
  border-radius : 13px;
  h1{
    font-size : 2rem;
    position : relative;
    left : 1rem;
  }
  p{
    font-size : 1.3rem;
    margin-top : 1rem;
  }
}
.button{
  margin-top : 1rem;
  box-shadow : 2.5px 2.5px 2.5px rgb(114, 111, 111);
  transition : 0.3s;
}
.button:hover{
  transform : translateZ(-3px)scale(1.1);
}
`;
export default Failed

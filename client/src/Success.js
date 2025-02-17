import React from 'react'
import styled from 'styled-components';
import { Button } from './Components';
import { NavLink } from 'react-router-dom';
const Success = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="main">
          <img src="images/success.png" alt="error" className='success-img'/>
          <NavLink to = "/">
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
  background : green;
  place-items : center;
}
.main{
  background : white;
  padding : 1.5rem;
  border-radius : 13px;
}
.success-img{
  height : 300px;
  width : 450px;
  position : relative;
  left : 7rem;
}
.button{
  background : green;
  margin-top : 1rem;
  border : none;
  position : relative;
  right : 22rem;
  box-shadow : 2.5px 2.5px 2.5px rgb(114, 111, 111);
  transition : 0.3s;
}
.button:hover{
  transform : translateZ(-3px)scale(1.1);
}
`;
export default Success

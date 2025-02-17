import React from 'react'
import styled from "styled-components";
function Contact() {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.142347927637!2d85.1925254!3d20.946797899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18b409118f3cf3%3A0x9dba8c6f8aaa673c!2sLingaraj%20Township%20-%20Way%20to%20B%20type%2C%20Talcher%2C%20Odisha%20759103!5e0!3m2!1sen!2sin!4v1723698832319!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}} allowFullScreen="" 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xgvwzveb" method='post' className='contact-inputs'>
            <input type="text" placeholder='username' name='username' required autoComplete='off'/>
            <input type="email" placeholder='Email' required autoComplete='off' name='email'/>
            <textarea name="message" id="" cols="30" rows="10" required autoComplete='off' placeholder='enter your message'></textarea>
            <input type="submit" value="SEND"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
export default Contact

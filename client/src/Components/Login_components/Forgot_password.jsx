import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";






const Forgot_password = () => {
  const [email, setEmail] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      axios.post('http://localhost:4000/Forgot_password',{
        email,
      })
      
    }
    catch(err){
      console.log(err);
    }
    
  }
  return (
    <StyledForget>
      <div className="container">
        <div className="box">
          <h1>Forget Password</h1><br />
          <h3 className="Email_label" htmlFor="Email">Email:</h3>
          <input
            type="text"
            placeholder="Your email here"
            className="forget-inputs"
            required
            onChange={(e)=>setEmail(e.target.value)} />
          <input className="forget_btn" type="submit" value="Send" onClick={handleSubmit} />
          <label htmlFor="email">Back To Login Page </label>
        </div>
      </div>
    </StyledForget>
  );
};
const StyledForget = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }
  .box {
    padding-left: 2.5%;
    padding-top: 5vh;
    border: 1px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 25%;
    height: 45vh;
    
  }
  .Email_label{
    margin-bottom: 1vh;
  }
  .forget-inputs {
    width: 90%;
    height: 6vh;
    border: 1px solid gray;
    border-radius: 3px;
    margin-bottom: 2vh;

  }
  .forget_btn {
    width: 90%;
    height: 6vh;
    border: 1px solid gray;
    background-color: #d04e17;
    color: white;
    border-radius: 3px;
  }
  
`;

export default Forgot_password;

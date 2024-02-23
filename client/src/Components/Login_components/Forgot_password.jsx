import React from "react";
import styled from "styled-components";

const Forgot_password = () => {
  return (
    <StyledForget>
      <div className="container">
        <div className="main-container">
          <h1>Forget Password</h1>
          <label htmlFor="email"><b>Email:</b></label>
          <input
            name="email"
            id="email"
            className="forget-inputs"
            type="text"
            placeholder="Email"
            required
          />
          <input className="forget_btn" type="submit" value="Send" />
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
    /* background-color:green; */
  }
  .main-container {
    /* background-color:red; */
    padding-left: 2rem;
    border: 1px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 25%;
    height: 45%;
    margin-left: 40%;
    margin-top: 12%;
    position: fixed;
    display: grid;
  }
  h1 {
    padding-top: 40px;
  }
  .forget-inputs {
    width: 93%;
    height: 6vh;
    border: 1px solid gray;
    border-radius: 3px;
  }
  .forget_btn {
    width: 93%;
    height: 6vh;
    border: 1px solid gray;
    background-color: #d04e17;
    color: white;
    border-radius: 3px;
  }
`;

export default Forgot_password;

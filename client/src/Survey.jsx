import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Survey = () => {
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [diet, setDiet] = useState("");
  const [experience, setExperience] = useState("");
  const [activity, setActivity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userEmail = localStorage.getItem("userEmail");
      const response = await axios.post("http://localhost:4000/Userinfo", {
        email: userEmail,
        gender,
        age,
        height,
        weight,
        waist,
        diet,
        experience,
        activity,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <div className="box">
        <h1>Declaration Form</h1>
        <div className="form">
          <div className="personalinfo">
            <div className="input-box">
              <label htmlFor="gender">Gender : </label>
              Male
              <input
                className="input-fields"
                type="radio"
                name="gender"
                id=""
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
              <input
                className="input-fields"
                type="radio"
                name="gender"
                id=""
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="age">Age :</label>
              <input
                className="input-fields"
                type="text"
                name="age"
                id=""
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="height">Height : </label>
              <input
                className="input-fields"
                type="text"
                name="height"
                placeholder="In feets"
                id=""
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="weight">Weight : </label>
              <input
                className="input-fields"
                type="text"
                name="Weight"
                placeholder="In kilograms"
                id=""
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="weight">Waist : </label>
              <input
                className="input-fields"
                type="text"
                name="Waist"
                placeholder="Waist in inches"
                id=""
                onChange={(e) => setWaist(e.target.value)}
              />
            </div>
          </div>
          <div className="diet">
            <div className="input-box">
              <label htmlFor="Diet">Diet : </label>
              <label htmlFor="Non-vegetarian">Non-vegetarian</label>
              <input
                className="input-fields"
                type="radio"
                name="Diet"
                id=""
                value="Non-vegetarian"
                onChange={(e) => setDiet(e.target.value)}
              />
              <label htmlFor="Vegetarian">Vegetarian</label>
              <input
                className="input-fields"
                type="radio"
                name="Diet"
                id=""
                value="Vegetarian"
                onChange={(e) => setDiet(e.target.value)}
              />
            </div>
          </div>
          <div className="Activeness">
            <div className="input-box">
              <label htmlFor="Experience">How active you are : </label>
              <label htmlFor="Sedentary">Sedentary</label>
              <input
                className="input-fields"
                type="radio"
                name="Activeness"
                id=""
                value="Sedentary"
                onChange={(e) => setActivity(e.target.value)}
              />
              <label htmlFor="Light-Activity">Light Activity</label>
              <input
                className="input-fields"
                type="radio"
                name="Activeness"
                id=""
                value="Light-Activity"
                onChange={(e) => setActivity(e.target.value)}
              />
              <label htmlFor="Moderately-active">Moderately-Active</label>
              <input
                className="input-fields"
                type="radio"
                name="Activeness"
                id=""
                value="Moderately-Active"
                onChange={(e) => setActivity(e.target.value)}
              />
              <label htmlFor="Highly-active">Highly active</label>
              <input
                className="input-fields"
                type="radio"
                name="Activeness"
                id=""
                s
                value="Highly-active"
                onChange={(e) => setActivity(e.target.value)}
              />
            </div>

            <div className="level">
              <div className="input-box">
                <label htmlFor="Experience">Experience : </label>
                <label htmlFor="Beginner">Beginner</label>
                <input
                  className="input-fields"
                  type="radio"
                  name="Experience"
                  id=""
                  value="Beginner"
                  onChange={(e) => setExperience(e.target.value)}
                />
                <label htmlFor="Intermediate">Intermediate</label>
                <input
                  className="input-fields"
                  type="radio"
                  name="Experience"
                  id=""
                  value="Intermediate"
                  onChange={(e) => setExperience(e.target.value)}
                />
                <label htmlFor="Advanced">Advanced</label>
                <input
                  className="input-fields"
                  type="radio"
                  name="Experience"
                  id=""
                  value="Advanced"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
            <br />
            <input
              type="checkbox"
              name="terms"
              id=""
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label>I have read and agree to terms and conditions</label>
            <br />
            <input
              type="button"
              value="Submit"
              disabled={!agree}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: grid;
  place-items: center;
  background-color: #d04e17;

  .box {
    width: 60%;
    height: 100vh;
    padding: 2%;
    border: 1px;
    box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
    border-radius: 2%;
    margin-top:5px;
    background-color: white;
  }
  h1 {
    display: block;
    text-align: center;
    font-size: 2em;
    color: #595959;
    margin-bottom:10px;
  }

  .form {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
    
  }

  .personalinfo {
    display: flex;
    flex-wrap: wrap;   
  }
  .diet {
    margin-top: 20px;
  }
  .Activeness,
  .level {
    margin-top: 20px;
    justify-content: space-between;
  }
 
  .input-box {
    width: 100%;
    height: 6vh;
    padding: 10px;
    flex-direction: column;
    margin-bottom: 15px;
    display: inline-block;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align:left;
  }
  .input-fields {
    margin-top: 10px;
  }
  input[type="checkbox"] {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  input[type="button"] {
    padding: 10px 20px;
    background-color: #d04e17;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  input[type="button"]:hover {
    background-color:#E8751A;
  }
`;

export default Survey;

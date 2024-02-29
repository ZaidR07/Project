import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            const userEmail = localStorage.getItem('userEmail');
            const response = await axios.post("http://localhost:4000/Userinfo", {
                email: userEmail,
                gender,
                age,
                height,
                weight,
                waist,
                diet,
                experience,
                activity


            })
            navigate('/');

        } catch (error) {
            console.log(error);
        }

    }








    return (
        <StyledContainer>
            <div className="box">
                <h1>Declaration Form</h1>
                <div className="form"

                >
                    <div className="personalinfo">
                        <div className="input-box">
                            <label htmlFor="gender">Gender :  </label>
                            Male
                            <input className='input-fields' type="radio" name="gender" id="" value="male" onChange={(e) => setGender(e.target.value)} />
                            Female
                            <input className='input-fields' type="radio" name="gender" id="" value="Female" onChange={(e) => setGender(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="age">Age :</label>
                            <input className='input-fields' type="text" name="age" id="" onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="height">Height : </label>
                            <input className='input-fields'
                                type="text"
                                name="height"
                                placeholder='In feets'
                                id=""
                                onChange={(e) => setHeight(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="weight">Weight : </label>
                            <input className='input-fields'
                                type="text"
                                name="Weight"
                                placeholder='In kilograms'
                                id=""
                                onChange={(e) => setWeight(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="weight">Waist : </label>
                            <input className='input-fields'
                                type="text"
                                name="Waist"
                                placeholder='Waist in inches'
                                id=""
                                onChange={(e) => setWaist(e.target.value)} />
                        </div>
                    </div>
                    <div className="diet">
                        <div className="input-box">
                            <label htmlFor="Diet">Diet : </label>
                            <label htmlFor="Non-vegetarian">Non-vegetarian</label>
                            <input className='input-fields'
                                type="radio"
                                name="Diet"
                                id=""
                                value="Non-vegetarian"
                                onChange={(e) => setDiet(e.target.value)} />
                            <label htmlFor="Vegetarian">Vegetarian</label>
                            <input className='input-fields'
                                type="radio"
                                name="Diet"
                                id=""
                                value="Vegetarian"
                                onChange={(e) => setDiet(e.target.value)} />
                        </div>
                    </div>
                    <div className="Activeness">
                        <div className="input-box">
                            <label htmlFor="Experience">How active you are : </label>
                            <label htmlFor="Sedentary">Sedentary</label>
                            <input className='input-fields'
                                type="radio"
                                name="Activeness"
                                id=""
                                value="Sedentary"
                                onChange={(e) => setActivity(e.target.value)} />
                            <label htmlFor="Light-Activity">Light Activity</label>
                            <input className='input-fields'
                                type="radio"
                                name="Activeness"
                                id=""
                                value="Light-Activity"
                                onChange={(e) => setActivity(e.target.value)} />
                            <label htmlFor="Moderately-active">Moderately active</label>
                            <input className='input-fields'
                                type="radio"
                                name="Activeness"
                                id=""
                                value="Moderately-active"
                                onChange={(e) => setActivity(e.target.value)} />
                            <label htmlFor="Highly-active">Highly active</label>
                            <input className='input-fields'
                                type="radio"
                                name="Activeness"
                                id=""s
                                value="Highly-active"
                                onChange={(e) => setActivity(e.target.value)} />
                        </div>

                        <div className="level">
                            <div className="input-box">
                                <label htmlFor="Experience">Experience : </label>
                                <label htmlFor="Beginner">Beginner</label>
                                <input className='input-fields'
                                    type="radio"
                                    name="Experience"
                                    id=""
                                    value="Beginner"
                                    onChange={(e) => setExperience(e.target.value)} />
                                <label htmlFor="Intermediate">Intermediate</label>
                                <input className='input-fields'
                                    type="radio"
                                    name="Experience"
                                    id=""
                                    value="Intermediate"
                                    onChange={(e) => setExperience(e.target.value)} />
                                <label htmlFor="Advanced">Advanced</label>
                                <input className='input-fields'
                                    type="radio"
                                    name="Experience"
                                    id=""
                                    value="Advanced"
                                    onChange={(e) => setExperience(e.target.value)} />
                            </div>


                        </div><br />
                        <input type="checkbox" name="terms" id=""
                            onChange={(e) => setAgree(e.target.checked)} />
                        <label>I have read and agree to terms and conditions</label>
                        <br />
                        <input type="button" value="Submit" disabled={!agree} onClick={handleSubmit} />



                    </div>







                </div>
            </div>


        </StyledContainer >
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    display: grid;
    place-items: center;

    .box{
        width:60%;
        height: 80vh;
        /* background-color: #d04e17; */
        padding: 2%;
        border: 1px;
        box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
        border-radius: 2%;


    }
    .form{
        
    }
    .personalinfo{
        display: flex;
        flex-wrap: wrap;
    }
    .diet{
        
    }
    
    .level{
        
    }
    .input-box{
        width: 50%;
        height: 6vh;
        /* background-color: yellow; */
        padding-top:1vh;
        padding-bottom:1vh;

    }
    .input-fields{
        margin-left: 2%;
    }
`

export default Survey
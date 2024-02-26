import React from 'react'
import styled from 'styled-components'

const Survey = () => {
    return (
        <StyledContainer>
            <div className="box">
                <h1>Declaration Form</h1>
                <div className="form"

                >
                    <div className="personalinfo">
                        <div className="input-box">
                            <label htmlFor="gender">Gender</label>
                            <input className='input-fields' type="radio" name="male" id="" />
                            <input className='input-fields' type="radio" name="female" id="" />
                        </div>
                        <div className="input-box">
                            <input className='input-fields' type="number" name="age" id="" />
                        </div>
                        <div className="input-box">
                            <input className='input-fields'
                                type="number"
                                name="height"
                                placeholder='In feets'
                                id="" />
                        </div>
                        <div className="input-box">
                            <input className='input-fields'
                                type="number"
                                name="height"
                                placeholder='In kilograms'
                                id="" />
                        </div>
                        <div className="input-box">
                            <input className='input-fields'
                                type="number"
                                name="height"
                                placeholder='Waist in inches'
                                id="" />
                        </div>
                    </div>
                    <div className="diet">
                        <div className="input-box">
                            <label htmlFor="Non-vegetarian">Non-vegetarian</label>
                            <input className='input-fields'
                                type="radio"
                                name="Non-vegetarian"
                                id="" />
                            <label htmlFor="Vegetarian">Vegetarian</label>
                            <input className='input-fields'
                                type="radio"
                                name="Vegetarian"
                                id="" />
                        </div>
                    </div>
                    <div className="level">
                        <div className="input-box">
                            <input className='input-fields'
                                type="radio"
                                name="beginner"
                                id="" />
                            <input className='input-fields'
                                type="radio"
                                name="Intermediate"
                                id="" />
                            <label htmlFor="Advanced">Advanced</label>
                            <input className='input-fields'
                                type="radio"
                                name="Advanced"
                                id="" />
                        </div>


                    </div>



                </div>

            </div>
        </StyledContainer>
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
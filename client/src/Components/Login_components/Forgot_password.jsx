import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const Forgot_password = () => {
    const [email, setEmail] = useState();
    

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
        <p>Forgot password</p>
    )

}
export default Forgot_password;
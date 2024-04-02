import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";


const Profile = () => {

    const [customer, setCustomer] = useState([]);
    const [username, setUsername] = useState();
    const [purename, setPurename] = useState();



    const handleLoad = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            const customerres = await axios.post("http://localhost:4000/profileget", {
                email: userEmail,
            });
            setCustomer(customerres.data);
            
            const storedUsername = localStorage.getItem('username');
            const firstLetter = storedUsername.charAt(0).toUpperCase();
            setUsername(firstLetter);
            setPurename(storedUsername);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <Styledprofile>
            <section className='profilesection'>
                <div className="profilebox">
                    <div className="profileicon">
                        <h1 style={{fontSize:"3.5rem"}}>{username}</h1>
                    </div>
                    {customer.length > 0 && (
                        <div className="profileboxinfo">
                            <h3>{purename}</h3>
                            <p>{customer[0].email}</p>
                        </div>
                    )}

                </div>
                {customer.length > 0 && (
                    <div className="infobox">
                        <div className="box">
                            <span>Gender: {customer[0].gender}</span>
                        </div>
                        <div className="box">
                            <span>Age: {customer[0].age}</span>
                        </div>
                        <div className="box">
                            <span>Height: {customer[0].height}</span>
                        </div>
                        <div className="box">
                            <span>Weight: {customer[0].weight}</span>
                        </div>
                        <div className="box">
                            <span>Waist: {customer[0].waist}</span>
                        </div>
                        <div className="box">
                            <span>Diet: {customer[0].diet}</span>
                        </div>
                        <div className="box">
                            <span>Activity: {customer[0].activity}</span>
                        </div>
                        <div className="box">
                            <span>Experience: {customer[0].experience}</span>
                        </div>
                    </div>
                )}
            </section>
            <section className='updatesection'>
                <section className="top">
                    <h2>Update Profile</h2>
                </section>

            </section>
        </Styledprofile>
    )
}

const Styledprofile = styled.div`

    width: 100%;
    /* min-height: 90vh; */
    background-color: #fff;
    display: flex;
    justify-content: center;


    .profilesection{
        width: 24%;
        height: 60vh;
        background-color: whitesmoke;
        margin-right: 2%;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);


    }

    .updatesection{
        width: 50%;
        height: 70vh;
        margin-top: 20vh;
        background-color: yellow;

    }

    .profilebox{
        width: 100%;
        height: 40vh;
        background-color: #CC3D00;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .profileboxinfo{
        text-align: center;
        color: #fff;
    }

    .profileicon{
        width: 20vh;
        height: 20vh;
        background-color: #263043;
        border-radius: 100%;
        margin-bottom: 4vh;
        display: grid;
        place-items: center;
        color: white;
    }

    .infobox{
        display: flex;
        flex-wrap: wrap;
        padding: 1vh 0 0 0;
    }

    .box{
        width: 50%;
        height: 5vh;
        /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); */
        padding: 0.8%;
        /* border-bottom: 0.2px solid black; */
        font-size: 0.8rem;
    }

    .top{
        width: 100%;
        height: 12vh;
        background-color: #CC3D00;
        display: grid;
        place-items: center;
        color: white;
    }

`

export default Profile
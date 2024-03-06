import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';



const Workout = () => {
  const [Level, setLevel] = useState("");

  useEffect(() => {
    const handleLoad = async () => {


      try {
        const userEmail = localStorage.getItem('userEmail');
        const response = await axios.post("http://localhost:4000/Level", {
          email: userEmail,
        });
        setLevel(response.data.level);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, []);


  return (
    <StyledWorkout Level = {Level}>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="green"></div>
    </StyledWorkout>
  )
}

const StyledWorkout = styled.div`
  .red{
    display: ${({Level}) => (Level === "Beginner" ? 'block' : 'none')};
    background-color: red;
    width: 100%;
    min-height: 100vh;
  }
  .blue{
    display: ${({Level}) => (Level === "Intermediate" ? 'block' : 'none')};
    background-color: blue;
    width: 100%;
    min-height: 100vh;
  }
  .green{
    display: ${({Level}) => (Level === "Advanced" ? 'block' : 'none')};
    background-color: green;
    width: 100%;
    min-height: 100vh;
  }
`

export default Workout;
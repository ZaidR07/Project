import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Diet = () => {
  const [calory, setCalory] = useState(0);

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        const response = await axios.post("http://localhost:4000/Bmr", {
          email: userEmail,
        });
        setCalory(response.data.calories);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, []);

  return (
    <StyledDiet calory={calory}>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="green"></div>
      <div className="yellow"></div>
      <div className="purple"></div>
    </StyledDiet>
  );
};

const StyledDiet = styled.div`
  .red {
    width: 100%;
    height: 100vh;
    background-color: red;
    display: ${({ calory }) => (calory >= 600 && calory < 1500 ? 'flex' : 'none')};
  }
  .blue {
    width: 100%;
    height: 100vh;
    background-color: blue;
    display: ${({ calory }) => (calory >= 1500 && calory < 1800 ? 'flex' : 'none')};
  }
  .green {
    width: 100%;
    height: 100vh;
    background-color: green;
    display: ${({ calory }) => (calory >= 1800 && calory < 2000 ? 'flex' : 'none')};
  }
  
  .yellow {
    width: 100%;
    height: 100vh;
    background-color: yellow;
    display: ${({ calory }) => (calory >= 2000 && calory < 2500 ? 'flex' : 'none')};
  }
  .purple {
    width: 100%;
    height: 100vh;
    background-color: purple;
    display: ${({ calory }) => (calory >= 2500 ? 'flex' : 'none')};
  }
  
`;

export default Diet;

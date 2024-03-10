import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


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
      <div id="red" className='container'>


      </div>
      <div id="blue" className='container'>


      </div>
      <div id="green" className='container'>


      </div>
      <div id="yellow" className='container'>


      </div>
      
    </StyledDiet>
  );
};

const StyledDiet = styled.div`
  background-color: #d04e17;
  #red {
    display: ${({ calory }) => (calory >= 600 && calory < 1500 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.4); 
    border-radius: 8px;
  }
  #blue {
    display: ${({ calory }) => (calory >= 1500 && calory < 1800 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    border: 1px solid rgba(0, 0, 0, 0.4); 
    border-radius: 8px;
  }
  #green {
    display: ${({ calory }) => (calory >= 1800 && calory < 2000 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust shadow as needed */
    border: 1px solid rgba(0, 0, 0, 0.4); /* Adjust border color as needed */
    border-radius: 8px;
  }
  #yellow {
    display: ${({ calory }) => (calory >= 2000 && calory < 2500 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  .container {
    margin: auto;
    width: 80%;
    min-height: 100vh;
    background-color:#242426; 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
`;

export default Diet;
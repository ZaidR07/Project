import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Diet = () => {
  const [calory, setCalory] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [reset, setReset] = useState(false);

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

  const Scalecard = (event) => {
    const clickedCard = event.currentTarget;

    if (reset) {
      console.log(reset);
      clickedCard.style.cssText = `
      position: relative;
      width: calc(33.33% - 4vw);
      height: 250px;
    `;
      setReset(false);
      setIsClicked(false);
      return;
    }

    clickedCard.style.cssText = `
      position: absolute;
      width: calc(80% - 4vw);
      height: calc(100vh - 5.8vh);
      z-index:1;
    `;
    setIsClicked(true);
  };

  return (
    <StyledDiet calory={calory} isClicked={isClicked}>
      <div id="red" className='container'>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
      </div>
      <div id="blue" className='container'>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>

      </div>
      <div id="green" className='container'>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon' />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
      </div>
      <div id="yellow" className='container'>
      <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
        <div className="card" onClick={Scalecard}>
          <button onClick={() => setReset(true)} className='crossiconbtn'>
            <FontAwesomeIcon icon={faXmark} className='crossicon'  />
          </button>
        </div>
      </div>
    </StyledDiet>
  );
};

const StyledDiet = styled.div`
  #red {
    background-color: red;
    display: ${({ calory }) => (calory >= 600 && calory < 1500 ? 'flex' : 'none')};
  }
  #blue {
    background-color: blue;
    display: ${({ calory }) => (calory >= 1500 && calory < 1800 ? 'flex' : 'none')};
  }
  #green {
    background-color: green;
    display: ${({ calory }) => (calory >= 1800 && calory < 2000 ? 'flex' : 'none')};
  }
  #yellow {
    background-color: yellow;
    display: ${({ calory }) => (calory >= 2000 && calory < 2500 ? 'flex' : 'none')};
  }
  .container {
    margin: auto;
    width: 80%;
    /* height: 100vh; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card {
    width: calc(33.33% - 4vw);
    margin: 2vw;
    padding: 1vw;
    height: 250px;
    background-color: green;
    font-size: 3vw !important;
    transition: ${({ isClicked }) => (isClicked ? 'none' : 'transform 0.3s ease')};
  }
  .card:hover {
    transform: ${({ isClicked }) => (isClicked ? 'none' : 'scale(1.15)')};
  }
  .crossicon{
    display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  }
  .crossiconbtn{
    display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  }
`;

export default Diet;
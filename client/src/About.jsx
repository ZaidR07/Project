import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <div className="about_container">
        <div className="about_heading">
          <h1>
            this is how <br />i made it
          </h1>
          <div className="about_text">
            <p>
              I'm a paragraph. Click here to add your own text
              <br />
              and edit me. Let your users get to know you.
            </p>
          </div>
        </div>
        <div className="img">
          <img src="/Resorces/about_img.png" width="600px" height="700px" />
        </div>
      </div>
      <div className="about_container2">
        <div className="about_img">
          <img
            src="https://static.wixstatic.com/media/c837a6_39934f7b85da43f3bffae040ba2aef11~mv2.jpg/v1/crop/x_0,y_366,w_6392,h_5367/fill/w_597,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1140544253.jpg"
            alt="Description of the image"
            width="362"
            height="303"
            style={{ width: "362px", height: "303px", objectFit: "cover" }}
          />
        </div>
        <div className="about_text2">
          <p className="about_paragraph">
            I'm a paragraph. Click here to add your own text <br />
            and edit me. It’s easy. Just click “Edit Text” or <br />
            double click me to add your own content and <br />
            make changes to the font. I’m a great place for <br />
            you to tell a story and let your users know a <br />
            little more about you.
            <br />
            <br />
            <input
              style={{
                width: "10rem",
                height: "3rem",
                backgroundColor: "#CC3D00",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              type="submit"
              value="Join My Programs "
            />
          </p>
        </div>
      </div>
      <div className="about_txt3">
        <h1 className="about_paragraph2">
          “WE ARE WHAT WE REPEATEDLY DO. EXCELLENCE   <br />
          THEN IS NOT AN ACT BUT A HABIT.”
        </h1>
      </div>
      <div className="about_txt4">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place <br />
          for you to tell a story and let your users know a little more about
          you.
        </p>
      </div>
    </StyledAbout>
  );
};
const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .about_container {
    background-image: linear-gradient(#68717A, #8C8C8B);
    width: 100%;
    height:120vh;
    display: flex;
    overflow-x: hidden;
  }
  .about_heading {
    margin-top: 20%;
    place-items: right;
    text-transform: uppercase;
    color: white;
    font-size: 30px;
     margin-left: 40px; 
    
  }
  .about_text {
    color: white;
    font-size: 26px;
    line-height: 1.5;
    text-transform: lowercase;
  }
  .img {
    margin-top:15%;
    margin-left:-8%;
    overflow:hidden;
   
  } 
  .about_container2 {
    display: flex;
    margin-top: 10%;
    margin-left: 19%; 
  }
  .about_paragraph {
     margin-left: 80px; 
    line-height: 1.4;
    font-size: 25px;
    color: #575757;
  }
  .about_txt3 {
    margin-top: 80px;
    width: 100%;
    height: 70vh;
    background-color: #d04e17;
    display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  }
  .about_paragraph2 { 
    color: white;
    font-size: 40px;
    text-indent:-3em;
    text-style:Sans-serif;
    
  }
  .about_txt4 {
    margin-top: 80px;
    color: #575757;
    font-size: 20px;
    height: 20vh;
    border-block-end: 1px solid #575757;
  }
`;
export default About;

import React from 'react'
import Slider from './Components/Slider_components/Slider'
import Slidesdata from './Components/Slider_components/Slidesdata'
import styled from 'styled-components';
import Carousel from './Components/Carousel';

const Shop = () => {
  return (
    <StyledShop>
      <Slider slides={Slidesdata} /><br /><br />
      <Carousel />





    </StyledShop>
  )
}

const StyledShop = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Courgette;
}
.slider {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  white-space: nowrap;
}
.slider .slider_wrapper {
  position: relative;
  height: 100%;
  width: 100%;

}
.slider_wrapper .slide {
  display: inline-block;
  height: 100%;
  width: 100%;
  position: relative;
  margin: auto !important;
}
.slide .slide_content button {
  padding: 20px 40px;
  margin-top: 30px;
  background-color: rgb(252, 40, 40);
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in;
  font-family: Poppins;
}
.slide .slide_content button:hover {
  background-color: rgb(5, 2, 2);
}
.slider .dots_wrapper {
  z-index: 999;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.dots_wrapper .dot {
  color: rgb(24, 23, 23);
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
}
.dots_wrapper .dot.active {
  color: red;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  background-color: #242426;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;

}
.rec-pagination {
  display: none; 
}
.rec-arrow-left,.rec-arrow-right {
  background-color: #242426 !important;
  color: #fff;
}
.rec-arrow-left,.rec-arrow-right:hover{
    background-color:#242426 !important ;
  }
.carousel_container{
  margin-top: 5vh;
}

`
export default Shop;
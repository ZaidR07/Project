import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Shop_product_data from "./Shop_product_data";

const MyCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const handleImageClick = (link) => {
        window.location.href = link;
    };
    return (
        <Carousel
            arrows={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <StyledItem>
                <img className="Carousel_img" src={Shop_product_data.images.onwhey} alt="ON Whey" />
                <br />
                <div className="description">
                   <p> Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 1.7 Kg (Double Rich Chocolate), 55 Serves, for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate</p><br />
                   <span className="rupee">₹<span className="price"> 4400 - 4800</span></span>
                   <button onClick={() => handleImageClick(Shop_product_data.links.onwhey)}
                    className="order">Order Now</button>
                </div>

            </StyledItem>
            <StyledItem>
                <img className="Carousel_img" src={Shop_product_data.images.muscleblazewhey} alt="Muscleblaze_Whey" />
                <br />
                <div className="description">
                   <p> MuscleBlaze Beginner's Whey Protein (Chocolate, 1 kg / 2.2 lb) No Added Sugar, Faster Muscle Recovery & Improved Strength with Shaker, 650 ml (Combo Pack)</p><br />
                   <span className="rupee">₹<span className="price"> 1200 - 1600</span></span>
                   <button onClick={() => handleImageClick(Shop_product_data.links.muscleblazewhey)}
                    className="order">Order Now</button>
                </div>

            </StyledItem>
            <StyledItem>
                <img className="Carousel_img" src={Shop_product_data.images.avatarwhey} alt="ON Whey" />
                <br />
                <div className="description">
                   <p>AVVATAR WHEY PROTEIN | 1 Kilogram | Unflavoured | 27g Protein | 29 Servings | Isolate & Concentrate Blend | Soy free | Vegetarian | Muscle Growth</p><br />
                   <span className="rupee">₹<span className="price"> 4400 - 4800</span></span>
                   <button onClick={() => handleImageClick(Shop_product_data.links.avatarwhey)}
                    className="order">Order Now</button>
                </div>

            </StyledItem>
            <StyledItem>
                <img className="Carousel_img" src={Shop_product_data.images.nakprowhey} alt="ON Whey" />
                <br />
                <div className="description">
                   <p> Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 1.7 Kg (Double Rich Chocolate), 55 Serves, for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate</p><br />
                   <span className="rupee">₹<span className="price"> 4400 - 4800</span></span>
                   <button onClick={() => handleImageClick(Shop_product_data.links.onwhey)}
                    className="order">Order Now</button>
                </div>

            </StyledItem>
            <StyledItem>
                <img className="Carousel_img" src={Shop_product_data.images.onwhey} alt="ON Whey" />
                <br />
                <div className="description">
                   <p> Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 1.7 Kg (Double Rich Chocolate), 55 Serves, for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate</p><br />
                   <span className="rupee">₹<span className="price"> 4400 - 4800</span></span>
                   <button onClick={() => handleImageClick(Shop_product_data.links.onwhey)}
                    className="order">Order Now</button>
                </div>

            </StyledItem>
            <StyledItem>
                <img className="Carousel_img" src={Shop_product_data.images.onwhey} alt="ON Whey" />
                <br />
                <div className="description">
                   <p> Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 1.7 Kg (Double Rich Chocolate), 55 Serves, for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate</p><br />
                   <span className="rupee">₹<span className="price"> 4400 - 4800</span></span>
                   <button onClick={() => handleImageClick(Shop_product_data.links.onwhey)}
                    className="order">Order Now</button>
                </div>

            </StyledItem>






        </Carousel>


    );
};
const StyledItem = styled.div`
width: 75%;
height: 68vh;
background-color: white;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust shadow as needed */
border: 1px solid rgba(0, 0, 0, 0.4); /* Adjust border color as needed */
border-radius: 8px;
margin-left: 1vw !important;
margin-right: 1vw !important;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;



.Carousel_img{
width: 100%;
aspect-ratio: 3/2;
object-fit: contain;
    
}
.price{
    font-size: 1.5rem;
    vertical-align: sub;
    
}
.description{
    width: 90%;
    text-align: justify;

}
.order{
    width: 40%;
    height: 5vh;
    display: inline-block;
    margin-left: 5%;
    background-color: #CC3D00;
    border: #CC3D00;
    color: white;
    border-radius: 5px;
}
`
export default MyCarousel;
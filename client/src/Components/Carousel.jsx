import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import axios from "axios";

const MyCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Productget");
        const filteredProducts = response.data.filter(
          (product) => product.category === "Supplements"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
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
      {products.length > 0 && products.map((product) => (
        <StyledItem key={product._id}>
          <img
            className="Carousel_img"
            src={"http://localhost:4000/Productimages/" + product.image}
          />
          <br />
          <div className="description">
            <p>{product.description}</p>
            <br />
            <span className="rupee">
              ₹<span className="price">{product.price}</span>
            </span>
            <button
              onClick={() => handleImageClick(product.link)}
              className="order"
            >
              Order on Flipkart
            </button>
          </div>
        </StyledItem>
      ))}
    </Carousel>
  );
};

const StyledItem = styled.div`
  width: 75%;
  height: 68vh;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  margin-left: 1vw !important;
  margin-right: 1vw !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .Carousel_img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  .price {
    font-size: 1.5rem;
    vertical-align: sub;
  }

  .description {
    width: 90%;
    text-align: justify;
  }

  .order {
    width: 40%;
    height: 5vh;
    display: inline-block;
    margin-left: 5%;
    background-color: #cc3d00;
    border: #cc3d00;
    color: white;
    border-radius: 5px;
  }
`;

export default MyCarousel;

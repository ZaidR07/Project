import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { BsCart3 } from "react-icons/bs";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Admin_panel = () => {
  const [totalusers, setTotalusers] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState();
  const [product, setProduct] = useState([]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('link', link);


    try {
      const response = await axios.post("http://localhost:4000/Productadd", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Admin", {

        })
        const res = await axios.get("http://localhost:4000/Productget", {

        })
        setProduct(res.data);
        setTotalusers(response.data.totalusers);
      } catch (error) {
        console.log(error);
      }

    };
    handleLoad();
  }, []);
  const crossRef = React.createRef();
  const overlayRef = React.createRef();

  const handleButtonClick = () => {
    const overlayElement = overlayRef.current;
    const crossElement = crossRef.current;
    if (overlayElement.style.display !== "block") {
      overlayElement.style.display = "block";
      crossElement.style.display = "block";
    }
  };

  const handleCross = () => {
    const overlayElement = overlayRef.current;
    const crossElement = crossRef.current;
    if (overlayElement.style.display === "block") {
      overlayElement.style.display = "none";
      crossElement.style.display = "none";
    }
  };
  return (
    <StyleAdmin>
      <div className="container">
        <div className="sidebar">
          <div className="sidebartop">
            <NavLink to="/">
              <img src="/Resorces/fitpro_logo.png" alt="FitPro Logo" width="40px" />
              <span className="side-heading">FITNESS365</span>
            </NavLink>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="#dashboard">
                <BsGrid1X2Fill className="icon" /> Dashboard
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#red">
                <BsFillArchiveFill className="icon" /> Products
              </a>
            </li>

            <li className="sidebar-list-item">
              <a href="#yellow">
                <BsPeopleFill className="icon" /> Customers
              </a>
            </li>

            <li className="sidebar-list-item">
              <a href="#green">
                <BsMenuButtonWideFill className="icon" /> Reports
              </a>
            </li>

          </ul>
        </div>
        <div className="display">
          <div className="dashboard" id="dashboard">
            <main className="main-container">
              <div className="main-title">
                <h3>DASHBOARD</h3>
              </div>

              <div className="main-cards">
                <div className="card">
                  <div className="card-inner">
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className="card_icon" />
                  </div>
                  <h1>300</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>SALES</h3>
                    <BsFillGrid3X3GapFill className="card_icon" />
                  </div>
                  <h1>12</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className="card_icon" />
                  </div>
                  <h1>{totalusers}</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>ENGAGEMENTS</h3>
                    <BsFillBellFill className="card_icon" />
                  </div>
                  <h1>42</h1>
                </div>
              </div>
            </main>
          </div>
          <div className="product_container" id="red">
            <div className="box">
              <button onClick={handleButtonClick} className="add-btn">Add Product</button><br /><br />
              <br /><br />
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>

                  {product.length > 0 && product.map((item, index) => (
                    <tr key={index}>
                      <td><img className="product_table_img" src={"http://localhost:4000/Productimages/" + item.image} alt="" /></td>
                      <td>{item.product_id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
            <div className="overlaybox" ref={overlayRef}>
              <button className='crossicon' ref={crossRef} onClick={handleCross}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <h3 style={{ textAlign: "center" }}>New Product</h3><br />
              <form>
                <input type="text" className="product-inputs" name="product_name" placeholder="Enter Product Name" onChange={(e) => (setName(e.target.value))} /><br /><br />
                <input type="text" className="product-inputs" name="product_price" placeholder="Enter Price" onChange={(e) => (setPrice(e.target.value))} /><br /><br />


                <textarea name="product_description" id="" cols="30" rows="10" placeholder="Description" onChange={(e) => (setDescription(e.target.value))} ></textarea><br /><br />
                <input type="text" className="product-inputs" name="product_price" placeholder="Affiliate link" onChange={(e) => (setLink(e.target.value))} /><br /><br />
                <input type="file" className="product-inputs" name="image" onChange={(e) => (setFile(e.target.files[0]))} /><br />
                <input type="submit" value="Add" className="submitbtn" onClick={handleSubmit} />




              </form>
            </div>


          </div>
          <div className="yellow_container" id="yellow"></div>
          <div className="green_container" id="green"></div>
        </div>
      </div>

    </StyleAdmin>
  );
};

const StyleAdmin = styled.div`
  
  .container {
    display: flex;
  }
  .sidebar {
    position:fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width:20%;
    height: 100vh;
    background-color: #263043;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  .sidebartop{
    width: 100%;
    height: 64px;
    background-color: #263043;
    padding: 4%;
    border: 1px solid #263043;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  .side-heading,a{
    font-size: 1.5rem;
    vertical-align: super;
    text-decoration: none;
    font-style:normal;
    color: #d04e17;
  }
  .sidebar-brand {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  .sidebar-list {
    padding: 0;
    list-style-type: none;
  }

  .sidebar-list-item {
    padding: 20px 20px 20px 20px;
    font-size: 18px;
  }

  .sidebar-list-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  .sidebar-list-item > a {
    text-decoration: none;
    color: #9e9ea4;
  }

  .sidebar-responsive {
    display: inline !important;
    position: absolute;
    z-index: 12 !important;
  }
  .display{
    width: 80%;
    position: absolute;
    top: 0;
    margin-left: 20%;
    z-index: 1;
  }
.dashboard{
  background-color:#081938;
  width:100%;
  height: 100vh;
}
  .main-container {
    padding: 20px 20px;
    color: rgba(255, 255, 255, 0.95);
  }

  .main-title {
    display: flex;
    justify-content: space-between;
    color: white;
  }

  .main-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 15px 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 45px;
    border-radius: 5px;
  }

  .card:first-child {
    background-color: #2962ff;
  }

  .card:nth-child(2) {
    background-color: #ff6d00;
  }

  .card:nth-child(3) {
    background-color: #2e7d32;
  }

  .card:nth-child(4) {
    background-color: #d50000;
  }

  .card-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-inner > .card_icon {
    font-size: 25px;
  }
  .blue_container{
    width:100%;
  height:100vh;
  background-color:blue;
  }
  .product_container{
    width:100%;
  height:100vh;
  background-color:red;
  display: grid;
  place-items: center;
  }
  .yellow_container{
    width:100%;
  height:100vh;
  background-color:yellow;
  }
  .green_container{
    width:100%;
  height:100vh;
  background-color:green;
  }
  
  .box {
  background-color: green;
  width: 90%;
  min-height: 90vh;
  padding: 5vh 5vw 5vh 5vw;
  display: block;
}

.overlaybox {
  background-color: white;
  display: none;
  width: 40%;
  height: 60vh;
  position: absolute;
  z-index: 1;
}
  table,tr,td,th{
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,tr{
    min-width: 8vw;
    max-width: 20vw;
    text-align: center;
  }
  form{
    width: 100%;
    padding: 0 0% 0px 10%;
  }
.product-inputs{
  width: 90%;
  height: 5vh;
  padding-left: 1%;
}
textarea{
  width: 90%;
  height: 20vh;


}
.product_table_img{
  width: 50%;
  aspect-ratio: 3/2;
  object-fit: contain;
  
}
.submitbtn{
  display: block;
  margin: auto;
  width: 6vw;
  min-height: 4vh;
}
`

export default Admin_panel;
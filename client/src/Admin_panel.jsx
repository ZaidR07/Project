import React from "react";
import styled from "styled-components";
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
import 
 {BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

const Admin_panel = () => {
  return (
    <StyleAdmin>
    
      <div className="container">
        <aside className="sidebar">
          

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="">
                <BsGrid1X2Fill className="icon" /> Dashboard
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="">
                <BsFillArchiveFill className="icon" /> Products
              </a>
            </li>
            
            <li className="sidebar-list-item">
              <a href="">
                <BsPeopleFill className="icon" /> Customers
              </a>
            </li>
            
            <li className="sidebar-list-item">
              <a href="">
                <BsMenuButtonWideFill className="icon" /> Reports
              </a>
            </li>
            
          </ul>
        </aside>
        <div className="card-container">
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
                  <h3>CATEGORIES</h3>
                  <BsFillGrid3X3GapFill className="card_icon" />
                </div>
                <h1>12</h1>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3>CUSTOMERS</h3>
                  <BsPeopleFill className="card_icon" />
                </div>
                <h1>33</h1>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3>ALERTS</h3>
                  <BsFillBellFill className="card_icon" />
                </div>
                <h1>42</h1>
              </div>
            </div>
          </main>
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
    grid-area: sidebar;
    width:20%;
    height: 100vh;
    background-color: #263043;
    overflow-y: auto;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
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
.card-container{
  background-color:#081938;
  width:100%;
}
  .main-container {
    grid-area: main;
    overflow-y: auto;
    padding: 20px 20px;
    color: rgba(255, 255, 255, 0.95);
    margin-top: 5%;
    margin-left: 5%;
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
  
  
`

export default Admin_panel;

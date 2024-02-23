import React, { useState } from 'react';
import Home from "./Home";
import About from "./About";
import Diet from "./Diet";
import Workout from "./Workout";
import Contact from "./Contact";
import Shop from "./Shop";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Login_plus_register from "./Login_plus_register";
import Forgot_password from "./Components/Login_components/Forgot_password";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const theme = {
    colors: {
      heading: "",
      navbg: "#242426"
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <>
            {isLoggedIn && <Header />}
            <Routes>
              {!isLoggedIn && (
                <>
                  <Route path="/" element={<Login_plus_register setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/Forgot_password" element={<Forgot_password />} />
                </>
              )}
              {isLoggedIn && (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Workout" element={<Workout />} />
                  <Route path="/Diet" element={<Diet />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Contact" element={<Contact />} />
                </>
              )}
            </Routes>
            {isLoggedIn && <Footer />}
          </>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;


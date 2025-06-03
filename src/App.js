import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

import MyNav from "./components/NavbarComponents/MyNav";
import "./App.css";

import Head from "./components/Head";
import GoRezervasion from "./components/GoRezervasion";
import Social from "./components/Social";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";



function App() {

  return (
    <div className="App">
        <Head />
        <MyNav  />
        <GoRezervasion />
        <Social />
        <Footer />{" "}
        
    </div>
  );
}

export default App;

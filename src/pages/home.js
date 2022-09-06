import React from "react";
import "../styles/style.css";
import { Navbar, Quote, MovingStatus, Landing } from "../components/index";

function Home() {
    return ( 
        <div className = "home">
            <Navbar />
            <Landing />
            <Quote />
            <MovingStatus />
        </div>
    );
}

export default Home;
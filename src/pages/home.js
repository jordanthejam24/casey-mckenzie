import React from "react";
import "../styles/style.css";
import Navbar from "../components/navbar";
import { Landing } from "../components/landing";
import { Quote } from "../components/quote";

function Home() {
    return ( 
        <div className = "home">
            <Navbar />
            <Landing />
            <Quote />
        </div>
    );
}

export default Home;
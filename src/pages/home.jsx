import React from "react";
import "../styles/style.css";
import { 
    Navbar, 
    Quote, 
    MovingStatus, 
    Landing,
    Footer, 
} from "../components/index";

function Home() {
    return ( 
        <div className = "home">
            <Navbar />
            <Landing />
            <Quote />
            <MovingStatus />
            <Footer />
        </div>
    );
}

export default Home;
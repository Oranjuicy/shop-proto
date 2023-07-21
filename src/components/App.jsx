import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import Namecard from "./Namecard";
import Item from "./Item";
import {LeftButton, RightButton} from "./Button";
import artworkList from "../artworkList";

function App() {

    
    const [currentPot, setPot] = useState(artworkList[0]);

    function handleClick(event){

        const id = event.currentTarget.id;

        if (id === "leftArrow") {
            setPot(artworkList[artworkList.indexOf(currentPot) - 1])
        } else {
            setPot(artworkList[artworkList.indexOf(currentPot) + 1])
        }
    
        console.log(id)
    }
    
    return (
        <div>
            <Header />
            <LeftButton onClick={handleClick} />
            <RightButton onClick={handleClick} />
            <Namecard price="R300" artistName="Retief Ryke" artworkName="Big Jug" description="A large stoneware jug" />
            <Item image={currentPot} />
            <Footer />

        </div>
    );
}

export default App;
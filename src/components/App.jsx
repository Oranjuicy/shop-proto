import React, { useEffect, useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import Namecard from "./Namecard";
import Item from "./Item";
import {LeftButton, RightButton} from "./Button";
import { set } from "mongoose";

function App() {

    
    const [currentPot, setPot] = useState("");

    useEffect(()=>{
        setPot("https://png.pngtree.com/png-clipart/20220419/original/pngtree-clay-pot-png-png-image_7538985.png")
    }, [])

    function handleClick(event){

        const id = event.currentTarget.id;

        if (id == "leftArrow") {
            setPot("https://m.media-amazon.com/images/I/51EHZTKUI-L.jpg")
        } else {
            setPot("https://m.media-amazon.com/images/I/71DECVSrOcL._AC_UF1000,1000_QL80_.jpg")
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
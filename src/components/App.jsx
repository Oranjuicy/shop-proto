import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Namecard from "./Namecard";
import Item from "./Item";
import {LeftButton, RightButton} from "./Button";


function App() {
    return (
        <div>
            <Header />
            <LeftButton />
            <RightButton />
            <Namecard price="R300" artistName="Retief Ryke" artworkName="Big Jug" description="A large stoneware jug" />
            <Item image="https://png.pngtree.com/png-clipart/20220419/original/pngtree-clay-pot-png-png-image_7538985.png"/>
            <Footer />

        </div>
    );
}

export default App;
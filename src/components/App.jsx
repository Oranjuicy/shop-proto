import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Namecard from "./Namecard";
import Item from "./Item";

function App() {
    return (
        <div>
            <Header />
            <Footer />
            <Item image="https://picsum.photos/seed/picsum/200/300"/>
            <Namecard price="R300" artistName="Retief Ryke" artworkName="Big Jug" description="A large stoneware jug" />

        </div>
    );
}

export default App;
import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Namecard from "./Namecard";

function App() {
    return (
        <div>
            <Header />
            <Footer />
            <Namecard price="R300" artistName="Retief Ryke" artworkName="Big Jug" description="A large stoneware jug" />

        </div>
    );
}

export default App;
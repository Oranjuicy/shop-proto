import React from "react";

export default function Item(props){
    return (<div>
            <img className="artworkImage" src={props.image} alt={props.alt} />
        </div>
    )
}
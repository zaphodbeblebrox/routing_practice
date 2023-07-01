import React from "react";
import { Link, useParams } from "react-router-dom";

const Display = (props) => {
    const {value, text_color, bg_color} = useParams();
    console.log(value);
    const descriptor = isNaN(value) ? "word" : "number";
    
    return(
            <div style={{backgroundColor:bg_color}}>
                <h1 style={{color:text_color}}>The {descriptor} is: {value}</h1>
            </div>
    );
}

export default Display;
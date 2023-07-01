import React from "react";
import { Link, useParams } from "react-router-dom";

const Number = (props) => {
    const {num} = useParams();

    
    return(
        <div>
            <h1>{num}</h1>
            <Link to={"/home"}>Go Home</Link>
        </div>
    )
}

export default Number;
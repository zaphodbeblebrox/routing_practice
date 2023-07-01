import React from "react";
import {Routes, Route, BrowserRouter, redirect } from "react-router-dom";
import Home from "./Home";
import Display from "./Display";

const Main = (props) => {

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/:value" element={<Display />} />
                    <Route path="/:value/:text_color/:bg_color" element={<Display />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;
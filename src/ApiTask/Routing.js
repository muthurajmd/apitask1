import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Details";
// import SwipeableTextMobileStepper from "./Carosel";

export const Routing = () =>{


    return(
        <div>

<BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/details" element={<Detail/>}> </Route>
        {/* <Route path="/carosel" element={<SwipeableTextMobileStepper/>}> </Route> */}

      </Routes>

      </BrowserRouter>




        </div>
    )
}

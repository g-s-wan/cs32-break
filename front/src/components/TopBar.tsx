import { BrowserRouter, Route, Link } from "react-router-dom";
import React from "react";

export default function TopBar(){
    // render the map component with the overlay data as a source and layer
    return(
        <div className="TopBar">
          <li id="Tutorial-Button">
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li id="Title">
            <Link to="/trainer">Trainer</Link>
          </li>
        </div>
)}
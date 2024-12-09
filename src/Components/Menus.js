import React from "react";
import { Link } from "react-router-dom";

export function Menus(){
    return(
        <>
        <nav>
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/Header">Header Page</Link></li>
        <li><Link to="/Movies">Movies Page</Link></li>
        <li><Link to="/Tvshows">Tvshows Page</Link></li>
        <li><Link to="/Footer">Footer Page</Link></li>
      </ul>
    </nav>
        </>
    );
}
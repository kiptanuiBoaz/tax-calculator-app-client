import React from "react";
import "./navBarStyle/style.css";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";
import {FcMenu} from "react-icons/fc"

export const navBar = () => {
  return (
    <div className="navbar">
        <div  className="navLeft">
            <Link to ="/"><img src={img} height="40px" alt=" Natujenge bootcamp"/></Link>
        </div>

        {window.innerWidth < "640px" ? <FcMenu/> :
        <div  className="navRight">
          <Link to="/ourteam">Our Team</Link>
          <Link target="_blank" to ={{pathname:"https://meliora.co.ke/articles/nvrjgtnsgh5ophs6mm"}} ><a href="https://meliora.co.ke/articles/nvrjgtnsgh5ophs6mm" target="_blank"  rel="noreferrer">Virtual Bootcamp</a></Link>
           
        </div>}
   </div>
  )
}




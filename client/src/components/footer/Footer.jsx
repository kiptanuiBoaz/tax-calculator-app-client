import React from "react";
import "./footerStyle/style.css";
import { AiFillGithub} from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="footer">
      
      <p>Copyright ©{new Date().getFullYear()} || Created by <span>Group 10</span></p>
      <p>Powered by <span><a href="https://meliora.co.ke/">Meliora</a></span></p>
      <a style={{height:"20px"}} href="https://github.com/kiptanuiBoaz/Natujenge-Group-10-Wk-1-Challange" rel="noreferrer"  target="_blank"><AiFillGithub/></a>
    </div>
  )
}


import React from "react";
import { AiFillGithub } from "react-icons/ai";

export const TeamCard = ({name,img,link,i}) => {

    const [hover, setHover] = React.useState();
  return (

    <div  style={{ margin:"60px", width:"100px" }} onMouseEnter={ ()=>setHover(i)} onMouseLeave={()=>setHover(15)}>
        <img style={{flexWrap:"wrap",display:"flex", borderRadius:"50%", height:"100px"}} src={img} alt= {`${name} profile`} />
        <p>{name}</p>
        { (hover === i) &&  <a style={{width:"50px"}} href={link} rel="noreferrer"  target="_blank"><AiFillGithub/></a> }
       
    </div>
  )
}


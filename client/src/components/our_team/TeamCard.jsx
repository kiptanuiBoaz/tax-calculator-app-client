import React from "react";
import { AiFillGithub } from "react-icons/ai";


export const TeamCard = ({name,id,img,link,i}) => {

  const [hover, setHover] = React.useState();
  return (

    <div className="profile" key={id}   onMouseEnter={ ()=>setHover(i)} onMouseLeave={()=>setHover(15)}>
      <img  src={img} alt= {`${name} profile`} />
      <p><a  className="gitIcon" href={link} rel="noreferrer"  target="_blank">{name} { hover === i &&   <AiFillGithub/>}</a></p>
      
       
    </div>
  )
}


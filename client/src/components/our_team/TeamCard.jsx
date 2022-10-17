import React from "react";
import { AiFillGithub } from "react-icons/ai";


export const TeamCard = ({name,id,img,link,i}) => {

  const [hover, setHover] = React.useState();
  return (

    <div className="profile" key={id}   onMouseEnter={ ()=>setHover(i)} onMouseLeave={()=>setHover(15)}>
      <img  src={img} alt= {`${name} profile`} />
      <p>{name}</p>
      { hover === i &&  <a  href={link} rel="noreferrer"  target="_blank"><AiFillGithub/></a> }
       
    </div>
  )
}


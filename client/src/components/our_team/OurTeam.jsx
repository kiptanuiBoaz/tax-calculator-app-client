import React from "react";
import {  NavBar } from "../navbar/NavBar";
import {Footer} from "../footer/Footer"; 
import {team} from "../assets/team";
import {TeamCard} from "../our_team/TeamCard";



export const OurTeam = () => {
  return (
    <div>
      <NavBar/>
      {team.map((member,i) =>{
            return(
              <TeamCard
                img ={member.img}
                link={member.link}
                name={member.name}
                i={i}
              />
            )
          }
        )
      }
      
      <Footer/>
    </div>
  )
}

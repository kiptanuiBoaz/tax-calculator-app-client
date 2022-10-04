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
              <TeamCard i={i} {...member}  key={ member.id} />
            )
          }
        )
      }
      
      <Footer/>

      
    </div>
  )
}

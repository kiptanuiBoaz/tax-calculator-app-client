import React from "react";
import {  NavBar } from "../navbar/NavBar";
import {Footer} from "../footer/Footer"; 
import {team} from "../assets/team";
import {TeamCard} from "../our_team/TeamCard";
import "./style/style.css"



export const OurTeam = () => {
  return (
    <div>
      <NavBar />
      <div className="team">
        {team.map((member, i) => {
          return <TeamCard i={i} {...member} key={member.id} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

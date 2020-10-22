import React from "react";
import {
   skills
} from "../data/configurations.json";

const Skills = (props) => {
   return (
      <div id="skills" className="jumbotron jumbotron-fluid m-0">
         <div className="container container-fluid p-5">
            <h1 className="display-4 pb-5">Skills</h1>
            <div className="row">
               {skills.map(skill => <div className="col-4 d-none d-lg-block align-self-center"> <i src={skill.icon} alt="aljkhsd" /> {skill.name} </div>)}
            </div>
         </div>
      </div>
   )
}

export default Skills;
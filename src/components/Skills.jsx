import React from "react";
import { skills } from "../data.jsx";

const Skills = () => {
  return (
    <section className="bg-tertiary py12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center mt-4 mb-4 m-2" key={index}>
                <img src={skill.image} alt="logo"   style={{ width: "60px", height: "60px" }} />              
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;




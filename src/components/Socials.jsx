import React from "react";
import { social } from "../data.jsx";

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-white hover:text-accent"
            key={index}
          >
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base">
                {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;

import React from "react";
import Projects from "../components/Projects.jsx";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Latest Projects
          </h2>
        </div>
      </div>
      <Projects />
    </section>
  );
};

export default Portfolio;

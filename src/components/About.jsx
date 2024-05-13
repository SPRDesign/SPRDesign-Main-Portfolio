import React from "react";
import WomanImg from "../assets/img/avatar-render2-2b.png";


const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 ml-10 mr-10">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={WomanImg}
            alt="image"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Sara Pagès
              </h2>
              <p className="mb-2 text-accent">
                Fullstack Developer & UX/UI Designer
              </p>
              <hr className="mb-2 opacity-5" />
              <p className="mb-8">
                <br />
                I'm a Fullstack Developer and UX/UI Designer blending artistic
                flair with technical prowess. With a background in 3D fashion
                design, I fuse aesthetics with functionality in digital realms.
                <br />
                <br />
                My aim is to craft impactful, user-centric digital experiences.
                Versatility is my forte, enabling me to approach projects from
                diverse angles for visually appealing, intuitive solutions.
                <br />
                <br />I thrive on challenges that allow me to merge creativity
                with technical skills, creating memorable digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

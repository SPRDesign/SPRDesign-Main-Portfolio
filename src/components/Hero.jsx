import React from "react";
import { Link } from "react-scroll";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative z-10">
        <div className="container mx-auto h-full">
          <div className="flex h-full items-center pt-8">
            <div className="flex-1 flex flex-col items-center lg:items-start lg:ml-16">
              <p className="text-xl mb-[22px] text-pink-900 mt-12 font-semibold">
                Hey, I'm Sara
              </p>
              <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center sm:text-left sm:text-3xl sm:leading-[38px]">
                Fullstack Developer <br />
                UX/UI Designer             
              </h1>
              <div className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="btn btn-md mt-4 bg-pink-900 hover:bg-accent-hover md:btn-lg transition-all duration-300 cursor-pointer"
                >
                  Work with me
                </Link>
                <HeroAnimation/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

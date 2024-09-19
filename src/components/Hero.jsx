import Section from "./Section";
// import { profile } from "../assets";
import  profile from '../assets/hero/profile.jpg';
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  const handleDownload = () => {
    window.open('/resume nesrine.pdf', '_blank');
  };


  return (
    <Section
    className="pt-[5rem] -mt-[8rem]"
    crosses
    // crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
      <div className="container relative" ref={parallaxRef} >
        <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-1/2  mr-20 md:ml-20 text-left md:mb-30 lg:mb-[5rem]">
          <h1 className="text-5xl text-white font-bold mt-36 ">
            Welcome, to my Portfolio!
          </h1>
          <p className="text-white ml-2 mt-6 md:ml-35 lg:w-1/2 text-left md:mb-30 lg:mb-[5rem]">
            Discover my journey in web development, where creativity and code come together..Check out my latest web development projects and skills.
          </p>
        
       


        
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end  mt-36">
          <img
            src={profile}
            className="w-full scale-[0.9] translate-y-[4%] md:scale-[1.6] lg:scale-[1] md:-translate-y-[10%] lg:-translate-y-[25%] "
            alt="My picture"
            />
        </div>
      </div>
      </div>
    </Section>
  );
};

export default Hero
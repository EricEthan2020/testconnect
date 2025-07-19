import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container>
      <section className="relative overflow-hidden">
        <img
          alt="Left Banner"
          fetchPriority="high"
          loading="eager"
          width="500"
          height="500"
          decoding="async"
          data-nimg="1"
          className="absolute object-cover -left-5 xl:-left-9 -bottom-6 w-1/2 h-full pointer-events-none"
          src="https://connectstudio.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleft_banner.53c310b9.png&w=640&q=75"
        />
        <img
          alt="Right Banner"
          fetchPriority="high"
          loading="eager"
          width="500"
          height="500"
          decoding="async"
          data-nimg="1"
          className="absolute object-cover -right-5 -bottom-6 w-1/2 h-full pointer-events-none"
        src="https://connectstudio.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright_banner.d94f7fb3.png&w=640&q=75"
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-6 pt-24 pb-32">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary uppercase">
            Captivate, Connect, Convert
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-secondary uppercase mt-4">
            Social Media That Scales
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-secondary uppercase mt-4">
            In Southeast Asia
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Connect is a premier social media hub, blending youthful talents and
            expertise to link brands with creative potential.
          </p>
          <a href="/contact-us">
            <div className="flex hover:scale-105 duration-200 flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              <div
                className="bg-primary text-white pl-6 pr-2 py-1 rounded-full font-semibold text-base shadow-lg transition-all flex items-center gap-4"
                tabIndex="0"
              >
                <p>Let’s Talk Strategy</p>
                <button className="px-5 py-1   text-md md:text-lg  rounded-full font-bold text-secondary bg-white cursor-pointer">
                  Get Start
                </button>
              </div>
            </div>
          </a>
          <div className="mt-6 hover:scale-105 duration-200" tabIndex="0">
            <a href="/work" className=" hover:scale-110"> 
              <button className="px-6 py-2 text-sm md:text-md  rounded-full  text-white bg-secondary cursor-pointer">
                Explore Our Projects
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-10 animate__animated animate__infinite animate__delay-3s animate__shakeY animate__infinite">
            <a
              href="#video"
              className="rounded-full border border-primary bg-transparent p-2 flex flex-col items-center cursor-pointer transition"
            >
              <div className="bg-[#3BBEFF] w-9 h-9 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z"></path>
                </svg>
              </div>
              <div className="flex flex-col items-center -space-y-4">
                <svg
                  className="w-6 h-6 text-[#3BBEFF]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 14z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="w-6 h-6 text-[#3BBEFF]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 14z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;

import React from "react";
import Container from "./Container";

const Video = () => {
  return (
    <Container>
      <section id="video" className="py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto bg-primary bg-opacity-20 backdrop-blur-xl rounded-xl p-2"
        >
          <video
            src="https://connectstudio.info/Connect%20Reel.mp4"
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="rounded-xl w-full"
            
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </Container>
  );
};

export default Video;

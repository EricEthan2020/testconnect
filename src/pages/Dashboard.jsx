import React from "react";
import Container from "../component/Container";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Video from "../component/Video";
import Ourservices from "../component/Ourservices";
import Slider from "../component/Slider";
import OurClients from "../component/OurClients";
const DashBoard = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Video />
      <Ourservices />
      <Footer />
    </Container>
  );
};

export default DashBoard;

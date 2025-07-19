import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Video from "../component/Video";
import Ourservices from "../component/Ourservices";
import Footer from "../component/Footer";
import Container from "../component/Container";
const DashBoard = () => {
  return (
    <Container>
      <Header />
      <Hero/>
      <Video />
      <Ourservices />
      <Footer />
    </Container>
  );
};

export default DashBoard;
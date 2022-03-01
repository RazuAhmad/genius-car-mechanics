import React from "react";
import CarouselCompo from "../Components/Carousel/CarouselCompo";
import Experts from "../Components/Experts/Experts";
// import NavBarComponent from "../Components/NavBar/NavBar";
import Service from "../Components/Service/Service";

const Home = () => {
  return (
    <div>
      <CarouselCompo />
      <br />
      <Service />
      <br />

      <Experts />
    </div>
  );
};

export default Home;

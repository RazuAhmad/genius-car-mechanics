import React from "react";
import Service from "./Components/Service/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./Components/NavBar/NavBar";
import Experts from "./Components/Experts/Experts";
import CarouselCompo from "./Components/Carousel/CarouselCompo";
const App = () => {
  return (
    <div>
      <NavBarComponent />
      <br />
      <br />
      <CarouselCompo />
      <br />
      <Service />
      <br />

      <Experts />
    </div>
  );
};

export default App;

import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselCompo = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/FKT3kgW/rsz-1carousel-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "red" }}>Quality is our first concern</h3>
          <p>
            Customer service shouldn’t just be a department, it should be the
            entire company.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/RzJNn5M/rsz-carousel-3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/F4kJt61/pexels-cottonbro-4489732.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCompo;

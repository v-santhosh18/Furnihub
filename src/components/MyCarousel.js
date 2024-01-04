import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const MyCarousel = () => {
  const arrowStyles = {
    fontSize: '80px',
    color: 'grey',
    lineHeight: '1.5',
    borderRadius: '50%', 
    display: 'inline-block', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease'
  };

  return (
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>} style={{border : "2px solid lightblue"}}>
      <Carousel.Item>
        <CarouselImage src={slide1} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={slide2} alt="Second Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={slide3} alt="Third Image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;

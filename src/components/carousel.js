import React from 'react'
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ images }) => {
  return (
        <Carousel >
             {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
        </Carousel>
  )
}

export default MyCarousel
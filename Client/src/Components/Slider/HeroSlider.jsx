import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroSlider = () => {
  return <Carousel showThumbs={false}>
    <div>
      <img style={{height: '450px'}} src="/Assets/images/slider-4.gif" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img style={{height: '450px'}} src="/Assets/images/slider-1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img style={{height: '450px'}} src="/Assets/images/slider-2.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img style={{height: '400px'}} src="/Assets/images/slider-3.jpg" />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
}

export default HeroSlider
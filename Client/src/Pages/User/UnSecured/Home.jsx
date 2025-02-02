import React from 'react'
import Hero from '../../../Components/User/Hero';
import Products from '../../../Components/User/Product/Products';
import BestSelling from '../../../Components/User/BestSelling';
import PeopleLooksFor from '../../../Components/User/PeopleLooksFor';
import HeroSlider from '../../../Components/Slider/HeroSlider';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Hero />
      <Products />
      <BestSelling />
      <PeopleLooksFor />
    </>
  )
}

export default Home
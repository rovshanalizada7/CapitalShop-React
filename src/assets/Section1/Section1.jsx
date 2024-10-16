import React from 'react'
import "../Section1/section1.css"
import Carousel from 'react-bootstrap/Carousel';


const Section1 = () => {
  return (
    <section className='section1'>
        <Carousel fade>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg" alt="" />
        <Carousel.Caption className='carousel-caption-left'>
        <span>Fashion Sale</span>
          <h3>Minimal Menz Style</h3>
          <p>Consectetur adipisicing elit. 
            Laborum fuga incidunt laboriosam voluptas iure, 
            delectus dignissimos facilis neque nulla earum.</p>
          <a href="">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg" alt="" />
        <Carousel.Caption className='carousel-caption-right'>
        <span>Fashion Sale</span>
          <h3>Minimal Menz Style</h3>
          <p>Consectetur adipisicing elit. 
            Laborum fuga incidunt laboriosam voluptas iure, 
            delectus dignissimos facilis neque nulla earum.</p>
          <a href="">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section >
  )
}

export default Section1
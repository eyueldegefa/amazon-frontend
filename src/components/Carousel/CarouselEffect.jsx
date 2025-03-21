import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import {img} from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';

function CarouselEffect () {
  return (
    <div className='slider'>
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >
            {
                img.map((images)=>{
                  return <img src={images}/>
                })
            }
        </Carousel>
        <div className='shadow'></div>
    </div>
  )
}

export default CarouselEffect
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 export default function CarouselComp() {

     const banner = require('../Images/banner.jpeg');

     const indy = require('../Images/indy.jpeg');

        return (
            <Carousel>
                <div style={{objectFit: "cover", height: 250}}>
                    <img src={indy} />
                </div>
                <div>
                    <img src={banner} />
                </div>
            </Carousel>
        )}

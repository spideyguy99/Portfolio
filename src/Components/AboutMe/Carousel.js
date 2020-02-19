import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 export default function CarouselComp() {

     const banner = require('../Images/banner.jpeg');

     const indy = require('../Images/indy.jpeg');

     const noahUlt = require('../Images/noahUlt.jpg');

     const regatta = require('../Images/regatta.jpg');

     const team = require('../Images/tem10.jpg');

        return (
            <Carousel>
                <div>
                    <img src={indy} />
                </div>
                <div>
                    <img src={banner} />
                </div>
                <div>
                    <img src={noahUlt}/>
                </div>
                <div>
                    <img src={regatta}/>
                </div>
                <div>
                    <img src={team}/>
                </div>
            </Carousel>
        )}

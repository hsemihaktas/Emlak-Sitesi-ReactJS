import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../images/Ilan_Resmi.jpg'
import Image2 from '../images/sirket.jpg'

function Slider() {
    return (
        <div>
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-item"
                    src={Image}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100 slider-item"
                        src={Image2}
                        alt="Second slide"
                        />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider

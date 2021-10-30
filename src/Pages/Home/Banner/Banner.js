import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner2.jpg'
import banner2 from '../../../images/banner/banner3.jpg'
import banner3 from '../../../images/banner/banner1.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-white">Switzerland </h1>
                        <p>Matterhorn is a mountain of the Alps, straddling the main watershed and border between Switzerland</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white">Turkey</h1>
                        <p>he Fairy Chimneys of Cappadocia. High on the Anatolian plateau, the curious landscapes of Cappadocia resemble a fantasy world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white">Norway</h1>
                        <p>This is a list of lists of villages in Norway, divided into sub-sections by county. The lists consist of populated places without city status.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
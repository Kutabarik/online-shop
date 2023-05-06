import React from 'react'

import {Carousel} from "react-bootstrap";

import style from './MainCarouse.module.scss'

const MainCarousel = () => {
    const [index, setIndex] = React.useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                    <div className={style.wrapper}>
                        <img
                            className={`d-block w-100 ${style.wrapperImg}`}
                            src="/assets/img/slide-show-1.jpg"
                            alt="First slide"
                        />
                    </div>
                <Carousel.Caption>
                    <h3>Variety of products</h3>
                    <p>In our store, you will find everything you need for home comfort, beauty, and health</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={style.wrapper}>
                    <img
                        className={`d-block w-100 ${style.wrapperImg}`}
                        src="/assets/img/slide-show-2.jpg"
                        alt="First slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Quality of products</h3>
                    <p>We offer only high-quality products from trusted manufacturers</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={style.wrapper}>
                    <img
                        className={`d-block w-100 ${style.wrapperImg}`}
                        src="/assets/img/slide-show-3.jpg"
                        alt="First slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Affordable prices</h3>
                    <p>At our store, you will find products at the most affordable prices that will please your wallet</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MainCarousel;
import React from 'react'
import { Carousel } from 'react-bootstrap';
import './style.css'


function CarousalBanner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/22/b8953010-6b58-49bf-b47d-7d0bcf00dd0e1637595954420-Biba_Desk_Banner--1-.jpg"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/22/76210c8b-c9ae-493f-859a-d36bfc1995d51637596123947-Levi-s_Desk_Banner.jpg"
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/22/6762b6aa-1572-4409-b16f-efe09fa77d241637559669258-1920x504-Desktop-Banner.jpg"
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}

export default CarousalBanner

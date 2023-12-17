import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from '../assets/images/img/img-3.webp';
import img4 from '../assets/images/img/img-4.webp';
import img5 from '../assets/images/img/img-5.webp';

export default function Explore() {
    return (
        <section id='explore-food'>
            <div className='explore-food wrapper'>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='text-content text-center'>
                                <h2>Explore Our Foods</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper iaculis tristique. Aliquam finibus neque mauris. Sed nec volutpat ligula, ac fermentum metus. Curabitur ut nisi ut sapien efficitur elementum.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-5'>
                        <Col lg={4} md={6} className='mb-lg-0 mb-5'>
                            <div className='card'>
                                <img src={img3} alt='img' className='img-fluid' />
                                <div className='p-4'>
                                    <h4>Rainbow Vegetable Burger</h4>
                                    <p>Time: 15 - 20 Minutes | Serves: 1</p>
                                    <span>$10.50 <del>$11.70 </del> </span>
                                    <button className='mt-4 main-btn'> Order Now</button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className='mb-lg-0 mb-5'>
                            <div className='card'>
                                <img src={img4} alt='img' className='img-fluid' />
                                <div className='p-4'>
                                    <h4>Vegetarian Food</h4>
                                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                                    <span>$9.20 <del>$10.50 </del> </span>
                                    <button className='mt-4 main-btn'> Order Now</button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className='mb-lg-0 mb-5'>
                            <div className='card'>
                                <img src={img5} alt='img' className='img-fluid' />
                                <div className='p-4'>
                                    <h4>Rasberry Stuffed French Food</h4>
                                    <p>Time: 10 - 15 Minutes | Serves: 1</p>
                                    <span>$12.50 <del>$13.20 </del> </span>
                                    <button className='mt-4 main-btn'> Order Now</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

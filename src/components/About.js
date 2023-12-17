import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/img/img-1.webp';
import img2 from '../assets/images/img/img-2.webp';

export default function About() {
    return (
        <section id='about'>
            <div className='about-section-wrapper'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} className='mb-lg-0 mb-5'>
                            <img src={img1} alt='img' className='img-fluid' />
                        </Col>
                        <Col lg={6} md={12} className='ps-lg-5'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum nisi id lorem blandit, in lacinia elit porttitor. Quisque pulvinar commodo lacinia. Maecenas condimentum congue.</p>
                            <button className='main-btn mt-4'>Learn More</button>
                        </Col>
                    </Row>
                    <Row className='align-items-center food-type'>
                        <Col lg={5} md={12} className='pe-lg-5'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum nisi id lorem blandit, in lacinia elit porttitor. Quisque pulvinar commodo lacinia. Maecenas condimentum congue.</p>
                            <ul className='list-unstyled py-3'>
                                <li>Lorem dolor commodo in amet elit.</li>
                                <li>Lorem dolor commodo in amet elit.</li>
                                <li>Lorem dolor commodo in amet elit.</li>
                            </ul>
                            <button className='main-btn mt-4'>Learn More</button>
                        </Col>
                        <Col lg={7} md={12} className='mb-5'>
                            <img src={img2} className='img-fluid' alt='img'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

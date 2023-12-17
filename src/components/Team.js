import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/team/team1.webp';
import img2 from '../assets/images/team/team2.webp';
import img3 from '../assets/images/team/team3.webp';
import img4 from '../assets/images/team/team4.webp';

export default function Team() {
    return (
        <section id='team'>
            <div className='team wrapper'>
                <Container>
                    <Row>
                        <Col sm={12} className='text-center pb-5'>
                            <h2>They will cook for you</h2>
                        </Col>
                        <Col xl={3} sm={6} className='mb-4'>
                            <div className='card'>
                                <img src={img1} className='img-fluid' alt='img' />
                                <div className='team-caption py-4 px-2'>
                                    <h4>John Doe</h4>
                                    <h6>Sous-Chef</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet elit consectetur adipiscing posuere.
                                    </p>
                                    <div className='social-icon'>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-twitter"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} sm={6} className='mb-4'>
                            <div className='card'>
                                <img src={img2} className='img-fluid' alt='img'  />
                                <div className='team-caption py-4 px-2'>
                                    <h4>John Doe</h4>
                                    <h6>Sous-Chef</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet elit consectetur adipiscing posuere.
                                    </p>
                                    <div className='social-icon'>
                                    <a href='https://www.facebook.com'><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-twitter"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} sm={6} className='mb-4'>
                            <div className='card'>
                                <img src={img3}className='img-fluid' alt='img' />
                                <div className='team-caption py-4 px-2'>
                                    <h4>John Doe</h4>
                                    <h6>Sous-Chef</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet elit consectetur adipiscing posuere.
                                    </p>
                                    <div className='social-icon'>
                                    <a href='https://www.facebook.com'><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-twitter"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} sm={6} className='mb-4'>
                            <div className='card'>
                                <img src={img4} className='img-fluid' alt='img' />
                                <div className='team-caption py-4 px-2'>
                                    <h4>John Doe</h4>
                                    <h6>Sous-Chef</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet elit consectetur adipiscing posuere.
                                    </p>
                                    <div className='social-icon'>
                                    <a href='https://www.facebook.com'><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-twitter"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href='https://www.facebook.com'><i class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

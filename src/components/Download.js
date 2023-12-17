import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../assets/images/app/1.svg';
import image2 from '../assets/images/app/2.svg';
import image3 from '../assets/images/app/phones.webp';

export default function Download() {
    return (
        <section id='download-app'>
            <div className='download-app wrapper'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} className='mb-4'>
                            <div className='text-content'>
                                <h1 className='mb-3'>Download our mobile app.</h1>
                                <p>Consectetur orem Ipsum has been the standard dummy Ipsum has text.</p>
                                <div className='d-flex flex-wrap mt-4'>
                                    <a href='#'><img src={image1} className='me-3' alt='img'/></a>
                                    <a href='#'><img src={image2} className='me-3' alt='img'/></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-4'>
                            <img src={image3} alt='img' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

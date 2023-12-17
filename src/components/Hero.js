import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hero() {
    return (
        <section id='home' className='home'>
            <div className='top-banner'>
                <Container>
                    <Row>
                        <Col xl={5} md={6}>
                            <h1>Good food choices are good </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla porttitor purus vitae adipiscing elit.</p>
                            <button className='main-btn mt-4'>Order Now <i className="fa-solid fa-basket-shopping ps-3"></i></button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

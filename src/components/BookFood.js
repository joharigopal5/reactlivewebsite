import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BookFood() {
    return (
        <section id='book-food'>
            <div className='book-food'>
                <Container className='book-food-text'>
                    <Row className='text-center'>
                        <Col lg={9}md={12}>
                            <h2>Baked fresh daily by bakers with passion.</h2>
                        </Col>
                        <Col lg={3} md={12} className='mt-lg-0 mt-4'>
                            <button className='main-btn'>Book Online</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

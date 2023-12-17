import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Story() {
    return (
        <section id='story'>
            <div className='story-section'>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='text-content'>
                                <h2>When a mens's stomach is full it makes no differnce whether he is rich or poor.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac sapien et nunc vulputate cursus et nunc vulputate cursus.</p>
                                <button className='main-btn mt-3'>Read More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

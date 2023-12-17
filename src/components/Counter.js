import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Counter() {
    const [counterState, setCounterState] = useState(false);

    return (
        <section id='counter'>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className='counter-section'>
                    <Container>
                        <Row className='text-center'>
                            <Col md={3} sm={6} className='mb-md-0 mb-4'>
                                <h2>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={1287}
                                            duration={2.75}
                                        >
                                        </CountUp>
                                    }+
                                </h2>
                                <p>SAVINGS</p>
                            </Col>
                            <Col md={3} sm={6} className='mb-md-0 mb-4'>
                                <h2>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={3272}
                                            duration={2.75}
                                        >
                                        </CountUp>
                                    }+
                                </h2>
                                <p>PHOTOS</p>
                            </Col>
                            <Col md={3} sm={6} className='mb-md-0 mb-4'>
                                <h2>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={1440}
                                            duration={2.75}
                                        >
                                        </CountUp>
                                    }+
                                </h2>
                                <p>ROCKETS</p>
                            </Col>
                            <Col md={3} sm={6} className='mb-md-0 mb-4'>
                                <h2>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={3171}
                                            duration={2.75}
                                        >
                                        </CountUp>
                                    }+
                                </h2>
                                <p>GLOBES</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ScrollTrigger>
        </section>
    )
}

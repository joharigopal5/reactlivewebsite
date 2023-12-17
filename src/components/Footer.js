import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <a href='#' className='footer-link'>Register</a>
                            <a href='#' className='footer-link'>Log In</a>
                            <a href='#' className='footer-link'>Team</a>
                            <a href='#' className='footer-link'>Follow Us</a>

                            <div className='footer-social pt-4 text-center'>
                                <a href='https://www.facebook.com'><i class="fa-brands fa-facebook-f"></i></a>
                                <a href='https://www.facebook.com'><i class="fa-brands fa-twitter"></i></a>
                                <a href='https://www.facebook.com'><i class="fa-brands fa-youtube"></i></a>
                                <a href='https://www.facebook.com'><i class="fa-brands fa-dribbble"></i></a>
                                <a href='https://www.facebook.com'><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href='https://www.facebook.com'><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className='text-center pt-5'>
                            <p className='text-light'>© 2023. Foodies All rights reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

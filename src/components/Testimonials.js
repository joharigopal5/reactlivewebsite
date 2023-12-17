import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// map function
var testimonialsData = [
    {
        id: 1,
        image: require('../assets/images/review/author1.webp'),
        name: 'John Wills - UX Designer',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
    },
    {
        id: 2,
        image: require('../assets/images/review/author2.webp'),
        name: 'Jasmin Perry - Front End',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
    },
    {
        id: 3,
        image: require('../assets/images/review/review-3.webp'),
        name: 'Rocky Jonson - Manager',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
    }
]

export default function Testimonials() {
    return (
        <section id='testimonial' className='testimonials-block'>
            <Container fluid>
                <div className='text-center'>
                    <h2 style={{color: "var(--text-primary)"}}>testimonial</h2>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                   
                                    <blockquote>
                                         <Image src={testimonials.image} className='round' alt='image' />
                                        <p>{testimonials.desription}</p>
                                        <cite>
                                            <h5 className='name'>{testimonials.name}</h5>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}

import React from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/golden-star.png'


const DevicePage = () => {
    const device = {id: 2, name: "iPhone 12 mini 128GB", price: 3500, rating: 4, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"}
    const description = [
        {id: 1, title: 'Dimensions', description: '131.5 x 64.2 x 7.4 mm (5.18 x 2.53 x 0.29 in)'},
        {id: 2, title: 'OS', description: 'iOS 14.1, upgradable to iOS 16.2'},
        {id: 3, title: 'Chipset', description: 'Apple A14 Bionic (5 nm)'},
        {id: 4, title: 'CPU', description: 'Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)'},
        {id: 5, title: 'GPU', description: 'Apple GPU (4-core graphics)'},
    ]
    
    return (
        <Container className='mt-3'>
            <Row >
                <Col md={4} className='d-flex justify-content-center'>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4} className='d-flex justify-content-around'>
                    <Form className='d-flex flex-column align-items-center justify-content-around'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center' 
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 200, height: 200, backgroundSize: 'cover', fontSize: 60, opacity: .8, color: 'white'}}
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4} className='d-flex justify-content-center'>
                    <Card 
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize:32, border: '5px solid #f4f5f7'}}    
                    >
                        <h3>from: {device.price} zł</h3>
                        <Button variant={'outline-dark'}>Add to Bascket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='m-3'>
                <h3>Specifications:</h3>
                {description.map((desc, ind) =>
                    <Row key={desc.id} style={{background: ind%2 ? 'transparent' : '#f4f5f7', padding: 10}}>
                        <strong className='d-inline-block' style={{width: 150}}>{desc.title}: </strong>{desc.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage

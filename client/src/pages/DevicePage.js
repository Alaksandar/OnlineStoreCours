import { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/golden-star.png'
import { useNavigate, useParams } from 'react-router-dom'
import { addToBasket, fetchOneDevice, getUserBasket } from '../http/deviceAPI'
import { BASKET_ROUTE, DEFAULT_IMG } from '../utils/constants'
import { Context } from '..'

const DevicePage = () => {
    const navigate = useNavigate()
    const {deviceStore} = useContext(Context)
    const {id} = useParams()
    const [device, setDevice] = useState({info: []})
    const [isBasketVisible, SetIsBasketVisible] = useState(false)

    useEffect(() => {
        getUserBasket().then(data => data.length > 0 && SetIsBasketVisible(true))
        fetchOneDevice(id).then(data => setDevice(data))
    }, [id])

    const add = () => {
        deviceStore.setBasketDevices(id)
        addToBasket({deviceId: id}).then(data => console.log('Device ' + device.name + ' added to your basket!'))
        SetIsBasketVisible(true)
    }

    const goToBasket = () => {
        navigate(BASKET_ROUTE)
    }
    
    return (
        <Container className='mt-3'>
            <Row >
                <Col md={4} className='d-flex justify-content-center'>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + (device.img || DEFAULT_IMG)} />
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
                        <div className='d-flex flex-column'>
                            <Button
                                onClick={add}
                                variant={'outline-dark'}
                            >
                                Add to Basket
                            </Button>
                            {isBasketVisible &&
                                <Button
                                    onClick={goToBasket}
                                    className='mt-2' 
                                    variant={'outline-dark'}
                                >
                                    My Basket
                                </Button>
                            }
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className='m-3'>
                <h3>Specifications:</h3>
                {device.info.map((info, ind) =>
                    <Row key={info.id} style={{background: ind%2 ? 'transparent' : '#f4f5f7', padding: 10}}>
                        <strong className='d-inline-block' style={{width: 150}}>{info.title}: </strong>{info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage

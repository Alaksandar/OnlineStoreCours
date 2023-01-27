import { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row, Spinner } from 'react-bootstrap'
import bigStar from '../assets/golden-star.png'
import { fetchOneDevice, getUserBasket } from '../http/deviceAPI'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const Basket = observer(() => {
    const {deviceStore} = useContext(Context)
    const [devices, setDevices] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const useFetchingDevaces = async () => {
        let tempDevices = []
        const basketDevices = await getUserBasket()
        await Promise.all(
            basketDevices.map(async(basketDevice) => {
                const device = await fetchOneDevice(basketDevice.deviceId)
                tempDevices.push(device)
            })
        )
        setDevices([...devices, ...tempDevices])
        setIsLoading(false)
    }

    useEffect(() => {
        useFetchingDevaces()

    }, [])
    
    console.log('devices', devices);

    if (isLoading) {
        return <Spinner animation='grow'/>
    }

    if (devices.length === 0) {
        return (
            <div className='d-flex justify-content-center align-items-center' 
                style={{height: 'calc(100vh - 54.5px)', fontSize: 26}}
            >
                <div>Your basket is empty!</div>
            </div>
    )}
    
    return (
        <>
            {devices.map((device, i) => 
                <Container className='mt-3 mb-3' key={i}>
                    <Row className='d-flex justify-content-between mb-3'>
                        <Col md={3}>
                            <Col className='justify-content-center'>
                                <h3>{device.name}</h3>
                                <Image width={100} height={100} src={process.env.REACT_APP_API_URL + device.img} />
                            </Col>
                            <Col className='d-flex justify-content-around'>
                                <Form className='d-flex flex-column align-items-center justify-content-around'>
                                    <div className='d-flex align-items-center justify-content-center' 
                                        style={{background: `url(${bigStar}) no-repeat center center`, width: 70, 
                                            height: 70, backgroundSize: 'cover', fontSize: 16, opacity: .8, color: 'white'}}
                                    >
                                        {device.rating}
                                    </div>
                                </Form>
                            </Col>
                        </Col>
                        <Col md={5}>
                            <h3>Specifications:</h3>
                            {device.info.map((info, ind) =>
                                <Row key={info.id} style={{background: ind%2 ? 'transparent' : '#f4f5f7', padding: 10}}>
                                    <strong className='d-inline-block' style={{width: 150}}>{info.title}: </strong>
                                    {info.description}
                                </Row>
                            )}
                        </Col>
                        <Col md={3} className='d-flex justify-content-center'>
                            <Card 
                                className='d-flex flex-column align-items-center justify-content-around'
                                style={{width: '100%', height: '100%', fontSize:16, border: '5px solid #f4f5f7'}}    
                            >
                                <h3>{device.price} zł</h3>
                                <div className='d-flex flex-column'>
                                    <Button variant={'outline-dark'}>Buy it</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>
            )}
        </>
    )
})

export default Basket

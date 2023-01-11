import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap'
import DeviceRating from './DeviceRating'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = observer(({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card 
                style={{cursor: 'pointer', width: 150}} border={'light'}
                className='p-3 m-1'
            >
                <Image height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div>{device.name}</div>
                <DeviceRating rating={device.rating}/>
                <p>{device.price} zł</p>
                
            </Card>
        </Col>
        
    )
})

export default DeviceItem

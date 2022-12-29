import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = observer(({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card 
                style={{cursor: 'pointer', width: 150}} border={'light'}
                className='p-3 m-1'
            >
                <Image width={150} height={150} src={device.img} />
                <div>{device.name}</div>
                <div>{device.rating}</div>
                <p>{device.price} zł</p>
                
            </Card>
        </Col>
        
    )
})

export default DeviceItem

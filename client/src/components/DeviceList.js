import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row, Card } from 'react-bootstrap'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const {deviceStore} = useContext(Context)
    return (
        <div className='d-flex flex-wrap'>
            {deviceStore.devices.map(device => 
                <DeviceItem key={device.id} device={device}></DeviceItem>
            )}
        </div>
    )
})

export default DeviceList

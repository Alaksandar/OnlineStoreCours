import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/createBrand'
import CreateDevice from '../components/modals/createDevice'
import CreateType from '../components/modals/createType'

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant='outline-dark' className='p-2 mt-4' onClick={() => setTypeVisible(true)}>Add TYPE</Button>
            <Button variant='outline-dark' className='p-2 mt-4' onClick={() => setBrandVisible(true)}>Add BRAND</Button>
            <Button variant='outline-dark' className='p-2 mt-4' onClick={() => setDeviceVisible(true)}>Add DEVICE</Button>
            
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    )
}

export default Admin

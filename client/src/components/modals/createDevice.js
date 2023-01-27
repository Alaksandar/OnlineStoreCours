import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'
import { createDevice } from '../../http/deviceAPI'

const CreateDevice = observer(({show, onHide}) => {
    const {deviceStore} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addInfo = () => setInfo([...info, {title: '', description: '', number: Date.now()}])
    const removeInfo = (number) => setInfo(info.filter(i => i.number !== number))
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', deviceStore.selectedType.id)
        formData.append('brandId', deviceStore.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

// {title: 'Dimensions (HxWxD) [cm]', description: '185.3 x 59.5 x 65.8'}
// {title: 'Annual electricity consumption', description: '295 kWh'}
// {title: 'Number of doors', description: '2'}
// {title: 'Functions', description: 'Fast cooling, Fast freezing, Changing the door opening direction'}

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new DEVICE
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <div className='d-flex align-items-center'>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle>Select Type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {deviceStore.types.map((type) =>
                                    <Dropdown.Item key={type.id} onClick={() => deviceStore.setSelectedType(type)}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        {deviceStore.selectedType && <div>{deviceStore.selectedType.name}</div>}
                    </div>

                    <div className='d-flex align-items-center'>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {deviceStore.brands.map((brand) =>
                                    <Dropdown.Item key={brand.id} onClick={() => deviceStore.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        {deviceStore.selectedBrand && <div>{deviceStore.selectedBrand.name}</div>}
                    </div>

                    <Form.Control                  
                        className='mt-2'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={'Add new DEVICE name..'}
                    />
                    <Form.Control
                        className='mt-2'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        placeholder={'Add new DEVICE price..'}
                        type='number'
                    />
                    <Form.Control
                        className='mt-2'
                        onChange={selectFile}
                        type='file'
                    />
                    <hr/>
                    
                    <Button className='mb-1' variant='outline-dark' onClick={addInfo}>Add new property</Button>
                    
                    {info.map(i =>
                        <Row className='mt-2 mb-2 pe-3' key={i.number}>
                            <Col md={3} className='p-1'>
                                <Form.Control
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Add name of property..'/>
                            </Col>
                            <Col md={7} className='p-1'>
                                <Form.Control
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                    placeholder='Add description of property..'/>
                            </Col>
                            <Col md={1} className='p-1'>
                                <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice

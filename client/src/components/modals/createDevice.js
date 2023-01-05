import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [activeType, setActiveType] = useState('')
    const [activeBrand, setActiveBrand] = useState('')
    const [info, setInfo] = useState([])

    const addInfo = () => setInfo([...info, {title: '', description: '', number: Date.now()}])
    const removeInfo = (number) => setInfo(info.filter(i => i.number !== number))

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
                                {device.types.map((type) =>
                                    <Dropdown.Item key={type.id} onClick={() => setActiveType(type.name)}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        {activeType && <div>{activeType}</div>}
                    </div>

                    <div className='d-flex align-items-center'>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map((brand) =>
                                    <Dropdown.Item key={brand.id} onClick={() => setActiveBrand(brand.name)}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        {activeBrand && <div>{activeBrand}</div>}
                    </div>

                    <Form.Control                  
                        className='mt-2'
                        placeholder={'Add new DEVICE name..'}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder={'Add new DEVICE price..'}
                        type='number'
                    />
                    <Form.Control
                        className='mt-2'
                        type='file'
                    />
                    <hr/>
                    
                    <Button className='mb-1' variant='outline-dark' onClick={addInfo}>Add new property</Button>
                    
                    {info.map(i =>
                        <Row className='mt-2 mb-2 pe-3' key={i.number}>
                            <Col md={3} className='p-1'>
                                <Form.Control placeholder='Add name of property..'/>
                            </Col>
                            <Col md={7} className='p-1'>
                                <Form.Control placeholder='Add description of property..'/>
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
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice

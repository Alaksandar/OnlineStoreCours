import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar'
import { Context } from '..';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, device.page, device.limit).then(data => {
            device.setDevices(data.rows) 
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType?.id, device.selectedBrand?.id, device.page, device.limit)
            .then(data => {
                device.setDevices(data.rows) 
                device.setTotalCount(data.count)
        })
    }, [device.selectedType?.id, device.selectedBrand?.id, device.page])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar />
                    {device.totalCount ? <DeviceList /> : 'No devices'}
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop

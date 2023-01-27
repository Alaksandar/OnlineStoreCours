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
    const {deviceStore} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => deviceStore.setTypes(data))
        fetchBrands().then(data => deviceStore.setBrands(data))
        fetchDevices(null, null, deviceStore.page, deviceStore.limit).then(data => {
            deviceStore.setDevices(data.rows) 
            deviceStore.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(deviceStore.selectedType?.id, deviceStore.selectedBrand?.id, deviceStore.page, deviceStore.limit)
            .then(data => {
                deviceStore.setDevices(data.rows) 
                deviceStore.setTotalCount(data.count)
        })
    }, [deviceStore.selectedType?.id, deviceStore.selectedBrand?.id, deviceStore.page])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar />
                    {deviceStore.totalCount ? <DeviceList /> : 'No devices'}
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop

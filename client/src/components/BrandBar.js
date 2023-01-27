import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
    const {deviceStore} = useContext(Context)
    const toggle = brand => {
        const selected = brand.id !== deviceStore.selectedBrand?.id ? brand : null
        deviceStore.setSelectedBrand(selected)
    }

    return (
        <div className='d-flex flex-wrap'>
            {deviceStore.brands.map(brand => 
                <Card 
                    key={brand.id}
                    style={{cursor: 'pointer'}}
                    className='p-3 ms-1'
                    border={brand.id === deviceStore.selectedBrand?.id ? 'primary' : 'light'}
                    onClick={() => toggle(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    )
})

export default BrandBar

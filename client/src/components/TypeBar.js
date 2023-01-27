import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

const TypeBar = observer(() => {
    const {deviceStore} = useContext(Context)
    const toggle = type => {
        const selected = type.id !== deviceStore.selectedType?.id ? type : null
        deviceStore.setSelectedType(selected)
    }

    return (
        <ListGroup>
            {deviceStore.types.map(type => 
                <ListGroup.Item 
                    key={type.id}
                    style={{cursor: 'pointer'}}
                    active={type.id === deviceStore.selectedType?.id}
                    onClick={() => toggle(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar

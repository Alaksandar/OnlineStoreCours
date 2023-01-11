import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    const toggle = type => {
        const selected = type.id !== device.selectedType?.id ? type : null
        device.setSelectedType(selected)
    }

    return (
        <ListGroup>
            {device.types.map(type => 
                <ListGroup.Item 
                    key={type.id}
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType?.id}
                    onClick={() => toggle(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar

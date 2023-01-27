import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

const Pages = observer(() => {
    const {deviceStore} = useContext(Context)
    if(!deviceStore.totalCount) {
        return
    } 
    const pagesCount = Math.ceil(deviceStore.totalCount / deviceStore.limit)
    const pages = []
    while(pages.length < pagesCount) {
        pages.push(pages.length + 1)
    }
    
    return (
        <Pagination className='mt-3'>
            {pages.map(page => 
                <Pagination.Item 
                    key={page}
                    active={deviceStore.page === page}
                    onClick={() => deviceStore.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages

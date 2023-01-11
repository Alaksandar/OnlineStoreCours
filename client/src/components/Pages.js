import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

const Pages = observer(() => {
    const {device} = useContext(Context)
    if(!device.totalCount) {
        return
    } 
    const pagesCount = Math.ceil(device.totalCount / device.limit)
    const pages = []
    while(pages.length < pagesCount) {
        pages.push(pages.length + 1)
    }
    console.log(device.totalCount);
    
    return (
        <Pagination className='mt-3'>
            {pages.map(page => 
                <Pagination.Item 
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages

import React from 'react'
import { Image } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import star from '../assets/star.png'
import goldenStar from '../assets/golden-star.png'
import { MAX_RATING } from '../utils/constants'

const DeviceRating = observer(({rating}) => {

    // const starArr = []
    // for (let i = 1; i <= rating; i++) {
    //     starArr.push("goldenStar")
    // }
    // for (let i = MAX_RATING; i > rating; i--) {
    //     starArr.push('')
    // }

    const emptyStarArr = new Array(MAX_RATING - rating).fill('')
    const ratingArr = new Array(rating).fill(1)
    ratingArr.push(...emptyStarArr)

    return (
        <div className='d-flex align-items-center mt-2'>
            {/* <div>{rating}</div> */}
            {rating ? 
                ratingArr.map((el, ind) =>
                    <Image key={ind} width={10} height={10} src={el ? goldenStar : star} />
                )
                : ""
            }
        </div>
    )
})

export default DeviceRating

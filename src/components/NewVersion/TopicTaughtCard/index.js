import React from 'react'
import "./index.scss"

const TopicTaughtCard = ({
    src = "",
    title ,
    number
}) => {
  return (
    <div className="TopicTaughtCard d-flex">
        <div className="p-2 ">
            <img src={src} alt={title} />
        </div>
        <div className="d-flex flex-column justify-content-center align-item-center">
            <p className="fs-14 fw-700 lh-md text-white my-2 mx-2">{title}</p>
            <p className="fs-12 fw-400 text-gray-white my-2 mx-2">{number}</p>
        </div>
    </div>
  )
}

export default TopicTaughtCard
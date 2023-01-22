import React from 'react'

import './index.scss'
import { Link } from 'react-router-dom'

const NewTopicCard = ({
    img = "",
    name = "",
    lessons = "",
    teacher = "",
    id="",
    className=""
}) => {
  return (
    <Link to={id} className={`NewTopicCard mat-background position-relative p-1 ${className} `}>
        <div className="d-flex justify-content-center w-100" >
            <img className="NewTopicCard-image" src={img} alt={id} />
        </div>
        <div className="NewTopicCard-teacher" >
            <img src={teacher} alt={id} />
        </div>
        <div className="my-4 px-1 py-2">
            <p className='fs-14 fw-700 text-white my-2 mx-2'>{name}</p>
            <p className='fs-10 fw-400 text-gray-white my-2 mx-2'>{lessons}</p>
        </div>
    </Link>
  )
}

export default NewTopicCard
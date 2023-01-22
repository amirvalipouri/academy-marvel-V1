import React from 'react'

import { Link } from 'react-router-dom'

import './index.scss'

const PopularClassCard = ({ src = "", title = "" , _id = "" }) => {
    return (
        <Link to={_id} className="PopularClassCard  position-relative d-block w-100 rounded shadow-sm overflow-hidden">
                <img className="w-100 h-100 object-fit-cover rounded-inherit" src={src} alt={title} />
                <div className="popular-title w-100">
                    <p className="fs-12 fw-500 text-right text-white m-2">{title}</p>
                </div>
        </Link>
    )
}

export default PopularClassCard
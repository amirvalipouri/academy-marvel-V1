import React from 'react'

import { Card } from 'react-bootstrap'

import './index.scss'

const CardFreeTutorial = ({ name = "", job = "", content = "" , src= "" }) => {
    return (
        <div className="CardFreeTutorial p-2 bg-white">
            <div className="d-flex align-items-center mt-4">
                <img alt='teacher' src={src} className="rounded-circle " width="59" height="59" />
                <div className="mx-3">
                    <p className="text-black fs-14 fw-700">{name}</p>
                    <p className="text-black fs-10 fw-500">{job}</p>
                </div>
            </div>
            <p className="fs-14 fw-400 text-black my-2">{content}</p>
        </div>
    )
}

export default CardFreeTutorial
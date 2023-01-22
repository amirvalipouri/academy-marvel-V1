import React , {useState} from 'react'

import './index.scss'

const Accordion = ({
    label = "",
    text = ""
}) => {
    const [ show , setShow ] = useState(false)
    
  return (
    <div className={` Accordion ${show ? "Accordion-open" :  "Accordion-close"} w-100`}>
        <button onClick={()=>setShow(p => p=!p)} className="Accordion-btn d-flex justify-content-between align-items-center p-1">
            <span className="text-white fs-14 fw-700 ">{label}</span> 
            <span className="rounded-circle  text-white">
                <svg width="8" height="8" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97324 0.193363C7.08639 0.0694889 7.23919 0 7.39843 0C7.55766 0 7.71046 0.0694889 7.82361 0.193363C7.87948 0.254191 7.92384 0.326698 7.95412 0.406662C7.98441 0.486627 8 0.572452 8 0.659143C8 0.745834 7.98441 0.831659 7.95412 0.911623C7.92384 0.991588 7.87948 1.06409 7.82361 1.12492L4.42562 4.80694C4.31221 4.93064 4.15931 5 4 5C3.84069 5 3.68779 4.93064 3.57438 4.80694L0.176388 1.12492C0.120524 1.06409 0.076159 0.991588 0.0458768 0.911623C0.0155947 0.831659 0 0.745834 0 0.659143C0 0.572452 0.0155947 0.486627 0.0458768 0.406662C0.076159 0.326698 0.120524 0.254191 0.176388 0.193363C0.28954 0.0694889 0.442339 0 0.601573 0C0.760806 0 0.913605 0.0694889 1.02676 0.193363L4.0013 3.213L6.97324 0.193363Z" fill="white"/>
                </svg>
            </span>
        </button>
        <div className={`${show ? "d-block" :  "d-none"} w-100`}>
            <p className="fw-400 fs-12 text-white">{text}</p>
        </div>

    </div>
  )
}

export default Accordion
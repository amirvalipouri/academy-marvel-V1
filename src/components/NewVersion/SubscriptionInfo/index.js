import {useState} from 'react'
import { Container } from 'react-bootstrap'
import './index.scss'
import { Button } from 'react-bootstrap'
import Checked from '../../../assets/images/FreeTutorial/checked.png'

const SubscriptionInfo = (
    {
        title,
        price,
        des = [],
    }
) => {
    const [ checked , setChecked ] = useState(false)
    return (
        <Container className={checked ? "SubscriptionInfo bg-primary text-white d-flex flex-column justify-content-start align-items-center m-1 py-2" : "SubscriptionInfo bg-white text-primary shadow d-flex flex-column justify-content-start align-items-center m-1 py-2"}>
            <div className="d-flex align-items-center justify-content-center py-2">
                <div className='Subscription-img shadow'></div>
                <div className="d-flex flex-column justify-content-center align-items-start mx-2">
                    <p className={checked ? 'fs-15 fw-400 text-white my-1' : 'fs-15 fw-400 text-black my-1'}>{title}</p>
                    <p className={checked ? 'fs-18 fw-400 text-white my-1' : 'fs-18 fw-400 text-black my-1'}>{price} تومان</p>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 " >
                {[des.map((item, index) =>
                    <div style={{width : ""}} className="d-flex align-items-center justify-content-between my-1 w-100 px-4">
                        <img className="mx-1" src={Checked} />
                        <p key={index} className={checked ? "text-white fs-12 fw-400 text-center" : "text-black fs-12 fw-400 text-center"}>
                            {item}
                        </p>

                    </div>
                )]}
            </div>
            <Button onClick={()=>setChecked(p=>!p)} variant={checked ? "white" : "primary"}  className={checked ? "text-primary" : "text-white"}  >انتخاب</Button>
        </Container>
    )
}

export default SubscriptionInfo
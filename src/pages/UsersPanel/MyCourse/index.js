import {useState} from 'react'
import { Container } from 'react-bootstrap'
import './index.scss'
import { AllCourse , CurrentCourses , FinishedCourse } from './components'

const MyCourse = () => {
    const [ active , setActive ] = useState("all")
    const pages = [
        {
            id : 0,
            label : "همه دوره‌ها",
            state : "all"
        },
        {
            id : 1,
            label : "دوره‌های در حال انجام",
            state : "current"
        },
        {
            id : 2,
            label : "دوره‌های تمام شده",
            state : "finished"
        },
    ]

    return (
        <Container>
            <div className="  sort-items-section col-12 d-flex align-items-center col-gap-5 overflow-auto p-3">
                {pages.map((item) => (
                    <button
                        key={item.id}
                        onClick={() =>
                            setActive(p => p = item.state)
                        }
                        className={`position-relative white-space-nowrap px-1 py-2 border-0 transition ${active === item.state ? "active text-info" : "text-secondary"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div>
                {active == "all" && <AllCourse/>}
                {active == "finished" && <FinishedCourse/>}
                {active == "current" && <CurrentCourses/>}
            </div>
        </Container>
    )
}

export default MyCourse
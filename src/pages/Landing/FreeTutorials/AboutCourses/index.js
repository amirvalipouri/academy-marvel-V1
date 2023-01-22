import {useState} from 'react'

import { Container, Tabs, Tab } from 'react-bootstrap'
import AboutCourse from './AboutCourse'
import AboutTeacher from './AboutTeacher'
import Question from './Question'
import Topics from './Topics'

import './index.scss'


const AboutCourses = () => {
    const [ active , setActive ] = useState("aboutCourse")

    const buttonInfo = [
        {
            id : 0,
            label : "درباره دوره",
            state : "aboutCourse"
        },
        {
            id : 1,
            label : "مباحث",
            state : "topics"
        },
        {
            id : 2,
            label : "درباره مدرس",
            state : "aboutTeacher"
        },
        {
            id : 3,
            label : "سوالات متداول",
            state : "question"
        },
    ]
    return (
        <Container className="AboutCourses">
           <div className="  sort-items-section col-12 d-flex align-items-center col-gap-5 overflow-auto p-3">
           {buttonInfo.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setActive( p => p=item.state)
              }
              className={`position-relative white-space-nowrap px-1 py-2 border-0 transition ${
                active === item.state ? "active text-info" : "text-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
           </div>
           <div className="w-100">
              {active == "aboutCourse" && <AboutCourse/>}
              {active == "topics" && <Topics/>}
              {active == "aboutTeacher" && <AboutTeacher/>}
              {active == "question" && <Question/>}
           </div>
        </Container>
    )
}

export default AboutCourses
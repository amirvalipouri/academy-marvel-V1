import React from 'react'

import MyCourseCard from '../../../../components/NewVersion/MyCourseCard'

const AllCourse = () => {
  const fakeData = [
    {
      id : 0,
      name : "علی رضایی زاده",
      rate : 65,
      title : "آموزش زبان java",
      courses : "۳۴۵ درس آنلاین",
      img : "https://picsum.photos/id/237/200/300",
      teacherImg : "https://picsum.photos/id/237/200/300",
      level : "current"
    },
    {
      id : 0,
      name : "علی رضایی زاده",
      rate : 100,
      title : "آموزش زبان java",
      courses : "۳۴۵ درس آنلاین",
      img : "https://picsum.photos/id/237/200/300",
      teacherImg : "https://picsum.photos/id/237/200/300",
      level : "finished"
    },
  ]
  return (
    <div className="w-100">
      {fakeData.map((item , index)=>
        <MyCourseCard key={index} item={item} />
      )}
    </div>
  )
}

export default AllCourse
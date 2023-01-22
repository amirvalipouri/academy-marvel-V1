import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { SearchBox } from '../../../../components/NewVersion'
import BestLeaderCard from '../../../../components/NewVersion/BestLeader'
import Table from '../../../../components/Table'
import { Link } from 'react-router-dom'

const BestLeader = () => {

  const bestFake = [
    {
    id: 1,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 1
  },
  {
    id: 2,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 2
  },
  {
    id: 3,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 3
  },
  
]
const fakeTable = [
  {
    id: 4,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 1
  },
  {
    id: 5,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 2
  },
  {
    id: 6,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 3
  },
  {
    id: 7,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 1
  },
  {
    id: 8,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 2
  },
  {
    id: 9,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 3
  },
  {
    id: 10,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 1
  },
  {
    id: 11,
    name : "امیر ولی پوری",
    src : "https://picsum.photos/id/235/200/300",
    score : 20,
    term : 1300,
    number : 2
  },
]
  return (
    <Container className="Land-BestLeader my-4 ">

        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center align-items-lg-start" xs={12} sm={12} md={12} lg={3} xl={3} >
            <p className="fw-700 fs-18 text-white lh-md mb-2 ">برترین های لیدربرد</p>
            {bestFake.map((item)=>
              <BestLeaderCard {...item} />
            )}
          </Col>
          <Col className="" xs={12} sm={12} md={12} lg={9} xl={9} >
            
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className=" d-flex justify-content-center justify-content-lg-end">
                  <div>
                    <SearchBox className="rounded-10px border border-gray-white" placeholder='جستجو کنید ...' color='text-white'  />
                  </div>
                </Col>
                <div className="land-Table px-4 py-2 rounded-10px shadow my-4 w-100 overflow-auto ">
                  <Table className="w-100  p-2">
                    <tr>
                      <th>رتبه</th>
                      <th>نام و نام خانوادگی</th>
                      <th>تعداد دوره ها</th>
                      <th>تعداد درس ها</th>
                      <th>ترم فعلی</th>
                      <th>معدل کل</th>
                    </tr>
                    {fakeTable.map((item) =>
                      <tr>
                        <td>{item.id}.</td>
                        <td className=""> <span><img className="" src={item.src} alt={item.name} /></span> <span>{item.name}</span></td>
                        <td>{item.score}</td>
                        <td>{item.score}</td>
                        <td>{item.term}</td>
                        <td>{item.score}</td>
                      </tr>
                    )}
                  </Table>
                  <div className="w-100 d-flex justify-content-center justify-content-lg-end">
                    <Link to="/" className="text-primary">مشاهده همه</Link>
                  </div>
                </div>
            
          </Col>
        </Row>
    </Container>
  )
}

export default BestLeader
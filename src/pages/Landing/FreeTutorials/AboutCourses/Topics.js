import {useState , useEffect} from 'react'

import { useNavigate, useParams } from "react-router";

import { Row , Col } from 'react-bootstrap'

import { Pagination , Table , BlogCard } from '../../../../components'
import { indexTitles } from "../../../../constants";
import { convertTime } from "../../../../methods";
import { useObserved } from "../../../../hooks";

import {axios} from '../../../../boot'

const Topics = () => {
    const { observed } = useObserved();
    const navigate = useNavigate();
    const urlParams = useParams();
    const [tutorials, setTutorials] = useState([]);
    const [pages, setPages] = useState({});
    const [params, setParam] = useState({
        // sort: "createdAt:-1",
        // perPage: 6,
        // page: 1,
        category: urlParams.categoryId,
      });
    const getTutorials = () => {
        const url = "/pub/videos";
        axios.get(url, { params }).then(({ data }) => {
          
          setTutorials(data.data);
          setPages(data.pages);
        });
      };
      useEffect(getTutorials, [params]);
  return (
    
    <div>
        {/* <Row className="my-4">
      {tutorials.map((video) => (
          <Col key={video._id} xs="12" md="6" lg="4" xl="3">
            <BlogCard
              _id={video._id}
              img={source(video.thumbnail)}
              title={video.title}
              description={video.description}
            />
          </Col>
        ))} */}
      <Table className="col-12">
        <thead>
          <tr>
            <td>شماره جلسه</td>
            <td>نام جلسه</td>
            <td />
            <td>مدت جلسه</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((item, i) => (
            <tr
              key={item._id}
              onClick={() => navigate(item._id, { state: { tutorials } })}
            >
              <td>
                <div className="w-fit d-flex flex-center col-gap-2">
                  <span className="px-2 py-1 rounded bg-primary">
                    <i className="text-white fs-5 bi bi-file-earmark-play-fill" />
                  </span>
                  جلسه {indexTitles[i + 1]}
                </div>
              </td>
              <td>{item.title}</td>
              <td>
                {observed.includes(item._id) && (
                  <span className="text-secondary">مشاهده شده</span>
                )}
              </td>
              <td>
                <div className="w-fit d-flex flex-center col-gap-2">
                  <i className="bi bi-alarm-fill fs-5 text-primary" />
                  {convertTime(item.time)}
                </div>
              </td>
              <td>
                <span className={`text-success`}>{item.views} بازدید</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* </Row> */}
      <Pagination
        totalPages={pages.totalPages}
        activePage={params.page}
        setActivePage={(page) => setParam((p) => ({ ...p, page }))}
      />
    </div>
  )
}

export default Topics
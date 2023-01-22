import { useEffect, useState } from "react";
import { Col, Container, Row, ProgressBar, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import { BackBtn, Input, Video } from "../../../components";
import { axios } from "../../../boot";
import { source } from "../../../methods";
import { useObserved } from "../../../hooks";
import Chat from '../../../assets/images/FreeTutorial/chat.png'
import Book from '../../../assets/images/FreeTutorial/topicBook.png'
import Notee from '../../../assets/images/FreeTutorial/note.png'
import Conversation from "./Conversation";
import Note from "./Note";
import './FreeTutorialsVideo.scss'
export default function FreeTutorial() {
  const { setNewId } = useObserved();
  const location = useLocation();
  const params = useParams();
  const [ activePage , setActivePage ] = useState("note")
  const [activeId, setActiveId] = useState(params.id);
  const tutorials = location.state?.tutorials ?? [];
  const showPagination = Boolean(tutorials.length);
  const activeIndex = tutorials.findIndex((e) => e._id === activeId);
  const nextId = tutorials[activeIndex + 1]?._id;
  const prevId = tutorials[activeIndex - 1]?._id;
  const [data, setData] = useState({});
  const getActiveTutorial = () => {
    const url = `/pub/videos/${activeId}`;
    axios.get(url).then(({ data }) => {
      setNewId(activeId);
      setData(data);
    });
  };
  useEffect(getActiveTutorial, [activeId]);
  return (
    <Container className="FreeTutorialsVideo my-2">
      <BackBtn />
      <Row className="d-flex flex-column-reverse flex-lg-row align-items-start">

        <Col className="d-flex justify-content-center align-items-center" xs="12" md="10" lg="3">
          <div style={{ height: "500px" }} className="bg-white shadow rounded-10px p-4 w-100">
            <p className="fs-16 fw-700 text-black">سر فصل های دوره</p>

            <div className="my-2">

              <div className="d-flex align-items-center">
                <div style={{ width: "22px", height: "22px" }} className="rounded-circle border border-primary d-flex justify-content-center align-items-center ">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.77552 5.22416C5.38698 6.72926 3.06569 8.18952 0.606716 9.73624C0.606716 8.68908 0.606716 7.80203 0.606716 6.91179C0.606716 5.05444 0.609919 3.20029 0.603516 1.34294C0.603516 0.936243 0.609915 0.718486 1.10939 1.03872C3.28341 2.43173 5.47984 3.78632 7.77552 5.22416Z" fill="#2E51DB" />
                  </svg>
                </div>
                <div className="mx-2">
                  <p className="fs-12 fw-400 text-black">جلسه اول</p>
                  <p className="fs-10 fw-400">2 ساعت</p>
                </div>
              </div>
              <div className="w-100 d-flex align-items-center my-1">
                <ProgressBar className="w-75 rounded-10" variant="success" now={100} />
                <span className="text-success mx-2">100%</span>
              </div>

            </div>

            <div className="my-2">

              <div className="d-flex align-items-center">
                <div style={{ width: "22px", height: "22px" }} className="rounded-circle border  d-flex justify-content-center align-items-center ">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.692 4.98047C13.692 6.28206 13.6632 7.58365 13.7048 8.88525C13.724 9.4559 13.6056 9.67069 12.978 9.64184C11.7323 9.58734 10.4835 9.61619 9.23473 9.62901C8.45022 9.63543 7.72015 9.74122 7.28147 10.5587C7.11496 10.8729 6.82357 10.828 6.62825 10.4754C6.28242 9.84381 5.69004 9.65146 5.02401 9.64504C3.64392 9.62901 2.26382 9.61619 0.883733 9.63543C0.451453 9.64184 0.288148 9.54566 0.294552 9.0744C0.316966 6.31412 0.304158 3.55064 0.310562 0.790361C0.310562 0.559537 0.179278 0.219712 0.633972 0.226124C2.11973 0.245359 3.60229 0.251771 5.08805 0.287036C5.77009 0.303065 6.29523 0.668537 6.69229 1.1943C6.91643 1.49245 7.06693 1.49886 7.28787 1.21354C7.87065 0.456948 8.67757 0.216506 9.59657 0.222918C10.7653 0.232535 11.9341 0.254976 13.0996 0.2133C13.6152 0.194064 13.7144 0.373595 13.7048 0.844862C13.6728 2.21698 13.692 3.59873 13.692 4.98047ZM6.52258 9.16416C6.52258 7.0675 6.52578 4.9997 6.52258 2.9319C6.51938 1.80984 5.95261 1.20713 4.84149 1.18148C3.83284 1.15904 2.82419 1.20072 1.81553 1.16545C1.34163 1.14942 1.25197 1.32895 1.25517 1.75854C1.27439 3.56346 1.26478 5.36838 1.26478 7.1733C1.26478 8.82754 1.26478 8.79548 2.89143 8.84036C4.089 8.86601 5.3218 8.5903 6.52258 9.16416ZM7.47679 9.26034C8.03396 8.80189 8.59112 8.82113 9.14507 8.82434C10.1793 8.82754 11.2136 8.81151 12.2479 8.83395C12.6257 8.84357 12.7474 8.72816 12.7442 8.34345C12.7282 6.11535 12.7282 3.88726 12.7442 1.66236C12.7474 1.28086 12.6289 1.16225 12.2511 1.16866C11.1912 1.1911 10.1313 1.15904 9.07143 1.18469C8.21327 1.20392 7.51522 1.7906 7.49601 2.62734C7.44477 4.7785 7.47679 6.93286 7.47679 9.26034Z" fill="#C5C5C5" />
                  </svg>

                </div>
                <div className="mx-2">
                  <p className="fs-12 fw-400 text-black">لور ایپبانیس</p>
                  <p className="fs-10 fw-400">2 ساعت</p>
                </div>
              </div>
              <div className="w-100 d-flex align-items-center my-1">
                <ProgressBar className="w-75 rounded-10" variant="warning" now={75} />
                <span className="text-warning mx-2">75%</span>
              </div>

            </div>

            <div className="my-2">

              <div className="d-flex align-items-center">
                <div style={{ width: "22px", height: "22px" }} className="border rounded-circle d-flex justify-content-center align-items-center ">
                  <img src={Note} alt="note" />

                </div>
                <div className="mx-2">
                  <p className="fs-12 fw-400 text-black">لور ایپبانیس</p>
                  <p className="fs-10 fw-400">2 ساعت</p>
                </div>
              </div>
              <div className="w-100 d-flex align-items-center my-1">
                <ProgressBar className="w-75 rounded-10" variant="success" now={84} />
                <span className="text-success mx-2">84%</span>
              </div>

            </div>



            <div className="my-2">

              <div className="d-flex align-items-center">
                <div style={{ width: "22px", height: "22px" }} className="  d-flex justify-content-center align-items-center ">
                  <img src={Notee} alt="note" />

                </div>
                <div className="mx-2">
                  <p className="fs-12 fw-400 text-black">لور ایپبانیس</p>
                  <p className="fs-10 fw-400">2 ساعت</p>
                </div>
              </div>
              <div className="w-100 d-flex align-items-center my-1">
                <ProgressBar className="w-75 rounded-10" variant="success" now={60} />
                <span className="text-success mx-2">60%</span>
              </div>

            </div>

          </div>
        </Col>
        <Col xs="12" md="10" lg="9" className="d-flex flex-column gap-3 flex-center">
          <div className="d-flex justify-content-between align-items-center w-100">
            <h1 className="h4">{data.title}</h1>
            <div className="d-flex justify-content-between align-items-center">
              {showPagination && (
                <button
                  disabled={!nextId}
                  onClick={() => setActiveId(nextId)}
                  className="text-primary fw-500 fs-5 white-space-nowrap mx-4"
                >
                  <i className="bi bi-chevron-right" />
                  بعدی
                </button>
              )}

              {showPagination && (
                <button
                  disabled={!prevId}
                  onClick={() => setActiveId(prevId)}
                  className="text-primary fw-500 fs-5 white-space-nowrap"
                >
                  قبلی
                  <i className="bi bi-chevron-left" />
                </button>
              )}
            </div>
          </div>
          <div className="flex-1 rounded-10px w-100">
            <Video
              width="100%"
              thumbnail={source(data.thumbnail)}
              sources={[
                {
                  src: source(data.path),
                  size: 720,
                },
              ]}
            />
          </div>

          

          <div className="w-100 d-flex justify-content-end align-items-center">
            <Button onClick={()=>setActivePage("note")} className="bg-transparent border border-primary text-primary m-1">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.625 2.625H4.375C4.02982 2.625 3.75 2.91881 3.75 3.28125V17.7188C3.75 18.0812 4.02982 18.375 4.375 18.375H15.625C15.9702 18.375 16.25 18.0812 16.25 17.7188V3.28125C16.25 2.91881 15.9702 2.625 15.625 2.625Z" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.5625 7.21875C7.08027 7.21875 7.5 6.77803 7.5 6.23438C7.5 5.69072 7.08027 5.25 6.5625 5.25C6.04473 5.25 5.625 5.69072 5.625 6.23438C5.625 6.77803 6.04473 7.21875 6.5625 7.21875Z" fill="#2E51DB" />
                <path d="M6.5625 15.75C7.08027 15.75 7.5 15.3093 7.5 14.7656C7.5 14.222 7.08027 13.7812 6.5625 13.7812C6.04473 13.7812 5.625 14.222 5.625 14.7656C5.625 15.3093 6.04473 15.75 6.5625 15.75Z" fill="#2E51DB" />
                <path d="M6.5625 11.4844C7.08027 11.4844 7.5 11.0437 7.5 10.5C7.5 9.95634 7.08027 9.51562 6.5625 9.51562C6.04473 9.51562 5.625 9.95634 5.625 10.5C5.625 11.0437 6.04473 11.4844 6.5625 11.4844Z" fill="#2E51DB" />
              </svg>

              افزودن به یادداشت</Button>
            <Button onClick={()=>setActivePage("conversation")} className="bg-transparent border border-primary text-primary m-1"><img src={Chat} alt="chat icons" />تالار گفتگو</Button>
          </div>

          {activePage == "note" && <Note />}
          {activePage == "conversation" && <Conversation />}

          <p>{data.description}</p>

        </Col>

      </Row>
    </Container>
  );
}

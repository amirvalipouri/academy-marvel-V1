import { Container } from "react-bootstrap";
// import mainSectionImg from "../../../assets/images/Home/woman.png";
import scrollIcon from "../../../assets/icons/Home/scroll.svg";
import { BgImage } from "../../../components";
import { Button } from '../../../components'

export default function MainSection() {
  return (
    <div className="main-section position-relative d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="text-white fs-28 fw-700 text-center my-2">با مارول بی وقفه مهارت جدید یاد بگیر</p>
        <p className="text-white fs-16 fw-500 text-center my-2 lh-md">آموزش نامحدود با هزاران ویدئو آموزشی در زمینه های مختلف تنها با یک اشتراک</p>

        <Button className="my-4" size="lg" label="خرید اشتراک و شروع یادگیری" />

        <span className="my-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 14.875L14 25.375L24.5 14.875H19.25V11.375H8.75V14.875H3.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.25 4.375H8.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.25 7.875H8.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </span>
      </div>
    </div>
  );
}

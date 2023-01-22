import { Col, Container, Row } from "react-bootstrap";
// import telephoneIcon from "../../assets/icons/telephone-light.svg";
// import locationIcon from "../../assets/icons/location-light.svg";
// import envelopeIcon from "../../assets/icons/envelope-light.svg";
import { BgImage } from "../../components";
import { socialNetworks } from "../../constants";
import Etemad from '../../assets/images/Home/etemad.png'
import Neshane from '../../assets/images/Home/neshane.png'
export default function Footer() {
  return (
    <footer className="position-relative bg-dark py-4 d-flex justify-content-center align-items-center">
            <Row className="w-100">
              <Col xs={12} md={5} lg={2} className="d-flex flex-column align-items-center">
                <span>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
                  </svg>
                </span>
                <p className="fw-400 fs-12 my-2 text-white">654 123 55 98+</p>
                <p className="fw-400 fs-12 my-1 text-white">987 654 32 98+</p>
              </Col>
              <span className="footer-divider d-none d-lg-block"></span>

              <Col xs={12} md={5} lg={3} className="d-flex flex-column align-items-center justify-content-center">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z" stroke="white" stroke-width="1.5" />
                    <path d="M9.25 11.5L10.75 13L14.75 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <p className="fw-400 fs-12 my-2 text-white">تهران ، خیابان جمهوری ،خیابان 543 فروردین</p>
                <p className="fw-400 fs-12 my-2 text-white">نبش تقاطع خیابان آذربایجان ، پلاک 110</p>
              </Col>

              <span className="footer-divider d-none d-lg-block"></span>

              <Col xs={12} md={5} lg={2} className="d-flex flex-column align-items-center justify-content-center">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 16.5H8" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 12.5H5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <p className="fw-400 fs-12 my-2 text-white">google@gmail.com</p>
                <p className="fw-400 fs-12 my-2 text-white">sample@gmail.com</p>
              </Col>
              <Col  xs={12} md={5} lg={3} className="d-flex justify-content-center justify-content-lg-end align-items-center">
                <div className="bg-white land-footer-img mx-1">
                  <img src={Etemad} />
                </div>
                <div className="bg-white land-footer-img mx-1">
                  <img src={Neshane} />
                </div>
              </Col>
            </Row>
    </footer>
  );
}

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormControl, InputGroup, Row } from "react-bootstrap";
import { Button , Modal } from '../../components'
import { navItems, rolesPath } from "../../constants";
import logoText from "../../assets/logos/logo text2.png";
import logo from "../../assets/logos/logo.svg";
import Menu from "./Menu";
import Newlogin from "../../pages/LoginLayout/NewLogin";
import { useShowFullName } from "../../hooks";
export default function Header() {
  const showFullName = useShowFullName();
  const [show, setShow] = useState(false);
  const [ showModal , setShowModal ] = useState(false)
  const role = useSelector((s) => s.role);
  const signInPath = rolesPath[role] ?? "/sign-in";
  return (
    <React.Fragment>
      <header className="container position-relative w-100 d-flex align-items-center justify-content-between bg-dark p-3 col-gap-3">
        <button
          onClick={() => setShow(true)}
          className="bi bi-list fs-1 d-flex fle-center d-lg-none text-white"
        />
        <img width="35" src={logo} alt="logo" className="d-block d-lg-none" />
        {/* <Link
          to="/cart"
          className="bi bi-cart3 fs-2 text-white d-none d-lg-none"
        /> */}
        <img
          width="65"
          src={logoText}
          alt="logo"
          className="d-none d-lg-block"
        />
        <nav className="flex-1 d-none d-lg-block">
          <ul className="d-flex align-items-center col-gap-3">
            {navItems.landing.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-${isActive ? "white" : "gray-white"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* <li key="search">
              <InputGroup>
                <FormControl className="bg-dark border-0 text-gray-white" placeholder="جست و جو" />
                <InputGroup.Text className="bg-dark border-0">
                  <i className="bi bi-search text-gray-white" />
                </InputGroup.Text>
              </InputGroup>
            </li> */}



          </ul>
        </nav>

        <div className="user-control  d-flex d-lg-none flex-center">
          
          
          {
            signInPath == "/sign-in" ?
            <button onClick={()=>setShowModal(true)} className="btn bg-transparent text-white  fs-10 py-2 fw-500">
              ورود
            </button>
          :
          <NavLink to={signInPath} className="btn bg-transparent text-white  fs-10 py-2 fw-500">
                {showFullName()}
          </NavLink>
          }
          
        </div>

        <div className="user-control d-none  d-lg-flex flex-center col-gap-3">
          {/* <Link to="/cart" className="bi bi-cart3 fs-3 text-primary" /> */}
          
          {
            signInPath == "/sign-in" ?
            <Button onClick={()=>setShowModal(true)} className="btn btn-quartz Button fs-12 py-2 fw-500">
              ورود
            </Button>
          :
          <NavLink to={signInPath} className="btn btn-quartz Button font-sans fs-12 py-2 fw-500">
                {showFullName()}
            </NavLink>
          }
          <NavLink to={signInPath} className="btn btn-primary d-none d-lg-block Button font-sans fs-12 py-2 fw-500">
            خرید اشتراک
          </NavLink>
        </div>
      </header>
      <Menu signInPath={signInPath} show={show} onHide={setShow} />
      <Newlogin show={showModal} onHide={setShowModal} />
      
    </React.Fragment>
  );
}

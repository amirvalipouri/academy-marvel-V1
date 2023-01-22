import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormControl, InputGroup, Row, Collapse, Dropdown } from "react-bootstrap";
import { Button, Modal } from '../../components'
import { navItems, rolesPath } from "../../constants";
import logoText from "../../assets/logos/logo text2.png";
import logo from "../../assets/logos/logo.svg";
import Menu from "./Menu";
import CartLink from "./CartLink";
import Newlogin from "../../pages/LoginLayout/NewLogin";
import {  logout } from '../../methods'
import { useShowFullName } from "../../hooks";
export default function Header() {
    const showFullName = useShowFullName();
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
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
                <Link
                    to="/cart"
                    className="bi bi-cart3 fs-2 text-white d-block d-lg-none"
                />
                <img
                    width="65"
                    src={logoText}
                    alt="logo"
                    className="d-none d-lg-block"
                />
                <nav className="flex-1 d-none d-lg-block">
                    <ul className="d-flex align-items-center col-gap-3">
                        {navItems.user.map((item, index) => (
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
                <div className="user-control d-none d-lg-flex flex-center col-gap-3">
                    {/* <NavLink style={{ width: "37px", height: "37px" }} to="/cart" className="btn btn-quartz  fs-12 py-2 fw-500" ><span className="bi bi-cart3  fs-3 text-white"></span></NavLink> */}
                    <CartLink/>
                    <Button
                        className="btn btn-quartz  fs-12 py-2 fw-500"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <span className="bi bi-bell"></span>
                    </Button>

                    

                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-quartz Button font-sans fs-12 py-2 fw-500" variant="quartz" id="dropdown-basic">
                            <img className="rounded-circle mx-1" width="24" height="24" />
                            امیر ولی پوری
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="my-2">
                            {navItems.userControl.map((item, index) => (
                                <Dropdown.Item className="fs-12 fw-400">
                                    <NavLink className="w-100 d-flex justify-content-between align-items-center" to={item.path}>
                                        <span>{item.label}</span>
                                        <span className="bi bi-arrow-left"></span>
                                    </NavLink>
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Item onClick={()=>logout()} className="fs-12 fw-400 text-danger text-start">خروج از حساب</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>
            </header>
            <Menu signInPath={signInPath} show={show} onHide={setShow} />


        </React.Fragment>
    );
}

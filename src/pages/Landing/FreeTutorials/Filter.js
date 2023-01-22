import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

import { category } from "../../../constants";

const Filter = ({
    show = false,
    onHide = () => { },
}) => {
    const location = useLocation();
    const filter = useRef();
    const handleShow = () => {
        filter.current.classList.toggle("active", show);
    };
    const handleLocation = () => {
        onHide(false);
    };
    useEffect(handleShow, [show]);
    useEffect(handleLocation, [location.pathname]);
    return (
        <div ref={filter} className={"Filter-toggle d-lg-none w-100"}>

            <div className="filterr bg-opacity-90 d-flex flex-column gap-3 h-100">
                <div className="my-4">
                    <p className="fs-12 fw-700 text-black my-2">دسته‌بندی</p>

                    {category.category.map((item, index) =>
                        <div key={item.id} className="d-flex my-2">
                            <input type="checkbox" />
                            <p className="mx-1 fs-10 fw-400 text-black">{item.label}</p>
                        </div>
                    )}
                </div>

                <div className="my-4">
                    <p className="fs-12 fw-700 text-black my-2">سطح آموزش</p>

                    {category.levelTeach.map((item, index) =>
                        <div key={item.id} className="d-flex my-2">
                            <input type="checkbox" />
                            <p className="mx-1 fs-10 fw-400 text-black">{item.label}</p>
                        </div>
                    )}
                </div>

                <div className="my-4">
                    <p className="fs-12 fw-700 text-black my-2">مدت زمان</p>

                    {category.timing.map((item, index) =>
                        <div key={item.id} className="d-flex my-2">
                            <input type="checkbox" />
                            <p className="mx-1 fs-10 fw-400 text-black">{item.label}</p>
                        </div>
                    )}
                </div>
            </div>
            {/* <button
                className="hide-btn flex-1 opacity-0"
                onClick={() => onHide(false)}
                
            ></button> */}

        </div>
    )
}

export default Filter
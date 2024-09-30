import React, { useEffect, useRef, useState } from 'react';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
import MyImage from '../Assets/Images/Bitmoji.png';
import Shimmer from './Shimmer';

export default function TopSideNav() {

    const sidebarRef = useRef();
    const [showSide, setShowSide] = useState(false);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setShowSide(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return (
        <>

            <nav className="mynavbar pt-1">

                <div className="m-0 align-items-center d-inline-flex">

                    <button
                        className="bg-transparent border-0 text-white mx-2 pt-2"
                        onClick={() => {
                            setShowSide(true);
                        }}
                    >
                        <i className="material-icons text-white fs-2">menu</i>
                    </button>

                    <img
                        className="bg-white rounded-circle m-0 p-0"
                        src={MyImage} width="33" height="33" alt=""
                    />

                </div>

                {/* <div className="m-0 align-items-center d-inline-flex">

                    <div className="align-items-center d-inline-flex pt-1 p-0">

                        <button
                            className="btn bg-transparent border-0 rounded text-white m-0 p-0"
                        >
                            <span className="p-0 m-0 align-items-center d-inline-flex text-decoration-underline fs-6">
                                Feedback
                            </span>

                        </button>
                        <OverlayTrigger
                            placement="bottom"
                            //delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="button-tooltip-2">
                                    Click here to see the Online Payment Implementation and Support me
                                </Tooltip>
                            }
                        >
                            <i className="material-icons align-items-center bg-transparent border-0 text-white fs-6 mx-2 p-0">info</i>
                        </OverlayTrigger>

                    </div>

                    <div className="dropdown align-items-center d-inline-flex mx-1 pt-2">
                        <button
                            className="bg-transparent border-0 text-white align-items-center dropdown-toggle dropdown-toggle-split"
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        >
                            <span className="visually-hidden">

                            </span>
                            <i className="material-icons fs-4">person</i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="/">Profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>

                </div> */}

            </nav>


            {
                showSide ?
                    <div ref={sidebarRef} className={`sidebar ${showSide ? 'open' : 'closed'}`}>

                        <div className="d-flex justify-content-end">

                            <button
                                className="bg-transparent border-0 text-white"
                                onClick={() => {
                                    setShowSide(false);
                                }}
                            >
                                <i className="material-icons">close</i>
                            </button>

                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            {MyImage ?
                                <img
                                    className="bg-white rounded-circle m-0 p-0"
                                    src={MyImage} width="80" height="80" alt=""
                                    loading='lazy'
                                />
                                :
                                <Shimmer width="75px" height="75px" />
                            }

                        </div>

                        {/* <div className="mt-4">
                            <ul className="list-group bg-transparent border-0 p-0 m-0">
                                <li className="list-group-item bg-transparent border-0 p-0 m-0">
                                    <button className="bg-transparent border-0 text-white m-0 p-0">
                                        <p>Feedback</p>
                                    </button>
                                </li>
                                <li className="list-group-item bg-transparent border-0 p-0 mt-2">
                                    <button className="bg-transparent border-0 text-white m-0 p-0">
                                        <p>About</p>
                                    </button>
                                </li>
                            </ul>
                        </div> */}

                    </div>
                    :
                    null
            }

        </>
    )
}
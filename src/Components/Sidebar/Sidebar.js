import { React, useState } from 'react'
import "./Sidebar.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";


function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [activeTab, setActiveTab] = useState("Attendance");

    return (
        <div>
            <div className="mobile-navbar">
                <div className="mobile-nav-btn">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </div>
                {activeTab}
            </div>
            <div className={sidebar ? "sidebar open-sidebar": "sidebar"}>
                <div>
                    <div className="close-btn">
                        <AiIcons.AiOutlineClose size={25} onClick={showSidebar}/>
                    </div>
                    <div className="title">
                        <img src={props.imgLink} alt="" />

                        <div className="faculty-details">
                            <p id='faculty-name'>{props.name}</p>
                            <p id='faculty-designation'>{props.designation}</p>
                        </div>
                    </div>

                    <div className="tabs">
                        <ul>
                            <li>
                                <Link to="/">
                                    <div className="tab-element attendance-tab">Attendance</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reports">
                                    <div className="tab-element reports-tab">Reports</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="logout">
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

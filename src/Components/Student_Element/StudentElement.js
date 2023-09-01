import React, { useState } from 'react'
import "./StudentElement.css"

function StudentElement(props) {

    // const [attendance, setAttendance] = useState({
    //     attendance: ""
    // })

    const handleAttendance = (event) => {
        const target = event.target;
        const value = target.value;
    }

    return (
        <div>
            <div className="student-element">
                <div className="student-data">
                    <div className="roll-no">
                        {props.rollNo}
                    </div>
                    <div className="name">
                        {props.name}
                    </div>
                </div>
                <div className="attendance">
                    <div className="attendance-options">
                        <label id="present" htmlFor="">Present</label>
                        <input type="radio" value="Present" onChange={handleAttendance} />
                    </div>

                    <div className="attendance-options">
                        <label id="absent" htmlFor="">Absent</label>
                        <input type="radio" value="absent" onChange={handleAttendance} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentElement

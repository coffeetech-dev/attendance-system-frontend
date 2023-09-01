import React from 'react'
import StudentElement from '../Student_Element/StudentElement'
import "./StudentList.css"

let students = [
  {
    rollno: "ABC101",
    name: "Student1name"
  },
  {
    rollno: "ABC102",
    name: "Student2name"
  },
  {
    rollno: "ABC103",
    name: "Student3name"
  },
  {
    rollno: "ABC104",
    name: "Student4name"
  }
]

function StudentList() {
  return (
    <div>
      <div className="student-list">
        {students.map(function(element) {
          return (
            <StudentElement key={element.rollno} rollNo = {element.rollno} name = {element.name}/>
          )
        })}
        
        {/* <StudentElement rollNo = "BCE201" name = "Firstame Surame"/>
        <StudentElement rollNo = "BCE301" name = "Firstame Surame"/>
        <StudentElement rollNo = "BCE401" name = "Firstame Surame"/> */}
      </div>

      <div className="save-btn">
        <button>Save</button>
      </div>
    </div>
  )
}

export default StudentList
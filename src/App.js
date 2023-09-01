import './App.css';
// import Search from './Components/Search/Search';
import Sidebar from './Components/Sidebar/Sidebar';
// import StudentList from './Components/Student_list/StudentList';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attendance from './routes/Attendance';
import Reports from './routes/Reports';

function App() {
    return (
        <>
            <BrowserRouter>
                <Sidebar name="Teacher" designation="Computer Department" imgLink="https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png" />
                <div className='main'>
                    <Routes>
                        <Route path='/' element= {<Attendance />}></Route>
                        <Route path='/Reports' element= {<Reports />}></Route>
                    </Routes>
                </div>


            </BrowserRouter>

        </>
    );
}


export default App;

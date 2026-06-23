
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";
 import "bootstrap/dist/css/bootstrap.min.css";
 import Attendance from "./pages/Attendance";
  import Reports from "./pages/Reports";
 import Sidebar from "./components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import StudentStatus from "../components/StudentStatus";
import Navbar from "../components/Navbar";
import FirstComp from './pages/FirstComp'
var _jsxFileName = "C:/Users/91970/Desktop/attendance_management_system/react-app/src/pages/Dashboard.jsx";
function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Dashboard />} />
    //   <Route path='/students' element={<Students />} />
    //   <Route path='/attendance' element={<Attendance />} />
    //   <Route path='/reports' element={<Reports />} />
    // </Routes>
    <FirstComp/>

  )
}

export default App
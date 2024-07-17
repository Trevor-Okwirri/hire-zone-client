import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero'
import Login from './pages/Login'
import JobListings from './pages/JobListings'
import Employers from './pages/Employers'
import EmployerDashboard from './pages/EmployerDashboard'
import EmployerLogin from './pages/EmployerLogin'
import EmployerRegister from './pages/EmployerRegister'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs';
import CreateJob from './pages/CreateJob';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          {/* <Hero /> */}
          <main>
            <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/create-job' element={<CreateJob />} />
              <Route path="/job-seekers" element={<Hero />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/jobs" element={<JobListings />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/employer-login" element={<EmployerLogin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/employer-register" element={<EmployerRegister />} />
              <Route path="/employer/dashboard" element={<EmployerDashboard />} />ø
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App

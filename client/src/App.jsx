import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./comportments/LoginSignUp/Login";
import SignUp from "./comportments/LoginSignUp/SignUp";
import Dashborad from "./comportments/Dashboard/Dashborad";
import PrivateRoute from "./comportments/PrivateRoute";
import Vehicles from "./comportments/Vehicles/Vehicles";
import AddVehicle from "./comportments/Vehicles/AddVehicle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />   

        {/* Following routes are protected by PrivateRoute */}

        {/* 
          when all login users redirect to the Dashboard 
          and routes of dashbord will assign according to login user role
        */}
        <Route path="/Dashboard" element={<PrivateRoute><Dashborad /></PrivateRoute>} /> 

        {/* unauthorized access catch and suspend the unauthorized user*/}
        <Route path="/unauthorizedAccess" element={<PrivateRoute></PrivateRoute>}

        {/* This is Vehicle route this can access by all users */}
        <Route path="/Vehicles" element={<PrivateRoute><Vehicles /></PrivateRoute> } />
        <Route path="/AddVehicles" element={<PrivateRoute><AddVehicle /></PrivateRoute> } />
         
      </Routes>
    </BrowserRouter>
  )
}
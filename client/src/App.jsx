import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./comportments/LoginSignUp/Login";
import SignUp from "./comportments/LoginSignUp/SignUp";
import Dashborad from "./comportments/Dashboard/Dashborad";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />   

        <Route path="/Dashboard" element={<Dashborad />} />     
      </Routes>
    </BrowserRouter>
  )
}
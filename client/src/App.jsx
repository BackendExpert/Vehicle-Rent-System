import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginSignUp/Login";
import SignUp from "./components/LoginSignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />        
      </Routes>
    </BrowserRouter>
  )
}
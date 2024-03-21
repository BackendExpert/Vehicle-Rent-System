import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"

const Vehicles = () => {
    const navigate = useNavigate();

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");

    if(RoleUser === "SuperAdmin" || RoleUser === "Admin" || RoleUser === "renter" || RoleUser === "buyer"){
        return (
            <div className="bg-gray-200">Vehicles</div>
        )
    }
    else{
        useEffect(() => {
            navigate('/unauthorizedAccess');
        }, [])
    }
}

export default Vehicles
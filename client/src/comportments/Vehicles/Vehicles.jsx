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
            <div className="bg-gray-200 w-full py-8 px-6">
                <div className="py-4 px-4 bg-white rounded border-l-4 border-blue-500 shadow-xl">
                    <h1 className="text-xl pt-4">Vehicles</h1>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            navigate('/unauthorizedAccess');
        }, [])
    }
}

export default Vehicles
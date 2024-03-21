import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"

const AddVehicle = () => {
    const navigate = useNavigate();

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");

    if(RoleUser === "SuperAdmin" || RoleUser === "Admin" || RoleUser === "renter"){
        return (
            <div>AddVehicle</div>
        )
    }
    else{
        useEffect(() => {
            navigate('/unauthorizedAccess');
        }, [])
    }

}

export default AddVehicle
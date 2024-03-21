import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"

const Vehicles = () => {
    const navigate = useNavigate();

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");

    if(RoleUser === "" || RoleUser === "" || RoleUser === "" || RoleUser === ""){

    }
    else{
        useEffect(() => {
            navigate('/unauthorizedAccess');
        }, [])
    }
  return (
    <div>Vehicles</div>
  )
}

export default Vehicles
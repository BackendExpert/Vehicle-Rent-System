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
                    <h1 className="flex text-2xl pt-4">
                        <Icons name="car" size="large"></Icons> 
                        <p className="pt-2 pl-2">Vehicles</p>
                    </h1>
                    <hr className="w-[20%]" />
                    <div className="flex my-4">
                        <Link to={'/Dashboard'}>
                            <button className="px-16 py-3 rounded text-blue-500 font-semibold border border-blue-500 duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl"> Back </button>
                        </Link>
                        <Link to={'/AddVehicles'}>
                            <button className="px-16 py-3 rounded text-blue-500 font-semibold border border-blue-500 duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl"> Back </button>
                        </Link>
                    </div>
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
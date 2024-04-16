import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"

const DashSummary = () => {
    const navigate = useNavigate() 

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const dataCount = [
        {id: 1, name: "Rented Vehicles", link: "#", value: "2", icon: <Icons name="car" size="large"></Icons>, style: ""},
        {id: 2, name: "My Vehicles", link: "#", value: "2", icon: <Icons name="car" size="large"></Icons>, style: ""},        
    ]

    if(RoleUser !== null){
        return (
            <div className="py-4">
                {
                    (() => {
                        if(RoleUser === "SuperAdmin"){
                            return (
                                <h1 className="px-8 text-xl font-semibold">SuperAdmin Dashbord</h1>
                            )                            
                        }
                        else if(RoleUser === "Admin"){
                            return (
                                <h1 className="px-8 text-xl font-semibold">Admin Dashbord</h1>
                            )    
                        }
                        else if(RoleUser === "renter"){
                            return (
                                <h1 className="px-8 text-xl font-semibold">Renter Dashbord</h1>
                            )    
                        }
                        else if(RoleUser === "buyer"){
                            return (
                                <h1 className="px-8 text-xl font-semibold">Buyer Dashbord</h1>
                            )    
                        }
                    })()
                }
                
                <div className="mt-4 rounded px-4">
                    <div className="lg:flex">
                        <div className="bg-green-500 rounded py-8 px-8 w-full mx-2">
                            Hi all
                        </div>
                        <div className="bg-green-500 rounded py-8 px-8 w-full mx-2">
                            Hi all
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        localStorage.clear()
        navigate('/')
    }

}

export default DashSummary
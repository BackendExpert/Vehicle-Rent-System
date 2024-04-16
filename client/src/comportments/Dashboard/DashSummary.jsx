import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup';

const DashSummary = () => {
    const navigate = useNavigate() 

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const dataCount = [
        {id: 1, name: "Rented Vehicles", link: "#", value: <CountUp end={20}/>, icon: <Icons name="car" size="large"></Icons>, style: "text-red-500"},
        {id: 2, name: "My Vehicles", link: "#", value: <CountUp end={20}/>, icon: <Icons name="car" size="large"></Icons>, style: "text-green-500"},        
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
                
                <div className="mt-4 rounded pr-5">
                    <div className="lg:flex">
                        {
                            dataCount.map((data) => {
                                return (
                                    <div className={`shadow-2xl bg-white border-2 border-gray-200 rounded py-8 px-8 w-full mx-2 lg:my-0 my-2 ${data.style}`}>
                                       <div className="flex justify-between">
                                            <div className="flex">
                                                <p className="font-semibold text-xl">{data.icon}</p>   
                                                <p className="font-semibold text-xl pl-2 pt-2">{data.name}</p>
                                            </div>
                                            <p className="font-semibold text-3xl pl-2 pt-1">{data.value}</p>                                                                                      
                                       </div>
                                    </div>
                                )
                            })
                        }
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
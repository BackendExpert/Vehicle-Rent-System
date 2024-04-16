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
        {id: 1, name: "Rented Vehicles", link: "#", value: <CountUp end={20}/>, icon: <Icons name="car" size="large"></Icons>, style: "text-purple-500"},
        {id: 2, name: "My Vehicles", link: "#", value: <CountUp end={20}/>, icon: <Icons name="car" size="large"></Icons>, style: "text-green-500"},     
        {id: 3, name: "Users", link: "#", value: <CountUp end={20}/>, icon: <Icons name="people" size="large"></Icons>, style: "text-yellow-500"},      
        {id: 4, name: "Suspended Users", link: "#", value: <CountUp end={20}/>, icon: <Icons name="people" size="large"></Icons>, style: "text-red-500"},
        {id: 5, name: "User Requests", link: "#", value: <CountUp end={20}/>, icon: <Icons name="help-circle" size="large"></Icons>, style: "text-blue-500"},
        {id: 6, name: "User Reports", link: "#", value: <CountUp end={20}/>, icon: <Icons name="document-text" size="large"></Icons>, style: "text-yellow-500"},         
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
                    <div className="lg:grid grid-cols-4 gap-4">
                        {
                            dataCount.map((data) => {
                                return (                                    
                                    <div className={`cursor-pointer text-center shadow-2xl bg-white border-2 border-gray-200 rounded py-8 px-8 w-full mx-2 lg:my-0 my-2 duration-500 hover:text-sm ${data.style}`}>                                       
                                        <p className="font-semibold text-xl">{data.icon}</p>   
                                        <p className="font-semibold pl-2 pt-2">{data.name}</p>
                                        <p className="font-semibold text-3xl pl-2 pt-1">{data.value}</p>
                                    </div>                                    
                                )
                            })
                        }
                    </div>
                </div>
                <div className="my-8 mx-2">  
                    <div className="lg:grid grid-cols-2 gap-4">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Trip
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Vehicle
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Cost
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            View
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Colombo
                                        </th>
                                        <td class="px-6 py-4">
                                            KN-4775
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                            <Link>
                                                <button className="py-2 px-1 text-blue-600 rounded duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl">View</button>
                                            </Link>
                                        </td>
                                    </tr>                                
                                </tbody>
                            </table>
                        </div>
                    </div>                


                </div>
                <div className="bg-white rounded pr-5 shadow-xl mt-8 py-12 text-center">
                    &copy; VRS - Vehicle rental System <br />
                    Developed and Design by JehanKandy
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
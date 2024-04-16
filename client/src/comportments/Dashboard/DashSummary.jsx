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
        {id: 7, name: "My Income", link: "#", value: <CountUp end={20}/>, icon: <Icons name="cash" size="large"></Icons>, style: "text-green-500"},
        {id: 8, name: "Be a Renter", link: "#", icon: <Icons name="person" size="large"></Icons>, style: "bg-green-500"},  
                
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
                                if(RoleUser === "SuperAdmin" || RoleUser === "Admin"){
                                    if(data.id !== 8){
                                        return (                                    
                                            <div className={`cursor-pointer text-center shadow-2xl bg-white border-2 border-gray-200 rounded py-8 px-8 w-full mx-2 lg:my-0 my-2 duration-500 hover:text-sm ${data.style}`}>                                       
                                                <p className="font-semibold text-xl">{data.icon}</p>   
                                                <p className="font-semibold pl-2 pt-2">{data.name}</p>
                                                <p className="font-semibold text-3xl pl-2 pt-1">{data.value}</p>
                                            </div>                                    
                                        )
                                    }
                                }
                                if(RoleUser === "renter"){
                                    if(data.id === 1 || data.id === 2 || data.id === 7){
                                        return (                                    
                                            <div className={`cursor-pointer text-center shadow-2xl bg-white border-2 border-gray-200 rounded py-8 px-8 w-full mx-2 lg:my-0 my-2 duration-500 hover:text-sm ${data.style}`}>                                       
                                                <p className="font-semibold text-xl">{data.icon}</p>   
                                                <p className="font-semibold pl-2 pt-2">{data.name}</p>
                                                <p className="font-semibold text-3xl pl-2 pt-1">{data.value}</p>
                                            </div>                                    
                                        )
                                    }
                                }
                                if(RoleUser === "renter"){
                                    if(data.id === 1 || data.id === 2 || data.id === 7){
                                        return (                                    
                                            <div className={`cursor-pointer text-center shadow-2xl bg-white border-2 border-gray-200 rounded py-8 px-8 w-full mx-2 lg:my-0 my-2 duration-500 hover:text-sm ${data.style}`}>                                       
                                                <p className="font-semibold text-xl">{data.icon}</p>   
                                                <p className="font-semibold pl-2 pt-2">{data.name}</p>
                                                <p className="font-semibold text-3xl pl-2 pt-1">{data.value}</p>
                                            </div>                                    
                                        )
                                    }
                                }
                            })
                        }
                    </div>
                </div>
                <h1 className="px-8 py-8 text-xl font-semibold">Personal Data</h1>
                <div className="mb-8 mx-2">
                    <div className="lg:flex">
                        <div className="w-full shadow-md rounded-lg bg-white py-6 px-4 lg:mr-5 mr-0 lg:my-0 my-2">
                            <h1 className="">My Info</h1>
                            <div className="lg:grid grid-cols-2 gap-4">
                                <div className="mx-4 my-6">
                                    <div className="">
                                        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
                                    </div>
                                    <div className="">
                                        <p className="py-2">Name : Jehan </p>
                                        <p className="py-2">Email : jehan@123.com</p>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="py-2">Name : Jehan </p>
                                    <p className="py-2">Address : kandy</p>
                                    <p className="py-2">Name : Jehan </p>
                                    <p className="py-2">Address : kandy</p>
                                    <Link>
                                        <button className="font-medium py-2 px-4 text-blue-600 rounded duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl">More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>  
                        <div class="shadow-md rounded-lg w-full">
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
                                            <Link>
                                                <button className="font-medium py-2 px-4 text-blue-600 rounded duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl">View</button>
                                            </Link>
                                        </td>
                                    </tr>                                
                                </tbody>
                            </table>
                        </div>
                    </div>  

                    <h1 className="px-8 py-8 text-xl font-semibold">Newly Added</h1>   

                    <div className="mb-8 mx-2">
                       <div className="lg:flex">
                            <div className="bg-white rounded mx-8 shadow-xl">
                                <div className="px-4 -my-4">
                                    <img src="https://wallpapercave.com/wp/wp9209385.jpg" alt="" srcset="" className="w-auto h-44 rounded shadow-2xl"/>
                                </div>
                                <div className="mt-8 mx-4">
                                    <h1>Model : BMW</h1>
                                    <p className="">Owner : Jehan</p>
                                </div>
                                <div className="my-8 text-center">
                                    <Link>
                                    <button className="font-medium py-2 px-4 text-blue-600 rounded duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl">View more</button>
                                    </Link>
                                </div>
                            </div> 
                            <div className="bg-white rounded mx-8 shadow-xl">
                                <div className="px-4 -my-4">
                                    <img src="https://wallpapercave.com/wp/wp9209385.jpg" alt="" srcset="" className="w-auto h-44 rounded shadow-2xl"/>
                                </div>
                                <div className="mt-8 mx-4">
                                    <h1>Model : BMW</h1>
                                    <p className="">Owner : Jehan</p>
                                </div>
                                <div className="my-8 text-center">
                                    <Link>
                                    <button className="font-medium py-2 px-4 text-blue-600 rounded duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl">View more</button>
                                    </Link>
                                </div>
                            </div> 
                            <div className="bg-white rounded mx-8 shadow-xl">
                                <div className="px-4 -my-4">
                                    <img src="https://wallpapercave.com/wp/wp9209385.jpg" alt="" srcset="" className="w-auto h-44 rounded shadow-2xl"/>
                                </div>
                                <div className="mt-8 mx-4">
                                    <h1>Model : BMW</h1>
                                    <p className="">Owner : Jehan</p>
                                </div>
                                <div className="my-8 text-center">
                                    <Link>
                                    <button className="font-medium py-2 px-4 text-blue-600 rounded duration-500 hover:bg-blue-500 hover:text-white hover:shadow-xl">View more</button>
                                    </Link>
                                </div>
                            </div> 
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
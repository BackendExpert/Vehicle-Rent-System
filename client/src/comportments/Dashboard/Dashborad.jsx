import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  secureLocalStorage  from  "react-secure-storage"

const Dashborad = (children) => {
    const navigate = useNavigate() 

    //for open and close Side bar
    const [sideOpen, SetsideOpen] = useState();
    const [navOpen, SetNavOpen] = useState();

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    // alert(RoleUser)
    //-------Side Menus -------------

    //For all user Side list
    const allUserSide = [
        {id: 1, name: "Vehicles", link: "/Vehicles", icon: <Icons name="car" size="large"></Icons>},
        {id: 2, name: "Rented Vehicle", link: "#", icon: <Icons name="car-sport" size="large"></Icons>},
        {id: 3, name: "Own Vehicle ", link: "#", icon: <Icons name="car" size="large"></Icons>},
        {id: 4, name: "Profile", link: "#", icon: <Icons name="person" size="large"></Icons>},        
    ]
    //SuperAdmin Side list
    const SuperAdminSide = [
        {name: "Users", link: "#", icon: <Icons name="people" size="large"></Icons>},
        {name: "Requests", link: "#", icon: <Icons name="help-circle" size="large"></Icons>},
        {name: "Vehicles", link: "/Vehicles", icon: <Icons name="car" size="large"></Icons>},
        {name: "Report", link: "#", icon: <Icons name="document-text" size="large"></Icons>},
        {name: "Suspended", link: "#", icon: <Icons name="person-circle" size="large"></Icons>},
    ]

    //-------Side Menus End-------------
    //-------Nav Menus -------------

    //alluser Navbar
    const navBar = [
        {name: "Notifications", link: "#", desc: "notifications", icon: <Icons name="notifications"></Icons>},
        {name: "Logout", desc: "logout", icon: <Icons name="power"></Icons>},        
    ]

    //-------Nav Menus End -------------

    //headlelogout
    const headlelogout = () =>{
        localStorage.clear();
        navigate('/')
        window.location.reload()
    } 

    return (
        <div className="bg-gray-200 py-6">
            <div className="flex">
                {/* side menu start */}
                <div className={`duration-500 relative border-r-4 border-blue-300 shadow-xl mx-2 rounded bg-white h-auto pl-4 py-4 ${sideOpen ? "w-72" : "w-20" }`}>
                    <div className="py-2">
                        <div className="flex">
                        <div className="text-[#3B71CA] pt-1" onClick={() => SetsideOpen(!sideOpen)}><Icons size="large" name="menu"></Icons></div>
                            <div className={`text-2xl pb-4 text-[#3B71CA] font-bold ${!sideOpen && 'scale-0'}`}>
                                {
                                    (() => {
                                        if(RoleUser === "SuperAdmin"){
                                            return (
                                                <span>SuperAdmin</span>
                                            )
                                        }
                                        else if(RoleUser === "Admin"){
                                            return (
                                                <span>Admin</span>
                                            )
                                        }
                                        else if(RoleUser === "renter"){
                                            return (
                                                <span>Renter</span>
                                            )
                                        }
                                        else if(RoleUser === "buyer"){
                                            return (
                                                <span>Buyer</span>
                                            )
                                        }
                                    })()
                                }                                     
                            </div>                    
                        </div>
                        <div className={`pl-2 text-xl text-gray-400 duration-500 hover:text-[#3B71CA]`}>
                            <Link to={'/Dashboard'}>
                                {sideOpen ? <p>Dashbord</p> : <Icons name="speedometer"></Icons> }
                            </Link>
                        </div>
                        <hr className="mt-2 mr-4 border-b-2 border-blue-300"/>
                    </div>

                    <div className="pl-2">
                        {
                            (() => {
                                if(RoleUser === "SuperAdmin"){
                                    return (
                                        SuperAdminSide.map((superSide) => (
                                            <Link to={superSide.link}>
                                                <div className="flex py-6 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                                    <p>{superSide.icon}</p>
                                                    <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{superSide.name}</p>                        
                                                </div>
                                            </Link>
                                        ))
                                    )
                                }
                                })()
                            }
                            
                            {
                                allUserSide.map((allside) => {
                                    if(RoleUser === "buyer"){
                                        if(allside.id === 1 || allside.id === 2 || allside.id === 4 ){
                                            return (
                                                <Link to={allside.link}>
                                                    <div className="flex py-6 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                                        <p>{allside.icon}</p>
                                                        <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{allside.name}</p>                        
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    }
                                    else{
                                        return (
                                            <Link to={allside.link}>
                                                <div className="flex py-6 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                                    <p>{allside.icon}</p>
                                                    <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{allside.name}</p>                        
                                                </div>
                                            </Link>
                                        )
                                    }
                                })
                            }

                        
                    </div>
                
                </div>
                {/* side menu end */}
                <div className="w-full mr-4">
                    {/* nav bar start */}
                    <div className="flex justify-between border-b-4 border-blue-300 shadow-xl  bg-white py-4 px-6 rounded w-full">
                        Vehicle Rent System
                        <div className="text-xl absolute cursor-pointer lg:hidden right-8" onClick={() => SetNavOpen(!navOpen)}>
                            <Icons name={navOpen ? 'close' : 'menu'} ></Icons>
                        </div>
                        <div className={`rounded lg:border-0 border-b-4 border-blue-400 lg:flex lg:items-center absolute lg:static bg-white transition-all lg:mt-0 mt-12 ${navOpen ? 'lg:visible':'lg:visible invisible'}`}>

                            {
                                navBar.map((nav) => {
                                    if(nav.desc === "logout"){
                                        return (
                                            <div onClick={headlelogout} className="flex cursor-pointer text-red-500 px-4 lg:py-0 py-4 lg:border-0 border-b-4 border-blue-200">
                                                <p className="pt-[2px]">{nav.icon}</p>
                                                <p className="pl-2">{nav.name}</p>
                                            </div>
                                        )
                                    }
                                    else if(nav.desc === "notifications"){
                                        return (
                                            <Link to={nav.link}>
                                                <div className="flex cursor-pointer text-blue-500 px-4 lg:py-0 py-4 lg:border-0 border-b-4 border-blue-200">
                                                    <div className="">
                                                        <p className="pt-[2px]">{nav.icon}</p> 
                                                        <span className="absolute bg-red-500 text-white rounded-full px-1 text-sm top-8 ml-1">15</span>
                                                    </div>                                                   
                                                    <p className="pl-2">{nav.name}</p>
                                                </div>
                                            </Link>                            
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    {/* nav bar end */}

                    <div className="bg-white mt-2 py-6 px-4 rounded border-l-4 border-blue-200 shadow-xl">
                        hi alll
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashborad
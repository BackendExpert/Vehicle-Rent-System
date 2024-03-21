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
        {name: "Rented Vehicle", link: "#", icon: <Icons name="car-sport" size="large"></Icons>},
        {name: "Own Vehicle ", link: "#", icon: <Icons name="car" size="large"></Icons>},
        {name: "Profile", link: "#", icon: <Icons name="person" size="large"></Icons>},        
    ]

    //SuperAdmin Side list
    const SuperAdminSide = [
        {name: "Users", link: "#", icon: <Icons name="people" size="large"></Icons>},
        {name: "Vehicles", link: "#", icon: <Icons name="car" size="large"></Icons>},
        {name: "Report", link: "#", icon: <Icons name="document-text" size="large"></Icons>},
        {name: "Suspended", link: "#", icon: <Icons name="person-circle" size="large"></Icons>},
    ]

    //-------Side Menus End-------------
    //-------Nav Menus -------------

    //SuperAdmin Navbar
    const navBar = [
        {name: "Notifications", link: "#", icon: <Icons name="notifications"></Icons>},
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
                                        else if(RoleUser === "user"){
                                            return (
                                                <span>User</span>
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
                                    return (
                                        <Link to={allside.link}>
                                            <div className="flex py-6 text-gray-400 duration-500 hover:text-[#3B71CA]">                        
                                                <p>{allside.icon}</p>
                                                <p className={`pt-2 pl-2 ${!sideOpen && 'scale-0'}`}>{allside.name}</p>                        
                                            </div>
                                        </Link>
                                    )
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
                                                <p className="">{nav.icon}</p>
                                                <p className="pl-2">{nav.name}</p>
                                            </div>
                                        )
                                    }
                                    else{
                                        return (
                                            <Link to={nav.link}>
                                                <div className="flex cursor-pointer text-blue-500 px-4 lg:py-0 py-4 lg:border-0 border-b-4 border-blue-200">
                                                    <p className="">{nav.icon}</p>
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
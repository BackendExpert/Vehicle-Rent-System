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

    // https://cdn-icons-png.flaticon.com/128/3135/3135715.png

    return (
        <div className="bg-gray-200 py-2 h-auto">
            <div className="flex">
                <div className={`duration-500 relative border-r-4 border-blue-300 shadow-xl my-2 mx-2 rounded bg-white h-auto pl-4 py-4 ${sideOpen ? "w-64" : "w-20" }`}>
                <div className="flex">
                <div className="text-[#3B71CA] pt-1" onClick={() => SetsideOpen(!sideOpen)}>{sideOpen ? <Icons size="large" name="close"></Icons> : <Icons size="large" name="menu"></Icons>}</div>
                    {/* <div className={`text-2xl pb-4 text-[#3B71CA] font-bold ${!sideOpen && 'scale-0'}`}>SuperAdmin</div>                     */}
                </div>
                <div className="">
                    {sideOpen ? <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className="px-6"/>
                    </div> : <div></div>}
                </div>
                <div className={`pl-2 text-xl text-gray-400 duration-500 hover:text-[#3B71CA]`}>
                    <Link to={'/superAdmin'}>
                        {sideOpen ? <div className="flex pl-2 pt-2">
                            <p className="">SuperAdmin</p>
                        </div> : <Icons name="speedometer"></Icons> }
                    </Link>
                </div>
                <hr className="mt-2 mr-4 border-b-1 border-blue-300"/>
            </div>

                </div>
            </div>

        
    )
}

export default Dashborad
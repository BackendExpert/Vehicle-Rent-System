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

    return (
        <div className="bg-gray-200 py-6 h-auto">
            <div className="flex">
                <div className="w-auto bg-white">
                    SuperAdmin
                </div>
            </div>
        </div>
        
    )
}

export default Dashborad
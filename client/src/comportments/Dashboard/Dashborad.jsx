import Icons from "@reacticons/ionicons"
import { useState } from "react"
import { Link } from "react-router-dom"

const Dashborad = () => {
    //for open and close Side bar
    const [sideOpen, SetsideOpen] = useState();

    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");

    //SuperAdmin Side list
    const SuperAdminSide = [
        {name: "Users", link: "#", icon: <Icons name="person" size="large"></Icons>},
        {name: "Users", link: "#", icon: <Icons name="person" size="large"></Icons>},
        {name: "Users", link: "#", icon: <Icons name="person" size="large"></Icons>},
        {name: "Users", link: "#", icon: <Icons name="person" size="large"></Icons>},
    ]

  return (
    <div>
        {
            SuperAdminSide.map((superSide) => {
                return (
                    <div className="">
                        {superSide.name}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Dashborad
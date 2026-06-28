import { useNavigate } from "react-router-dom";
import { useContent } from "../../hooks/useContent";
import { CrossIcon } from "../Icon/CrossIcon";
import { LogoutIcon } from "../Icon/LogoutIcon";
import { UserIcon } from "../Icon/UserIcon";
import { Button } from "./Button";



export function ProfileDetail({open  , onClose}:any){
    const {username} = useContent()
    const navigate = useNavigate()

    function  logout(){
     localStorage.removeItem("token")
     navigate("/signin")
    }
   
    return <div>
        {  open && <div className=" fixed h-screen  w-screen  bg-gray-400/60 top-0 left-0 p-2">
        <span className="flex justify-end p-4">
          <div  className="bg-white  p-2 max-w-72 rounded-2xl">
            <div onClick={onClose} className="flex justify-end hover:cursor-pointer">
                <CrossIcon size="md"/>
            </div >
            <div className=" flex p-4">
                <div className=" mr-2"><UserIcon size="lg"/></div>
                 
                <h3 className="wrap-anywhere font-mono ">{username}</h3>
            </div>
                <div className="flex justify-center">
                    <Button startIcon={<LogoutIcon size="md"/>} onClick={logout} size="sm" variant="Primary" text="Logout"/>
                </div>
         </div>
        </span>
    </div>
        }
    </div>
}
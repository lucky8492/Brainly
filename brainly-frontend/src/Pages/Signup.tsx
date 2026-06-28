import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Signup(){
   const usernameRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const navigate = useNavigate()
   
  async function signup(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

try{    const response = await axios.post(BACKEND_URL+"/api/v1/signup",
        {
            username,
            password
        }
    )
    alert(response.data.message)
    navigate("/signin")
}catch(e){
    if(e instanceof Error){
       alert("error" + e)
    }
}

  }

    return <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
        <div className="bg-white rounded-xl border border-slate-200 min-w-80 p-2 ">
            
            <div className="p-2">Enter username:
            <InputBox placeholder="Enter username" types="text" ref={usernameRef}/>
            </div>
            <div className="p-2">
                Enter Password
            <InputBox placeholder="Password" types="password" ref={passwordRef}/>
            </div>

            <div className="flex justify-center p-4 ">
            <Button text="Signup" isLoading={false} fullWidth={true} onClick={signup} size="md" variant="Primary" />
            </div>
        
           <div onClick={()=>{navigate("/signin")}} className="p-4 text-blue-600 underline hover:cursor-pointer">
                   already have an account
              </div>
        </div>
            

    </div>
}
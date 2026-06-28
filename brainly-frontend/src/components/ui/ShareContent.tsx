import axios from "axios"
import { CopyIcon } from "../Icon/CopyIcon"
import { CrossIcon } from "../Icon/CrossIcon"
import { Button } from "./Button"
import { BACKEND_URL } from "../../config"





export function ShareContent({open , onClose}:any){
 
 async function shareContents(){
  try{
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,
    {
    share:true
    },
    {
      headers:{
        authorization : localStorage.getItem("token"),
        'Content-Type': 'application/json'  
      }
    })
    if(response){
      const  copyText = `http://localhost:5173/api/v1/brain/${response.data.message}`
       await navigator.clipboard.writeText(copyText)
       alert("shareable link has been added to clipboard")
    }
  }catch(e){
    if(e instanceof Error){
      console.log(e)
    }

  }

  }
  
   return <div>
          {open && <div className="fixed z-10 h-screen w-screen bg-slate-400/60 top-0  bottom-0">
     <div className="w-screen  h-screen fixed bg-slate-400/70 top-0 left-0  flex justify-center"> 
        <div className="flex  flex-col justify-center">
            <span className="bg-white  min-h-48 min-w-100 border p-5 border-slate-200 shadow-sm rounded-2xl max-w-72">

                <div  className="flex justify-between hover:cursor-pointer mb-4 ">
                <h3 className="font-bold text-xl  ">Share Your Second Brain</h3>
                <div onClick={onClose}>
                <CrossIcon  size="lg"/>
                </div>
                </div>
                <div className="  p-1  rounded-xl m">
                <h1 className="p-2">
                  Share your entire collection of notes, documents, tweets, 
                  and videos with others.They'll be able to import your content 
                  into their own Second Brain.</h1>
              
                <div className="flex justify-center ">
                    <Button fullWidth={true} startIcon={<CopyIcon size="md"/>}  size="md" variant="Primary" text="Share Brain" onClick={shareContents}/>
                </div>

            </div>

            </span>
        </div>
     </div>

   </div>
   }
   </div>

}
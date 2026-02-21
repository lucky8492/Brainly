import { useRef, useState } from "react"
import { CrossIcon } from "../Icon/CrossIcon"
import { Button } from "./Button"
import { InputBox } from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { data } from "react-router-dom";

export function AddContentCard({open, onClose}){
    const [selectVal , setSelectVal] = useState<string>();
    const token = localStorage.getItem("token");
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)
    const tagsRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    
  async function addContent(){
    
       const title = titleRef.current?.value;
       const body = bodyRef.current?.value;
       const tags = tagsRef.current?.value;
       const link = linkRef.current?.value;

    try{
        const reponse = await axios.post(BACKEND_URL + "/api/v1/content" ,
            {
                type : selectVal?.toLocaleLowerCase(),
                link : link,
                title : title,
                body : body,
                tags :tags
            },
            { 
            headers : {
             authorization : token
            }
            }

        )
        console.log(reponse.data)
    }catch(e){
        if(e instanceof Error){
            console.log(e)
        }
    }
    onClose()

 }



  return<div>
     {open && 
     <div className="w-screen  h-screen fixed bg-slate-400/70 top-0 left-0  flex justify-center"> 
        <div className="flex  flex-col justify-center">
            <span className="bg-white  min-h-48 min-w-72 border p-5 border-slate-200 shadow-sm rounded-2xl max-w-72">
            <div>
                <div onClick={onClose} className="flex justify-end hover:cursor-pointer">
                <CrossIcon size="md"/>
                </div>
                <div className="border border-slate-400 p-1  rounded-xl m">

                <select
                  value={selectVal}
                  onChange={(e)=>{setSelectVal(e.target.value)}} 
                  className="outline-none  p-1 hover:cursor-pointer">
                    <option>Select type</option>
                    <option value="article">Article</option>
                    <option value="tweet">Tweet</option>
                    <option value="youtube">Youtube</option>
                </select>
                </div>
               <InputBox ref={titleRef} types="text" placeholder={"title"}/>
               {selectVal != "article" && 
               <InputBox ref={linkRef} types="text" placeholder={"link"}/>
               }
               { selectVal === "article" && 
                <InputBox ref={bodyRef} types="text" placeholder={"body"}/>
               }
               <InputBox ref={tagsRef} types="text" placeholder={"#tags"}/>
              
                <div className="flex justify-center mt-3">
                    <Button size="md" variant="Primary" text="Submit" onClick={addContent}/>
                </div>

            </div>

            </span>
        </div>
     </div>


     }

  </div>
}
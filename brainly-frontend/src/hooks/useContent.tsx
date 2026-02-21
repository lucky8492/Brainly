import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


export  function useContent(){
    const [content , setContent] = useState();
    const [username  , setUsername]= useState("username")
      function refresh(){
         axios.get(`${BACKEND_URL}/api/v1/content` ,{
        headers:{
            authorization : localStorage.getItem("token")
        }
    })
       .then((reponse)=>{
          setContent(reponse.data.userContent)
          setUsername(reponse.data.userContent[0].userId.username) 

       })
      }


    useEffect(()=>{
      refresh()
       let intervals =  setInterval(()=>{
           refresh()
        },10*1000)
        return () => {
            clearInterval(intervals)
        }
    },[])


    return {content , refresh , username};
}
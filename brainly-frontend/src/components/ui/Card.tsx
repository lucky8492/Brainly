import type { ReactElement } from "react"



interface cardProps {
    variant : "article" | "tweet" | "youtube",
    text :string,
    leftIcon :ReactElement,
    RightIcon1? : ReactElement,
    RightIcon2? : ReactElement,  
    link : string,
    title? : string,
    body? : string,
    tag? : string,
    onClick1? : ()=>void,
    onClick2? : ()=>void
}



export const Card = ({variant , text , leftIcon , RightIcon1 ,RightIcon2 ,link, title, body ,tag , onClick1 , onClick2}: cardProps)=>{

    return<div>
        <div 
         className="bg-white min-h-48 min-w-72 border p-5 border-slate-200 shadow-sm rounded-2xl max-w-72 ">
        <div className="flex justify-between ">
            <div className="text-gray-400 hover:cursor-pointer">
               {leftIcon}
            </div>
            <div className="font-mono">
                {text}
            </div>
            <div className="flex text-gray-400">
                <div  onClick={onClick1} className="hover:cursor-pointer"> {RightIcon1}</div>
                 <div onClick={onClick2} className="hover:cursor-pointer">  {RightIcon2}</div>
            </div>
        </div>

        <div className="pt-4">
        { variant === "youtube" && 
        <iframe className="w-full"
        src={link.replace("youtu.be" , "www.youtube.com/embed")} title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe> 
        }

        { variant === "tweet" &&
            <blockquote className="twitter-tweet">
            <a href={link.replace("x.com" , "twitter.com")}></a> 
            </blockquote>

         }

         {
            variant === "article" && 
            <div>
            <h3 className="font-bold  text-xl">{title}</h3>
            <div className="flex">
             <div className="font-bold text-xl pr-1 ">*</div>
             <div className="max-w-72 overflow-auto">{body}</div>
            </div>
            </div>
         }
         
        </div>
            <div className=" flex justify-center p-2">
                <span className="bg-slate-400/60  px-1 text-sm rounded-2xl">{tag}</span></div>
        </div>
    </div>
}
import type { ReactElement } from "react";

interface compProps{
     "logo" : ReactElement,
      "text" : string
}

export function SideBarComp(props : compProps){
  return <div className="flex hover:cursor-pointer hover:bg-slate-100 p-2 ">
    <div>{props.logo}</div>
    <div className="ml-4 text-slate-500 font-mono hover:text-slate-800">{props.text}</div>
  </div>
}
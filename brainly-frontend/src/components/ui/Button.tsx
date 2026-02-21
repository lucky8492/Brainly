import type { ReactElement } from "react";

export interface buttonProp{
    variant : "Primary" | "Secondary" ;
    size : "sm" | "md"| "lg";
    text : string;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    fullWidth? : Boolean;
    isLoading? : Boolean;
    onClick? : () => void
} 

const variantStyles = {
    "Primary" : "bg-blue-500 text-white  hover:bg-blue-400",
    "Secondary" : "bg-blue-300 text-voilet-900  hover:bg-blue-50"
}
const defaultStyles = "rounded-md flex p-2 hover:cursor-pointer m-2 "

const size = {
    "sm" : "py-1 px-2 ",
    "md" : "py-2 px-4  text-lg",
    "lg" : "py-4 px-6 text-xl"
}

export const Button = (props : buttonProp) => {
      
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${size[props.size]} ${props
    .fullWidth ? "w-full flex justify-center" : ""} ${props.isLoading ? "opacity-50" :""}` }>
        {props.startIcon ? <div className="pr-2 p-1  ">{props.startIcon}</div> : null} <div className="p-1">{props.text}</div> {props.endIcon}</button>

}

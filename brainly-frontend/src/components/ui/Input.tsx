
export interface types{
        type? : "text" | "password";
}  



export const InputBox = ({placeholder , ref ,types} : { types:string;placeholder:string ; ref?:any })=>{
  return<div className="border mt-2 rounded-xl p-2 border-slate-400 ">
         <input className="outline-none" type={types} ref={ref} placeholder={placeholder}>
                </input>
        </div>
}
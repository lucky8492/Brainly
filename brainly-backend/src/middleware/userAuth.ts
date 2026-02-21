import jwt from "jsonwebtoken"
import express from "express"
import { string } from "zod";
import * as dotenv from "dotenv"
dotenv.config()

const SECRET_KEY  = process.env.SECRET_KEY

declare global{
    namespace Express{
        interface Request{
            userId?:string
        }
    }
}


export const  authUser = async(req : express.Request, res:express.Response, next:express.NextFunction)=>{
    
    const token = req.headers.authorization;
    if(token){
     const isValidUser = jwt.verify(token ,SECRET_KEY!) 
     //@ts-ignore 
     const userId = isValidUser.userId
     req.userId = userId
     next()
    }else{
        res.send("no token")
    }
}
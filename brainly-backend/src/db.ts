
import mongoose = require("mongoose"); 
import {Types} from "mongoose"
import * as  dotenv from "dotenv"
dotenv.config()

const dbUrl =  process.env.MONGODB_URL;
//@ts-ignore
mongoose.connect(dbUrl)

const UserSchema = new mongoose.Schema({
   username : {type: String , required:true , unique : true},
   password : {type : String ,  required:true}
  })
  export const User = mongoose.model("users",UserSchema);
  
const TagsSchema =  new mongoose.Schema({
    title :{type: String , required:true , unique :true}
  })
export const Tags = mongoose.model("tags" ,TagsSchema)


const ContentSchema = new mongoose.Schema({
  type : {type : String , required : true , enum : ["article" , "tweet" , "youtube", "link"]} ,
  link : {type: String },
  title : {type :String ,  required: true},
  body : {type: String},
  tags :  {type: Types.ObjectId , ref:Tags},
  userId : {type :Types.ObjectId , ref : User}
})
 export const Content = mongoose.model("content" ,ContentSchema)


const LinkSchema = new mongoose.Schema({
    hash:{type: String , required:true},
    userId : {type : Types.ObjectId , ref: User , required : true , unique :true}
})
export const  Link = mongoose.model("links" , LinkSchema)




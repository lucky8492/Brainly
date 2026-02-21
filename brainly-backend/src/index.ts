
import {email, string, z} from "zod"
import bcrypt from "bcrypt"
import express  from "express"
import {User , Content , Tags , Link} from "./db.js"
import jwt from "jsonwebtoken"
import { authUser } from "./middleware/userAuth.js"
import mongoose, { Types } from "mongoose"
import { random } from "./util.js"
import * as dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const  SECRET_KEY = process.env.SECRET_KEY


// todo
// add .env file
// try catch
// custom o/p if input format is wrong
// midlleware file 
// tags handel dublicate value check in post content
const app = express();
app.use(express.json())
app.use(cors())

app.post("/api/v1/signup" , async (req, res) => {

   const verifySequence = z.object({
    username : z.string().min(3).max(10),
    password :  z.string().min(8).max(10).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
   })

   const isValidFormat = await verifySequence.safeParse(req.body);
   
   if(!isValidFormat.success){
    res.status(411).json({
        message :"Invalid input format",
        error : isValidFormat.error.issues
    })
    return
   }

   type userCred = z.infer<typeof verifySequence>


      const username = req.body.username
      const password = req.body.password
   

 
   const hasedPassword = await bcrypt.hash(password , 10);
    
   const isUserExits = await User.findOne({
       username : username
   }) 

   if(isUserExits){
    res.status(403).json({
        message : "user already exists"
    })
    return 
   }
      
   const isUserSignedIn = await  User.create({
     username : username,
     password : hasedPassword
   })

   if(!isUserSignedIn){
    res.json({
     message : "somethings went wrong"
    })
    return
   }

   res.json({
    message :"You are signed up"
   })
    
})


app.post("/api/v1/signin" , async (req, res)=>{
   const verifySequence = z.object({
    username : z.string().min(3).max(10),
    password :  z.string().min(8).max(10).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
   })

   const isValidFormat =await verifySequence.safeParse(req.body);
   
    if(!isValidFormat.success){
    res.status(411).json({
        message :"Invalid input format"
    })
    return
   }

   const username =  req.body.username;
   const password =  req.body.password;
   
   const userCred = await User.findOne({
    username :username
   })

   if(!userCred){
    res.status(411).json({
        message : "User not found"
    })
    return
   }
   

   const validPassword = await bcrypt.compare(password , userCred.password);
   if(validPassword){ 
     const token = await jwt.sign({
       userId : userCred._id   
   },SECRET_KEY!)

   if(!token){
      res.status(411).json({
        message: "something went wrong"
      })
     return
   }

   res.json({
    token : token
   })
}else{
    res.status(411).json({
        message : "wrong credential"
    })
}
})


app.post("/api/v1/content" ,authUser , async (req, res)=>{
   const userId = req.userId

   const verifyContentData  = await z.object({
     type : z.enum(["article" , "tweet" ,"youtube" , "link"]),
     title : z.string().min(4).max(50),

   })

   const correctContentFormat = await verifyContentData.safeParse(req.body);
   
   if(!correctContentFormat.success){
    res.status(411).json({
        message: "Wrong input format"
    })
    return
   }
   const type = req.body.type;
   const link = req.body.link;
   const title = req.body.title;
   const tags =  req.body.tags; 
   const body = req.body.body

   const addTag = await Tags.create({
     title: tags
   })
 
   const tagId = addTag._id
   try{ 
    const addContent = await  Content.create({
    type:type,
    link:link,
    title :title,
    body : body,
    tags :new mongoose.Types.ObjectId(tagId),
    userId: new mongoose.Types.ObjectId(userId)    
   })
   if(addContent){
       res.json({
        message :"content added "
       })
   }else{
      res.send("not added content")
   }

}catch(e:unknown){
  if (e instanceof Error) {
    res.send(e.message); 
  } else {
  
    res.send("An unknown error occurred");
  }
}

})


app.get("/api/v1/content" , authUser,async(req, res)=>{
  
   const userId = req.userId;

   const userContent = await Content.find({
      userId : new Types.ObjectId(userId)
   }).populate("userId", "username").populate("tags" , "title")
   if(userContent){
    res.json({
        userContent
    })
   }
})



app.delete("/api/v1/content" ,authUser,async (req, res) => {
  const userId = req.userId
  const contentId = req.body.contentId

  const deleted = await Content.deleteOne({
    _id : contentId,
    userId: new Types.ObjectId(userId)
  })

  if(!deleted){
    res.status(403).json({
      message : "Not deleted"
    })
    return
  }
  res.json({
    message : "Deleted content"
  })
})


app.post("/api/v1/brain/share" , authUser , async(req, res)=>{
   const userId = req.userId;
   const share = req.body.share;
   const contentId = req.body.contentId;

   const hash  = random(10)
    if(share){
      const foundLink = await Link.findOne({
        userId : new Types.ObjectId(userId)
      })

      
      if(foundLink){
        res.json({
          message : foundLink.hash
        })
      }
      await Link.create({
        hash : hash,
        userId : new Types.ObjectId(userId)
      })
      res.json({
        meassage:hash
      })
    }else if(contentId){
     const response =  await Link.findOne({
         userId : new Types.ObjectId(contentId)
       })
     if(response){
       res.json({
        message : response.hash
       })
     }else{
       const response =  await Link.create({
        hash: hash,
        userId : new Types.ObjectId(contentId)
       })
       res.json({
        message : hash
       })
     }

    }else{
      await Link.deleteOne({
        userId: new Types.ObjectId(userId)
      })
      res.json({
        message :  "Disable shareble link"
      })
    }

   
})


app.get("/api/v1/brain/:shareLink" , async(req, res)=>{
  const shareLink = req.params.shareLink

  const user = await Link.findOne({
       hash : shareLink
  })  
   if(!user){
    res.status(411).json({
      message: "content not found" 
    })
    return
   }

  const userContent = await Content.find({
    userId :new Types.ObjectId(user?.userId)
  })


  res.json({
    content : userContent 
  })
})

app.listen(3000)
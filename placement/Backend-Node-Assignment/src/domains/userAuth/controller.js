/*For crud function but without method such as get ,post ,delete and update of the given collection. this will handled by route.js */

const User =require("./model")
const jwt = require('jsonwebtoken');
const logger=require("../../utils/logger/logger")
require('dotenv').config();

const generateToken=(user)=>{   
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register=async(req)=>{
    try{
        let user=await User.findOne({email:req.body.email})
       if(user){
        return {
            infomess: "emailexist",
            infodata: null
          };
       }   
      user=await User.create(req.body);
      const token = generateToken(user)  
      return {user,token};
    }
    catch(err){
        return {message:err.message}
    }
}



const login=async(req)=>{
    try{
        const user = await User.findOne({ email: req.body.email });

        
        if(!user){
            return {
                infomess: "invacred",
                infodata: null
              };
        }
        const match=user.checkPassword(req.body.password)
       if(!match){
        return {
            infomess: "invacred",
            infodata: null
          };
       }
       const token = generateToken(user)  
       logger.info(
        `: transactionId: => successfully logged in - ${null}`
      );
       return {
        infomess: "success",
        infodata: [{email:user.email},token]
      };
      
    }
    catch(err){
        return {message:err.message}
    }
}

module.exports={register,login}
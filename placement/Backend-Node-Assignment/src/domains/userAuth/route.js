/* For routing using methods but not functionality  */
const express=require("express");
const {register,login}=require("./controller.js")
const resGen=require("../../utils/response/resGenerator.js")
const router = express.Router();

// app.use(express.json());

router.post("/register",async(req,res)=>{
    try{
      const registeruser=await register(req)
      
      return resGen(res,registeruser)
    }
    catch(err){
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    try{
      const loginuser=await login(req)
      return resGen(res,loginuser)
    }
    catch(err){
        console.log(err)
    }
})
// app.post("/login",login)
// router.route("/register").post(register);
// router.route("/login").post(login);

module.exports=router

/*This is parent Route file where all collections apis routing will be declared with end poitns   */

const express =require("express");
const router=express.Router();

const userRegister=require("../domains/userAuth/index")
const userLogin=require("../domains/userAuth/index")

router.use("/",userRegister)
router.use("/",userLogin)

module.exports=router

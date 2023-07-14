const express = require('express')
const router = express.Router()
const userController = require("../controller/userController")
const winston = require('winston')
const expressWinston = require('express-winston');


router.use(expressWinston.logger({
transports:[
new transports.console(),
new winston.transport.file({

filename:"error.log"


})


]


})

)
// middleware that is specific to this router
router.use((req, res, next) => {
   console.log("API called",new Date());
    //token autheticate
    // anythink
    next()
})


router.post("/addUser",function(req,res){
    userController.addNewUser(req,res);

 })
 router.get("/getUsers",function(req,res){
     userController.getAllUser(req,res);
  })
  router.get("/getUser/:userId",function(req,res){
    userController.getParticularUser(req,res);
  })
  router.get("/getUserByEmailId",function(req,res){
    userController.getParticularUserByEmail(req,res);
  })
  router.put("/updateUser/:userId",function(req,res){
     userController.updateUser(req,res);
  })
  router.delete("/deleteUser/:userId",function(req,res){
     userController.deleteUser(req,res);
  })
 module.exports = router;
 
module.exports = router;
const Mongoose  = require("../config/mongoDBConfig")
const userModel = require("../model/userSchema");
const winston = require('winston');
//const validator = require('validator');
function InputValidation(req,res)
{
  const validator = require('validator');
  const isEmailId=validator.isEmail(req.body.emailId);
  const isMobile=validator.isMobilePhone(req.body.mobileNo);
  if (!isEmailId)
  {
    res.send('Unidentified Email Address');
    console.log('Email Id Wrong');
    return false;
  }
else if(!isMobile)
{
  res.send('Mobile no invalid');
    console.log('Mobile no Invalid');
    return false;
}
  else
  {
    return true;
  }
  
 
}
const userController = {

    "addNewUser" :  async  function(req,res){
      //const isEmailId=validator.isEmail(req.body.emailId);
      
      if (InputValidation(req,res))
      {
   
        // validation will be your homework 
      // console.log("add user process started pid=9989888" );
       //console.log("save User Data pid=9989888", req.body );
        let insertData = {
                            "firstName" : req.body.firstName,
                            "lastName" : req.body.lastName,
                            "password" : req.body.password,
                            "address" : req.body.address,
                            "emailId" : req.body.emailId,
                            "mobileNo" : parseInt(req.body.mobileNo)
                        };

        console.log((req.body));
        const user = new userModel(insertData);
        try {
          await user.save(); // save data inside users table 
          res.send(user); //sending user json as response to client
  //        logger.info("User Saved successfully pid=9989888" ) // 7 day 30
            console.log("save User Data ", req.body )
      } catch (error) {
    //      logger.error("User Saved Error pid=9989888"+error )
          res.status(500).send(error);
      }
    }
    else
    {
      res.send('Wrong Input Data');
      console.log('Wrong Input Data');
    }
   },
   "getAllUser" : function(req,res){
    console.log("getting all user");
    userModel.find({}).then((list)=>{
        res.send(list);
      }).catch((err)=>{
        res.status(500).send(err);
      })
},
"getParticularUser" : function(req,res){
    userModel.find({"_id":req.params.userId}).then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
},
"getParticularUserByEmail" : function(req,res){
   // select firstName from users where emailId= "vvvvvv";
   console.log(req.query.email)
    userModel.find({"emailId":req.query.email}).select({"firstName":1}).then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
},
"updateUser" : function(req,res){
    res.send("hello world from addNewUser")
},
"deleteUser" : function(req,res){
    res.send("hello world from addNewUser")
}
}

module.exports = userController;
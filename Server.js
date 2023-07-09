const express = require('express');
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//const userModel = require("./model/userSchema");
const userRoute = require("./route/userRoute");
const productRoute=require("./route/productRoute");
const adminRoute=require("./route/adminRoute");
const app = express()
const port = 8003;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/userRoute",userRoute);
app.use("/productRoute",productRoute);
app.use("/adminRoute",adminRoute);


// in this page we will have only middleware and code to run server
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
//  const mongoUrl = 'mongodb://kaustavnarayanbasu:pU7Q1Gl9qP17iaQ1@ac-afdcwv2-shard-00-00.2mh9tsc.mongodb.net:27017,ac-afdcwv2-shard-00-01.2mh9tsc.mongodb.net:27017,ac-afdcwv2-shard-00-02.2mh9tsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-119duv-shard-0&authSource=admin&retryWrites=true&w=majority';
//  /*
// // // mongodb connection
//  mongoose.connect(mongoUrl)
//    .then(() => console.log('Connected!'))
//   .catch((error)=>{
//      console.log(error);
//   })
//   */

//   mongoose.connect(mongoUrl
// ,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });
// const userModel = require("./model/userSchema");
// app.post("/add_user", async (request, response) => {
//   let insertData = {"name" : request.body.name,
// "age" : request.body.age};
//   const user = new userModel(insertData);
//   console.log("app hit");
//   try {
//     await user.save();
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


// //app.post('/post',(req, res)=>{
// //   res.send("This is out post function kaustav");
// // });

// //  app.put('/put',(req, res)=>{
// //   res.send("This is out put function kaustav");


// //  });

// // app.delete('/delete',(req, res)=>{
// //  res.send("This is out delete function kaustav");


// // });



// // app.get("/get", (req, res) => {
// //   res.send("Hello World!Kaustav welcome to node js");
// //  });
 
// app.get("/get_user", (request, response) => {
//   userModel.find({}).then((list)=>{
//     response.send(list);
//   }).catch((err)=>{
//     response.status(500).send(error);
//   })
//    });

//    app.get('/get_Perticular_user/Id',(request, response)=>{
//     userModel.find({"_id":"64a19fe32f76234d84e354b5"}).then((list)=>{
     
//       response.send(list);
//     }).catch((err)=>{
//       response.status(500).send(error);
//     })
//      });

//      app.put('/update_perticular_user',async(request, response)=>{
//       // let UpdateData = {"name" : request.body._id,
//       // "_id" : request.body._id};
//       // const user = new userModel(request.body);
//       // userModel.findById(UpdateData._id).then((list)=>{
//       //    user.save();
//       // }).catch((err)=>{
//       //   response.status(500).send(error);
//       // })
//       let UpdateData = {"_Id":request.body._id,"name" : request.body.name,
//       "age" : request.body.age};
//       const user = new userModel(UpdateData);
//       console.log("app hit for update");
//     try{
//     await userModel.updateOne(
//       { "_id":"64a19fe32f76234d84e354b5" },
//       { $set: { "name" : "Ramesh Narayan Ghosh" } }
//       );
//       response.send(user);
//     }
//     catch (error) {
//       response.status(500).send(error);
//     }
    
//       });


//       app.delete('/delete_perticular_user',async(request, response)=>{
//         try{
//           await userModel.deleteOne(
//             { "_id":"64a1a4a82f76234d84e354bb" })
            
//             response.send(user);
//           }
//           catch (error) {
//             response.status(500).send(error);
//             }
        
//         });

//         app.put('/update_perticular_user_by_id',async(request, response)=>{
//           try{

//             const filter = { '_Id': '64a19fe52f76234d84e354b7' };
//             const update = { 'name': 'Dinesh Sing'};
            
//             let doc = await Character.findOneAndUpdate(filter, update);
//             console.log('updated');
//             response.send(doc);

//           }
//           catch(error){
//             response.status(500).send(error);
//           }
          
//         });
//         //Update with dinamic user
//         app.put('/updateUser/:id', (req, res) => {
//           console.log("Id to update:::::", req.params.id)
//           const taskToUpdate = req.body;
//           userModel.findOneAndUpdate({"_id":req.params.id},taskToUpdate)
//           .then((user)=>{
//               res.send("User Updated Successfully");
//           }).catch((err)=>{
//               res.send(err);
//           })
//       })


//       /* API to Hard delete particular user Details in MongoDB */
//       app.delete('/deleteUser/:userId',function(req,res){
//         userModel.findOneAndDelete({"_id":req.params.userId})
//       .then((user)=>{
//           res.send(user);
//       }).catch((err)=>{
//           res.send(err);
//       })
//       })
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});



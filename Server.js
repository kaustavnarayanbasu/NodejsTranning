const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
const port = 8014
//need this middlewire to read the json data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 const mongoUrl = 'mongodb://kaustavnarayanbasu:pU7Q1Gl9qP17iaQ1@ac-afdcwv2-shard-00-00.2mh9tsc.mongodb.net:27017,ac-afdcwv2-shard-00-01.2mh9tsc.mongodb.net:27017,ac-afdcwv2-shard-00-02.2mh9tsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-119duv-shard-0&authSource=admin&retryWrites=true&w=majority';
 /*
// // mongodb connection
 mongoose.connect(mongoUrl)
   .then(() => console.log('Connected!'))
  .catch((error)=>{
     console.log(error);
  })
  */

  mongoose.connect(mongoUrl
,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const userModel = require("./model/userSchema");
app.post("/add_user", async (request, response) => {
  let insertData = {"name" : request.body.name,
"age" : request.body.age};
  const user = new userModel(request.body);
  console.log("app hit");
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});


//app.post('/post',(req, res)=>{
//   res.send("This is out post function kaustav");
// });

//  app.put('/put',(req, res)=>{
//   res.send("This is out put function kaustav");


//  });

// app.delete('/delete',(req, res)=>{
//  res.send("This is out delete function kaustav");


// });



// app.get("/get", (req, res) => {
//   res.send("Hello World!Kaustav welcome to node js");
//  });
 
app.get("/get_user", (request, response) => {
  userModel.find({}).then((list)=>{
    response.send(list);
  }).catch((err)=>{
    response.status(500).send(error);
  })
   });

   app.get('/get_Perticular_user/name',(request, response)=>{
    userModel.find({name:'Kaustav Basu'}).then((list)=>{
      response.send(list);
    }).catch((err)=>{
      response.status(500).send(error);
    })
     });

     app.put('/update_perticular_user',(req, res)=>{
      let UpdateData = {"name" : request.body.name,
      "_id" : request.body._id};
      const user = new userModel(request.body);
      userModel.findById(UpdateData._id).then((list)=>{
         user.save();
      }).catch((err)=>{
        response.status(500).send(error);
      })
    
    
      });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});



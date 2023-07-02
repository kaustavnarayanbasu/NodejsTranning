const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 8001

const mongoUrl = 'mongodb://kaustavnarayanbasu:pU7Q1Gl9qP17iaQ1@ac-afdcwv2-shard-00-00.2mh9tsc.mongodb.net:27017,ac-afdcwv2-shard-00-01.2mh9tsc.mongodb.net:27017,ac-afdcwv2-shard-00-02.2mh9tsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-119duv-shard-0&authSource=admin&retryWrites=true&w=majority';
// mongodb connection
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected!'))
  .catch((error)=>{
    console.log(error);
  })
// app.post('/post',(req, res)=>{
//   res.send("This is out post function kaustav");
// });

// app.put('/put',(req, res)=>{
//   res.send("This is out put function kaustav");


// });

// app.delete('/delete',(req, res)=>{
//   res.send("This is out delete function kaustav");


// });



// app.get("/", (req, res) => {
//   res.send("Hello World!Kaustav welcome to node js");
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
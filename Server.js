const express = require("express");
const app = express();

const port = 8001;

app.post('/post',(req, res)=>{
  res.send("This is out post function kaustav");
});

app.put('/put',(req, res)=>{
  res.send("This is out put function kaustav");


});

app.delete('/put',(req, res)=>{
  res.send("This is out delete function kaustav");


});

app.get("/", (req, res) => {
  res.send("Hello World!Kaustav welcome to node js");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
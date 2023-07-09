const express = require('express')
const router = express.Router()
// middleware that is specific to this router
router.use((req, res, next) => {
   
    //token autheticate
    // anythink
    next()
})
router.get("/",function(req,res){
    res.send("hello world kaustav");
 })

 router.get("/second_kaustav",function(req,res){
    res.send("hello world kaustav from second");
 })
 router.get("/third_kaustav",function(req,res){
    res.send("hello world kaustav from third");
 })
 module.exports = router;
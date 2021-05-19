const express = require ("express")
const route = express.Router()
const stdata = require("../conn/model")



route.get("/",(req,res)=>{

    res.render("student")
})

route.post("/",(req,res)=>{

    const  conn = new stdata({
        name : req.body.name,
        lname : req.body.lname
    })
    console.log(conn);
    conn.save()

})

route.get("/student",(req,res)=>{


res.render("stulist")
   
})





module.exports = route

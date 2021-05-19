const express = require ("express")
const app = express()
const Route = require("./route/controuller")
const Port = process.env.PORT || 8001
require("./conn/db")
const bodyParser = require("body-parser")

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(Route)




app.listen(Port, ()=>{console.log(`running pprt ${Port}`);})



const mongoose = require ("mongoose")
mongoose.connect("mongodb://localhost:27017/lnctdb",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex :true
}).then(()=>{console.log("connection succe");}).catch((e)=>{console.log(e)})












const mongoose = require ("mongoose")

const StuSchema = new mongoose.Schema(
{
    name : {
        "type" : "string"
    }, 
    
    lname : {
        "type" : "string"
    }
}
)

const model = new mongoose.model("Student",StuSchema)

module.exports = model


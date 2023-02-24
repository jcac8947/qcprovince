const mongoose = require("mongoose")
const uri = "mongodb+srv://custergls:P8FZdssm7SCi0fV9@testnodejs.zmlnbs8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri)
.then(()=>{
    console.log("mongodb connected");
})
.catch (()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model( "collection", newSchema)

module.exports = collection
const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({

    description:{type:String,required:true},
    isCompleted:{type:Boolean,required:true,default:false}

})

const Todo = mongoose.model("Todo",todoSchema)

module.exports={Todo}
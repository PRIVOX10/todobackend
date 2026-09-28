const {Todo}=require("../models/Todo")
class TodoController{

    async addTodoItem(req,res){
        try{
            const {description}=req.body
            const newItem=await Todo.create({description})
            res.status(201).json({
                "message":"item added successfully",
                data:newItem
            })
        }
        catch(error){
            console.error(error)
            res.json({error})
        }
    }
}

module.exports=TodoController
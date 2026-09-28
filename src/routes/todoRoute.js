const express=require('express')
const router=express.Router()

const TodoController=require('../controllers/todoController')
const todoController=new TodoController()

router.post("/additem",todoController.addTodoItem)

module.exports=router
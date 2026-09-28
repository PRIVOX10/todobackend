const express=require('express')
require("dotenv").config()
const port=process.env.PORT || 3000
const todoRoute=require("./src/routes/todoRoute")
const bookRoute=require("./src/routes/bookRoute")
const connectDB = require('./src/config/db')

const app=express()

connectDB()

app.use(express.json())
app.use("/todos",todoRoute)
app.use("/books",bookRoute)


app.listen(port,()=>{
    console.log("server is running at port :",port)
})

const mongoose= require("mongoose")
require("dotenv").config()
const mongourl=process.env.MONGO_DB_URL

const connectDB=async()=>{
    try{
        await mongoose.connect(mongourl)
        console.log("mongodb connected")
    }
    catch(error){
        console.error(error)
    }
}

module.exports=connectDB
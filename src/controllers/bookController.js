const mongoose=require("mongoose")
const {Book}=require("../models/Book")

class BookController{

    async getBooks(req,res){
        try{
            const {genre}=req.query
            let books
            if(genre){
                books=await Book.find({genre})
            }else{
                books=await Book.find()
            }
            res.status(200).json(books)
        }
        catch(error){
            console.error(error)
            res.status(500).json({error})
        }
    }

    async getBookById(req,res){
        try{
            const {id}=req.params
            if(!mongoose.isValidObjectId(id)){
                return res.status(404).json({"message":"book not found"})
            }
            const book=await Book.findById(id)
            if(!book){
                return res.status(404).json({"message":"book not found"})
            }
            res.status(200).json(book)
        }
        catch(error){
            console.error(error)
            res.status(500).json({error})
        }
    }

    async addBook(req,res){
        try{
            const {title,author,year,genre,isRead}=req.body
            const newBook=await Book.create({title,author,year,genre,isRead})
            res.status(201).json({
                "message":"book added successfully",
                data:newBook
            })
        }
        catch(error){
            console.error(error)
            res.status(500).json({error})
        }
    }

    async updateBook(req,res){
        try{
            const {id}=req.params
            if(!mongoose.isValidObjectId(id)){
                return res.status(404).json({"message":"book not found"})
            }
            const book=await Book.findByIdAndUpdate(id,req.body,{new:true})
            if(!book){
                return res.status(404).json({"message":"book not found"})
            }
            res.status(200).json({
                "message":"book updated successfully",
                data:book
            })
        }
        catch(error){
            console.error(error)
            res.status(500).json({error})
        }
    }

    async deleteBook(req,res){
        try{
            const {id}=req.params
            if(!mongoose.isValidObjectId(id)){
                return res.status(404).json({"message":"book not found"})
            }
            const book=await Book.findByIdAndDelete(id)
            if(!book){
                return res.status(404).json({"message":"book not found"})
            }
            res.status(200).json({"message":"book deleted successfully"})
        }
        catch(error){
            console.error(error)
            res.status(500).json({error})
        }
    }

    async markAsRead(req,res){
        try{
            const {id}=req.params
            if(!mongoose.isValidObjectId(id)){
                return res.status(404).json({"message":"book not found"})
            }
            const book=await Book.findByIdAndUpdate(id,{isRead:true},{new:true})
            if(!book){
                return res.status(404).json({"message":"book not found"})
            }
            res.status(200).json({
                "message":"book marked as read",
                data:book
            })
        }
        catch(error){
            console.error(error)
            res.status(500).json({error})
        }
    }
}

module.exports=BookController

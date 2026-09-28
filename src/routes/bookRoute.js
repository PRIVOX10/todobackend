const express=require('express')
const router=express.Router()

const BookController=require('../controllers/bookController')
const bookController=new BookController()

router.get("/",bookController.getBooks)
router.get("/:id",bookController.getBookById)
router.post("/",bookController.addBook)
router.put("/:id",bookController.updateBook)
router.delete("/:id",bookController.deleteBook)
router.patch("/:id/read",bookController.markAsRead)

module.exports=router

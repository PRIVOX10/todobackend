require("dotenv").config()
const mongoose=require("mongoose")
const {Book}=require("./src/models/Book")

const books=[
    {title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy",isRead:true},
    {title:"Harry Potter and the Philosopher's Stone",author:"J.K. Rowling",year:1997,genre:"fantasy",isRead:true},
    {title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy",isRead:false},
    {title:"1984",author:"George Orwell",year:1949,genre:"dystopia",isRead:true},
    {title:"Brave New World",author:"Aldous Huxley",year:1932,genre:"dystopia",isRead:false},
    {title:"Dune",author:"Frank Herbert",year:1965,genre:"science-fiction",isRead:false},
    {title:"The Martian",author:"Andy Weir",year:2011,genre:"science-fiction",isRead:true},
    {title:"Le Petit Prince",author:"Antoine de Saint-Exupery",year:1943,genre:"classic",isRead:true},
    {title:"L'Etranger",author:"Albert Camus",year:1942,genre:"classic",isRead:false},
    {title:"Sherlock Holmes: A Study in Scarlet",author:"Arthur Conan Doyle",year:1887,genre:"mystery",isRead:false}
]

const seed=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        await Book.deleteMany()
        await Book.insertMany(books)
        console.log("books added :",books.length)
    }
    catch(error){
        console.error(error)
    }
    await mongoose.disconnect()
}

seed()

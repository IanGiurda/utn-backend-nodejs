const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/books");

const bookSchema = new mongoose.Schema({title: String, author: String});

const Book = mongoose.model("Book",bookSchema, "books");

module.exports = Book;


const express = require("express");
const path = express.Router();
const Book = require("../controller/book-controller");
const Category = require("../controller/category-controller");

//get all books, Request Method: Get
path.get("/books", Book.getAllBook);

// create new book, Request Method: Post
path.post("/books", Book.save);

// get user by id, Request Method: Get
path.get("/books/:id", Book.getById);

path.get("/books/categories/:id", Book.getByCategoryId);

path.put("/books/:id", Book.update);

path.delete("/books/:id", Book.deleteBook);

//categories routes
path.post("/categories", Category.addCategory);

path.post("/categories", Category.getCategories);

path.get("/categories/:id", Category.categoryById);

path.put("/categories/:id", Category.updateCategory);

path.delete("/categories/:id", Category.deleteCategory);

module.exports = path;
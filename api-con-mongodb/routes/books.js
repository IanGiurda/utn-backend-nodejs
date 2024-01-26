const express = require("express");
const router = express.Router();

const Book= require("../models/Book");

// Obtener todos los libros
router.get("/", async (req,res) => {
    try {
        const books= await Book.find();
        res.json(books); // devolvemos todos los libros
    } catch (error) {
        res.status(500).json({error : "ERROR al obtener los libros"});
    }
});

router.post("/", async (req, res) => {
    try {
        const newBook = new Book(req.body);
        
        // Validar el libro utilizando el método validateSYnc proporcionado por el modelo
        const validationError = newBook.validateSync();
        if (validationError) {
            return res.status(400).json({ error: "Los datos del libro no cumplen con el esquema" });
        }
        
        // Si la validación pasa, guarda el libro en la base de datos
        await newBook.save();
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ error: "ERROR al agregar el nuevo libro" });
    }
});

router.put("/:id", async(req, res) => {
    try {
        const updatedBook=await Book.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if(!updatedBook){
            res.status(404).json({error :"ERROR: Libro no encontrado"})
        } else {
            res.json(updatedBook);
        }

    } catch (error) {
        res.status(500).json({error : "ERROR al editar el libro"});
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const deletedBook=await Book.findByIdAndDelete(req.params.id);
        if(!deletedBook){
            res.status(404).json({error :"ERROR: Libro no encontrado"})
        } else {
            res.json({ message : "Libro eliminado correctamente"})
        }
    } catch (error) {
        res.status(500).json({error :"ERROR al intentar eliminar el libro"})
    }
});

module.exports = router;
const express = require("express");
const Book = require("../models/Book");

const router = express.Router();


router.get("/", (req,res) => {
    const books= Book.find()
        .then( (books) => {
            res.json(books);
        })
        .catch( (err) => {
            console.error(err);
            res.status(500).json({err : "error al obtener los libros"});
        })
});


router.post("/", (req,res)=>{
    const newBook= new Book(req.body);
    newBook.save()
        .then(savedBook => {
            console.log("Libro guardado exitosamente: ", savedBook);
            res.status(201).json(savedBook);
        })
        .catch( (err) =>{
            res.status(500).json({ error: "Error al publicar el Libro" });
        })

});

router.put("/:id", (req,res) => {
    const editedBook= Book.findByIdAndUpdate(req.params.id,req.body, {new : true})
        .then( (editedBook) => {
            console.log("Libro editado exitosamente: ", editedBook);
            res.status(200).json(editedBook);
        })
        .catch( (err) => {
            res.status(500).json({ error: "Error al actualizar el Libro" });

        })
})

router.delete("/:id", (req,res) => {
    const deletedBook= Book.findByIdAndDelete(req.params.id, req.body)
        .then( (deletedBook) => {
            console.log("Libro eliminado exitosamente", deletedBook);
            res.status(200).json(deletedBook);
        })
        .catch( (err) => {
            res.status(500).json({error : "Error al eliminar el libro"});
        })
});


module.exports = router;
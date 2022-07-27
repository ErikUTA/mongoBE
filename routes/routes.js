const express = require('express');
const Cars = require('../models/cars');
const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const allcars = await Cars.find();
        res.json(allcars);
    }catch(error){
        res.status(500).send(error);
    }
});

router.post("/insert", async (req, res) => {
    try{
        if(req.body.nombre == "" || req.body.color == ""){
            res.send(400, "Complete los campos obligatorios");
        }
        const modelo = new Cars({            
            nombre: req.body.nombre,
            color: req.body.color
        });
        const result = await modelo.save();
        res.json(result);
    }catch(error){
        res.send(error);
    }
});


router.put('/edit', async (req, res) => {
    try{        
        if(req.body.id == "" || req.body.nombre == "" || req.body.color == ""){
            res.send(400, "Complete los campos obligatorios");
        }
        const editar = await Cars.findByIdAndUpdate(req.body.id, {
            nombre: req.body.nombre,
            color: req.body.color,
            updatedAt: Date.now(),
        });
        res.json(editar);
    }catch(error){
        res.send(error);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try{
        const deleted = await Cars.findByIdAndDelete(req.params.id);
        res.send(deleted);        
    }catch(error){
        res.send(error);
    }
});

module.exports = router;
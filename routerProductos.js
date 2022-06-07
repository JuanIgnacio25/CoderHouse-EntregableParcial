const express = require('express');
const routerProductos = express.Router();
const Contenedor = require('./contenedorProductos');
const claseProductos = new Contenedor();

routerProductos.get('/:id' , async(req,res) => {
    id = Number(req.params.id);
    console.log(id);
    const productos =  claseProductos.getAllId(id);
    res.send(productos);
});

routerProductos.post('/:id' , (req,res) => {

})

routerProductos.put('/:id' , (req,res) => {
})

routerProductos.delete('/:id' , (req,res) => {

})
module.exports = routerProductos;
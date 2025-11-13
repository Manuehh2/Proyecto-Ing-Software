const asyncHandler = require("express-async-handler");
const Tarea = require("../models/tareasModel"); 


const getTareas = asyncHandler(async(req, res) => {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
})  
const createTareas = asyncHandler(async(req, res) => {
    if (!req.body.texto) {
        res.status(400);
        throw new Error("Por favor teclea el texto de la tarea");
    }
    const tarea = await Tarea.create({texto: req.body.texto});
    res.status(200).json({"Mensaje":"createTareas"});
})

const updateTareas = asyncHandler(async(req, res) => {
    const tareas = await Tarea.findById(req.params.id);
    if (!tareas) {
        res.status(404);
        throw new Error("Tarea no existe");
    }

    //verificamos que la tarea pertenece al usuario
    if (tareas.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("No autorizado");
    }
else {
    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(tareaUpdated);
    }

})
const deleteTareas = asyncHandler(async(req, res) => {
       const tareas = await Tarea.findById(req.params.id);
    if (!tareas) {
        res.status(404);
        throw new Error("Tarea no existe");
    }

    //verificamos que la tarea pertenece al usuario
    if (tareas.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("No autorizado");
    }
else {
    await tareas.deleteOne();
    res.status(200).json({id: req.params.id});
    }

    
    
    res.status(200).json({"Mensaje":"deleteTareas"});   
})
module.exports = {getTareas , createTareas, updateTareas, deleteTareas}
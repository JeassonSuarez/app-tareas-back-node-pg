import { Router } from "express";
import { actualizarTarea, cambiarPrioridad, crearTarea, eliminarTarea, obtenerTareas } from "../controllers/tarea.controller.js";

const tarea = Router();

tarea.get('/listartareas/:idcliente', obtenerTareas)
tarea.post('/creartarea', crearTarea)
tarea.put('/finalizar', actualizarTarea)
tarea.put('/eliminar', eliminarTarea)
tarea.put('/cambiarPrioridad', cambiarPrioridad)

export default tarea;
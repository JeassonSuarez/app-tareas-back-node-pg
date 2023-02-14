import { Router } from "express";
import { creaUsuario, traeUsuario } from "../controllers/usuario.controller.js";
 
const usuario = Router();

usuario.post('/iniciarSesion', traeUsuario)
usuario.post('/usuario', creaUsuario)

export default usuario;
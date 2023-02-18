import db from "../pg.js";

export const creaUsuario = async (req, res) =>{

}

export const traeUsuario = async (req, res) => {
    const b = req.body;
    console.log(b);
    db.one(`select idusuario, nusuario from usuario where nusuario='${b.nusuario}' and contrasena='${b.pass}'`)
    .then((data)=>{
        let respuesta = [data];
        console.log("tamaño del arreglo de sesiones", respuesta.length);
        respuesta.length===1 ? res.json({auth:true, id:respuesta[0], mensaje:'Se ha logueado'}) : res.json({auth:false, id:null, mensaje:'No se ha podido loguear'});
    })
    .catch((error)=>{
        res.json({auth:false, mensaje:"Ha ocurrido un error", error, id:null})
    })
}

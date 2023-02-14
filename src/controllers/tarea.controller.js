import db from "../pg.js";

export const crearTarea = async (req, res) => {
  console.log(req.body);
  const idusuario = req.body.idusuario;
  const {
    titulo,
    descripcion,
    fEntrega,
    fCreacion,
    fFinalizacion,
    prioridad,
    estado,
    categoria,
  } = req.body.nuevaTarea;

  //   console.log(fCreacion, fEntrega, idusuario);
  db.query(
    `insert into tarea (idusuario, ntarea, descripcion, fcreacion, fentrega, ffinalizacion, prioridad, estado, categoria) values ('${idusuario}', '${titulo}', '${descripcion}', '${fCreacion}', '${fEntrega}', NULL, '${prioridad}', '${estado}', '${categoria}') RETURNING idtarea`
  )
    .then((respuesta) => {
      respuesta.length > 0
        ? res.json({ creacion: true, mensaje: "Se ha creado la tarea" })
        : res.json({
            creacion: false,
            mensaje: "No se ha podido crear la tarea",
          });
    })
    .catch((error) => {
      res.json({
        creacion: false,
        mensaje: "No se ha podido crear la tarea",
        error,
      });
    });

  //   respuesta.affectedRows === 1
};

export const obtenerTareas = async (req, res) => {
  console.log(req.params.idcliente);
  db.query(
    `select * from tarea where idusuario=${parseInt(
      req.params.idcliente
    )} and NOT estado='D'`
  )
    .then((respuesta) => {
      respuesta.length > 0
        ? res.json({ hay: true, respuesta, mensaje: "Cargando tareas..." })
        : res.json({
            hay: false,
            respuesta,
            mensaje: "No ha agregado tareas aun...",
          });
    })
    .catch((error) => {
      res.json({
        hay: false,
        error,
        mensaje: "Error...",
      });
    });
};

export const actualizarTarea = async (req, res) => {
  console.log(req.body);
  db.query(
    `update tarea set estado='F', ffinalizacion=CURRENT_DATE where idtarea='${req.body.idtarea}' RETURNING idtarea`
  )
    .then((respuesta) => {
      respuesta.length > 0
        ? res.json({ fin: true, mensaje: "Se ha finalizado la tarea" })
        : res.json({ fin: false, mensaje: "No se ha finalizado la tarea" });
    })
    .catch((error) => {
      res.json({ fin: false, mensaje: "No se ha finalizado la tarea", error });
    });

  // console.log('aca',respuesta);
};

export const eliminarTarea = async (req, res) => {
  console.log(req.body);
  db.query(
    `update tarea set estado='D' where idtarea='${req.body.idtarea}' RETURNING idtarea`
  )
    .then((respuesta) => {
      respuesta.length > 0
        ? res.json({ del: true, mensaje: "Se ha eliminado la tarea" })
        : res.json({ del: false, mensaje: "No se ha eliminado la tarea" });
    })
    .catch((error) => {
      res.json({ del: false, mensaje: "No se ha eliminado la tarea", error });
    });
};

export const cambiarPrioridad = async (req, res) => {
  console.log(req.body);
  db.query(
    `update tarea set prioridad='${req.body.p}' where idtarea='${req.body.idt}' RETURNING idtarea`
  )
    .then((respuesta) => {
      respuesta.length > 0
        ? res.json({
            cp: true,
            mensaje: "Se ha cambiado la prioridad de la tarea",
          })
        : res.json({
            cp: false,
            mensaje: "No se ha cambiado la prioridad de la tarea",
          });
    })
    .catch((error) => {
      res.json({
        cp: false,
        mensaje: "No se ha cambiado la prioridad de la tarea",
        error,
      });
    });
};

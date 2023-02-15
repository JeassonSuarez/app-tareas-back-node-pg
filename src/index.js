import express from 'express';
import cors from "cors";
import tarea from '../src/routes/tarea.routes.js'
import usuario from '../src/routes/usuario.routes.js'
import { PUERTO, URLDB } from './config.js';
import db from './pg.js';


const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    console.log(URLDB);
    db.one(`select * from usuario`).then(data=>{
        res.json({data})
    }).catch(error=>{
        res.json({error})
    })
})

app.use(usuario)
app.use(tarea)

app.listen(PUERTO);
console.log('puerto on port', PUERTO)
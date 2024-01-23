import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger-output.json";

import espacioRouter from "./Espacios/infraestructure/rest/espacios.rest"
import departamentoRouter from "./Departamentos/infraestructure/rest/departamentos.rest"

import DepartamentosUseCases from "./Departamentos/application/departamentos.usecases";
import DepartamentoRepositorySQL from "./Departamentos/infraestructure/db/departamentos.repositorySQL";

const departamentosUseCases: DepartamentosUseCases = new DepartamentosUseCases(new DepartamentoRepositorySQL);

const app = express();
const port = 8080;

app.use(express.json());

/**Aqui van los puertos del progama*/

app.use("/api/espacios", espacioRouter);
app.use("/api/departamentos", departamentoRouter);



/**Aqui va el puerto del swagger*/

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput,{explorer:true}));

/**Aqui va el puerto del ejs */

import path from "path";

app.set("view engine", "ejs");

app.get('/departamentos', async function(req, res) {
/*
    let imprimir =   [
        {
            "nombre": "FRONT"
        },
        {
            "nombre": "BACK"
        }
    ]
*/
    
    let departamentos = await departamentosUseCases.getAllDepartamentos();

    res.render('departamentos.ejs',{Departamentos: departamentos});
});

app.get('/departamentos/:path', async function(req, res) {

    let articulos =  await departamentosUseCases.getDepartamentoByNombre(req.params.path);

    res.render('articulos.ejs',{Articulos: articulos});
});


app.listen(port, () => {    
    console.log( `server started at http://localhost:${port}`);
});

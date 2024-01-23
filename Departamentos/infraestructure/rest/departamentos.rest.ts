import DepartamentosUseCases from "../../application/departamentos.usecases";
import DepartamentosRepositorySQL from "../db/departamentos.repositorySQL";
import Departamento from "../../domain/departamentos"
import express from "express"
import Articulo from "../../../Articulos/domain/articulos";

const router = express.Router();
const departamentosUseCases: DepartamentosUseCases = new DepartamentosUseCases(new DepartamentosRepositorySQL);

router.get("/", async (req, res) => {
    try {
        const resultado = await departamentosUseCases.getAllDepartamentos();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/:nombre", async (req, res) => {
    try {

        const articulos = await departamentosUseCases.getDepartamentoByNombre(req.params.nombre);

        let final = {
            "nombre": req.params.nombre,
            articulos
        }
        

        res.json(final);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/:nombre/espacio/:espacio", async (req, res) => {
    try {

        const articulos = await departamentosUseCases.getArticulosByDepartamentoyEspacio(req.params.nombre, req.params.espacio);

        let final = {
            "nombre": req.params.nombre,
            articulos
        }
        

        res.json(final);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/", async (req,res)=>{
    try {
        let departamento = req.body;
        const resultado = await departamentosUseCases.añadirDepartamento(departamento.nombre);
        
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post("/:nombre", async (req,res)=>{
    
    try {

        let departamento: Departamento = {
            nombre: req.params.nombre
        };

        let articulo: Articulo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            espacio: req.body.espacio
        };

        const result = await departamentosUseCases.añadirArticuloDepartamento(departamento,articulo);
        
        const articulos = await departamentosUseCases.getDepartamentoByNombre(req.params.nombre);

        let final = {
            "nombre": req.params.nombre,
            articulos
        }

        res.json(final);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.put("/:nombre/articulo/:id", async (req,res)=>{
    
    try {

        let departamento: Departamento = {
            nombre: req.params.nombre
        };
        let id = Number(req.params.id);

        let articulo: Articulo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            espacio: req.body.espacio
        };

        const result = await departamentosUseCases.actualizarDetallesDepartamento(departamento,articulo,id);
        
        const articulos = await departamentosUseCases.getDepartamentoByNombre(req.params.nombre);

        let final = {
            "nombre": req.params.nombre,
            articulos
        }

        res.json(final);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.delete("/:nombre/articulo/:id", async (req,res)=>{
    
    try {
        
        let id = Number(req.params.id);

        const result = await departamentosUseCases.eliminarArticuloDepartamento(id);
        
        const articulos = await departamentosUseCases.getDepartamentoByNombre(req.params.nombre);

        let final = {
            "nombre": req.params.nombre,
            articulos
        }

        res.json(final);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router
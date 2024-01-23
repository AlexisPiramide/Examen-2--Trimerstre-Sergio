import EspaciosUseCases from "../../application/espacios.usecases";
import EspaciosRepositorySQL from "../db/espacios.repositorySQL";
import express from "express"

const router = express.Router();
const espaciosUseCases: EspaciosUseCases = new EspaciosUseCases(new EspaciosRepositorySQL);

router.get("/", async (req, res) => {
    try {
        const resultado = await espaciosUseCases.getAllEspacios();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router
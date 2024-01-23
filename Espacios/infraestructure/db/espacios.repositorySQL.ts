import Espacio from "../../domain/espacios";
import espacioRepository from "../../domain/espacios.repository";
import executeQuery from "../../../context/db/postgres";

export default class EspaciosRepositorySQL implements espacioRepository {

    async getAllEspacios(): Promise<Espacio[] | undefined> {

       let Query = `SELECT * FROM espacios`

        try{
            let Espacios  = await executeQuery(Query);
            return Espacios;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }

   
}

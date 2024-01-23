import departamento from "../../domain/departamentos";
import departamentoRepository from "../../domain/departamentos.repository";
import executeQuery from "../../../context/db/postgres";
import Articulo from "../../../Articulos/domain/articulos";

export default class EspaciosRepositorySQL implements departamentoRepository {

    async getAllDepartamentos(): Promise<departamento[] | undefined> {
        let Query = `SELECT * FROM departamentos`

        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }
    async getDepartamentoByNombre(nombre: String): Promise<departamento[] | undefined> {
        let Query = `SELECT id,nombre,descripcion,espacio FROM articulos WHERE departamento='${nombre}'`

        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }
    async getArticulosByDepartamentoyEspacio(nombre: String, espacio: String): Promise<JSON | undefined> {
        let Query = `SELECT id,nombre,descripcion,espacio FROM articulos WHERE departamento='${nombre}' AND espacio='${espacio}'`

        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }
    async añadirDepartamento(departamento: departamento): Promise<departamento | undefined> {
        let Query = `INSERT INTO departamentos (nombre) VALUES ('${departamento}');`

        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }
    async añadirArticuloDepartamento(departamento: departamento, articulo: Articulo): Promise<JSON | undefined> {
        let Query = `INSERT INTO articulos (nombre,departamento,descripcion,espacio) VALUES ('${articulo.nombre}','${departamento.nombre}','${articulo.descripcion}','${articulo.espacio}');`
        
        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }
    async actualizarDetallesDepartamento(departamento: departamento, articulo: Articulo, id: Number): Promise<JSON | undefined> {
        let Query = `UPDATE articulos SET nombre = '${articulo.nombre}', descripcion = '${articulo.descripcion}', espacio ='${articulo.espacio}' WHERE departamento='${departamento.nombre}' AND id='${id}';`
        
        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }
    async eliminarArticuloDepartamento(id: Number): Promise<JSON | undefined> {

        let Query = `DELETE FROM articulos WHERE id='${id}';`
        
        try{
            let Departamentos  = await executeQuery(Query);
            return Departamentos;
        }catch(e){
            console.log(e)
           return undefined;
        }
    }

}

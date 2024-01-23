import Departamento from "./departamentos";
import Articulo from "../../Articulos/domain/articulos";

export default interface DepartamentoRepository{
    getAllDepartamentos(): Promise <Departamento[] | undefined>;
    getDepartamentoByNombre(nombre: String): Promise <Departamento[] | undefined>;
    getArticulosByDepartamentoyEspacio(nombre: String, espacio : String): Promise <JSON | undefined>;
    añadirDepartamento(departamento: Departamento): Promise <Departamento | undefined>;
    añadirArticuloDepartamento(departamento: Departamento, articulo: Articulo): Promise <JSON | undefined>;
    actualizarDetallesDepartamento(departamento: Departamento,articulo: Articulo,id: number): Promise <JSON | undefined>;
    eliminarArticuloDepartamento(id: Number): Promise <JSON | undefined>;
}
import DepartamentosRepositorySQL from "../infraestructure/db/departamentos.repositorySQL";
import Departamento from "../domain/departamentos";
import Articulo from "../../Articulos/domain/articulos";

export default class DepartamentosUseCases {

    private DepartamentosRepository: DepartamentosRepositorySQL;

    constructor(departamentosUseCases: DepartamentosRepositorySQL) {
        this.DepartamentosRepository = departamentosUseCases;
    }

    async getAllDepartamentos() {
        return await this.DepartamentosRepository.getAllDepartamentos();
    }

    async getDepartamentoByNombre(nombre: String) {
        return await this.DepartamentosRepository.getDepartamentoByNombre(nombre);
    }
    async getArticulosByDepartamentoyEspacio(nombre: String, espacio: String) {
        return await this.DepartamentosRepository.getArticulosByDepartamentoyEspacio(nombre, espacio);
    }

    async añadirDepartamento(departamento: Departamento) {
        return await this.DepartamentosRepository.añadirDepartamento(departamento);
    }

    async añadirArticuloDepartamento(departamento: Departamento, articulo: Articulo) {
        return await this.DepartamentosRepository.añadirArticuloDepartamento(departamento, articulo);
    }

    async actualizarDetallesDepartamento(departamento: Departamento, articulo: Articulo, id:number) {
        return await this.DepartamentosRepository.actualizarDetallesDepartamento(departamento, articulo,id);
    }

    async eliminarArticuloDepartamento(id: Number) {
        return await this.DepartamentosRepository.eliminarArticuloDepartamento(id);
    }
}


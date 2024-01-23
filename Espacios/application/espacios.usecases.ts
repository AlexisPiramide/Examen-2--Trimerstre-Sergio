import EspaciosRepositorySQL from "../infraestructure/db/espacios.repositorySQL";

export default class EspaciosUseCases{

    private EspaciosRepository: EspaciosRepositorySQL;

    constructor(espaciosUseCases: EspaciosRepositorySQL) {
        this.EspaciosRepository = espaciosUseCases;
    }

    async getAllEspacios(){
        return await this.EspaciosRepository.getAllEspacios();
    }

}


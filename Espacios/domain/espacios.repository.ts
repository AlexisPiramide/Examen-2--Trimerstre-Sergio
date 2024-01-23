import Espacio from "./espacios";

export default interface EspacioRepository{
    getAllEspacios(): Promise <Espacio[] | undefined>
}
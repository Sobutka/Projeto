import { AppDataSource } from "../data-source";
import { Consulta } from "../entities/Consulta";
import { Paciente } from "../entities/Paciente";
import { Dentista } from "../entities/Dentista";


export const consultaRepository = AppDataSource.getRepository(Consulta)


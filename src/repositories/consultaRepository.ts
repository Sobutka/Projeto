import { AppDataSource } from "../data-source";
import { Consulta } from "../entities/Consulta";
import { Dentista } from "../entities/Dentista";
import { Paciente } from "../entities/Paciente";

export const consultaRepository = AppDataSource.getRepository(Consulta)
export const dentistaRepository = AppDataSource.getRepository(Dentista)
export const pacienteRepository = AppDataSource.getRepository(Paciente)

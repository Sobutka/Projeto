import { Request, Response } from "express";
import { consultaRepository } from "../repositories/consultaRepository";
import { dentistaRepository } from "../repositories/dentistaRepository";
import { pacienteRepository } from "../repositories/pacienteRepository";

export class ConsultaController{
    async create(req: Request, res: Response){
        const { data, horaInicio, horaFinal, confirmado, consRealizada } = req.body
        const {dentista_codDent, paciente_codPac} = req.params

        if(!data){
            return res.status(400).json({ message: 'A data é obrigatória'})
        }
        if(!horaInicio){
            return res.status(400).json({ message: 'A Hora Inicial é obrigatória'})
        }

        try {
            const paciente = await pacienteRepository.findOneBy({codPac: Number(paciente_codPac)})

            if(!paciente){
                return res.status(404).json({ message: 'Paciente não cadastrado'})
            }

            const dentista = await dentistaRepository.findOneBy({codDent: Number(dentista_codDent)})

            if(!dentista){
                return res .status(404).json({ message: 'Dentista não cadastrado'})
            }

            const newConsulta = consultaRepository.create({ 
                data,
                horaInicio,
                horaFinal,
                confirmado,
                consRealizada,
                dentista,
                paciente

            })

            await consultaRepository.save(newConsulta)

            return res.status(201).json(newConsulta)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async list(req: Request, res:Response){
        try {
            const consultas = await consultaRepository.find({
                relations:{
                    paciente:true,
                    dentista:true
                }
            })
            return res.json(consultas)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}
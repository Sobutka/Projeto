import { Request, Response } from "express";
import { consultaRepository } from "../repositories/consultaRepository";

export class ConsultaController{
    async create(req: Request, res: Response){
        const { data, horaInicio, horaFinal, confirmado, consRealizada, codPac, codDent } = req.body

        if(!data){
            return res.status(400).json({ message: 'A data é obrigatória'})
        }   
        if(!horaInicio){
            return res.status(400).json({ message: 'A Hora Inicial é obrigatória'})
        }

        try {

            const newConsulta = consultaRepository.create({ data,horaInicio,horaFinal,confirmado,consRealizada, codPac, codDent})

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
            })
            return res.json(consultas)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async update(req: Request, res: Response){
        try {
            const{ codCons } = req.params

            const consulta = await consultaRepository.update(codCons, req.body)

            if(consulta.affected == 1){
                const consultaUpdated = await consultaRepository.findOneBy({codCons:Number()})
                return res.json({message:'Consulta Atualizado'})
            } else {
                return res.status(404).json({message:'Consulta não encontrado'})
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async delete(req: Request, res: Response){
        try {   
            const{ codCons } = req.params

            const consulta = await consultaRepository.delete(codCons)

            if(consulta.affected == 1){
                const consultaDeleted = await consultaRepository.findOneBy({codCons:Number()})
                return res.json({message:'Consulta Excluido'})
            } else {
                return res.status(404).json({message:'Consulta não encontrado'})
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

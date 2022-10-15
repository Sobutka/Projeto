import { Request, Response } from "express";
import { pacienteRepository } from "../repositories/pacienteRepository";

export class PacienteController{
    async create(req: Request, res: Response){
        const { nome, email, dataNasc, celular, celularRecado } = req.body

        if(!nome){
            return res.status(400).json({ message: 'O Nome é obrigatório'})
        }
        if(!email){
            return res.status(400).json({ message: 'O Email é obrigatório'})
        }
        if(!dataNasc){
            return res.status(400).json({ message: 'A Data de Nascimento é obrigatória'})
        }
        if(!celular){
            return res.status(400).json({ message: 'O Celular é obrigatório'})
        }

        try {
            const newPaciente = pacienteRepository.create({ nome, email, dataNasc, celular, celularRecado })

            await pacienteRepository.save(newPaciente)

            return res.status(201).json(newPaciente)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}
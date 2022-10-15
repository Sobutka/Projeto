import { Request, Response } from "express";
import { dentistaRepository } from "../repositories/dentistaRepository";

export class DentistaController{
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
            const newDentista = dentistaRepository.create({ nome, email, dataNasc, celular, celularRecado })

            await dentistaRepository.save(newDentista)

            return res.status(201).json(newDentista)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}
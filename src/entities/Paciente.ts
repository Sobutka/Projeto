import { IsEmail, MaxLength, MinLength} from "class-validator";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consulta } from "./Consulta";

@Entity('pacientes')
export class Paciente{
    @PrimaryGeneratedColumn()
    codPac: number

    @Column({type: 'text' })
    @MaxLength(50)
    nome: string

    @Column({type: 'text'})
    @MaxLength(11)
    cpf: string
    
    @Column({type: 'text' })
    @IsEmail()
    email: string

    @Column({type: 'date' })
    dataNasc: Date

    @Column({type: 'text' })
    @MaxLength(11)
    celular: string

    @Column({type: 'text', nullable: true})
    @MaxLength(11)
    @MinLength(0)
    celularRecado: string
    
    @OneToMany(() => Consulta, (consulta) => consulta.paciente)
    consulta: Consulta[]
}
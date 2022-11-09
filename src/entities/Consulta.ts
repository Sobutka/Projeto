import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dentista } from "./Dentista";
import { Paciente } from "./Paciente";

@Entity('consultas')
export class Consulta{
    @PrimaryGeneratedColumn()
    codCons: number

    @Column({type: 'date' })
    data: Date

    @Column({type: 'text' })
    horaInicio: string

    @Column({type: 'text', nullable: true})
    horaFinal: string

    @Column({type: 'text', enum:['C','N'], default: 'N'})
    confirmado: string
    
    @Column({type: 'text',enum:['S','N'], default: 'N'})
    consRealizada:string

    @ManyToOne(() => Dentista, dentista => dentista.consulta)
    @JoinColumn({name: 'dentista_codDent'})
    dentista: Dentista

    @ManyToOne(() => Paciente, paciente => paciente.consulta)
    @JoinColumn({name: 'paciente_codPac'})
    paciente: Paciente
}
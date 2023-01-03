import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consulta } from "./Consulta";

@Entity('anamneses')
export class Anamnese{
    @PrimaryGeneratedColumn()
    codAnam : number

    @Column({type: 'boolean', nullable: true})
    cirurgia : boolean

    @Column({type: 'text', nullable: true})
    qCirurgia : String

    @Column({type: 'boolean', nullable: true})
    alergiaRemedio : boolean

    @Column({type: 'text', nullable: true})
    qAlergiaRemedio : String

    @Column({type: 'boolean', nullable: true})
    pressaoAlta : boolean

    @Column({type: 'boolean', nullable: true})
    sangraCorte : boolean

    @Column({type: 'boolean', nullable: true})
    manchasRochas : boolean

    @Column({type: 'boolean', nullable: true})
    cicatrizacaoDemorada : boolean

    @Column({type: 'boolean', nullable: true})
    anemia : boolean

    @Column({type: 'boolean', nullable: true})
    transfusaoSangue : boolean

    @Column({type: 'boolean', nullable: true})
    dst : boolean

    @Column({type: 'boolean', nullable: true})
    tonturas : boolean

    @Column({type: 'boolean', nullable: true})
    convulsoes : boolean

    @Column({type: 'boolean', nullable: true})
    diabetes : boolean

    @Column({type: 'boolean', nullable: true})
    fuma : boolean

    @Column({type: 'boolean', nullable: true})
    alcool : boolean

    @Column({type: 'boolean', nullable: true})
    asma : boolean

    @Column({type: 'boolean', nullable: true})
    bronquite : boolean

    @Column({type: 'boolean', nullable: true})
    rinite : boolean

    @Column({type: 'boolean', nullable: true})
    sinusite : boolean

    @Column({type: 'boolean', nullable: true})
    gastrite : boolean

    @Column({type: 'boolean', nullable: true})
    alergiaPeniscilina : boolean

    @Column({type: 'boolean', nullable: true})
    cancerDeProstata : boolean

    @Column({type: 'boolean', nullable: true})
    alergiaIodo : boolean

    @Column({type: 'boolean', nullable: true})
    denteMole : boolean

    @Column({type: 'boolean', nullable: true})
    feridaLabioeLingua : boolean

    @OneToMany(() => Consulta, (consulta) => consulta.dentista)
    consulta: Consulta[]

}
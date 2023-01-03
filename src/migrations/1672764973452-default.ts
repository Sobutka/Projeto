import { MigrationInterface, QueryRunner } from "typeorm";

export class default1672764973452 implements MigrationInterface {
    name = 'default1672764973452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`cirurgia\` \`cirurgia\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` DROP COLUMN \`qCirurgia\``);
        await queryRunner.query(`ALTER TABLE \`anamneses\` ADD \`qCirurgia\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alergiaRemedio\` \`alergiaRemedio\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` DROP COLUMN \`qAlergiaRemedio\``);
        await queryRunner.query(`ALTER TABLE \`anamneses\` ADD \`qAlergiaRemedio\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`pressaoAlta\` \`pressaoAlta\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`sangraCorte\` \`sangraCorte\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`manchasRochas\` \`manchasRochas\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`cicatrizacaoDemorada\` \`cicatrizacaoDemorada\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`anemia\` \`anemia\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`transfusaoSangue\` \`transfusaoSangue\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`dst\` \`dst\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`tonturas\` \`tonturas\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`convulsoes\` \`convulsoes\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`diabetes\` \`diabetes\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`fuma\` \`fuma\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alcool\` \`alcool\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`asma\` \`asma\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`bronquite\` \`bronquite\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`rinite\` \`rinite\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`sinusite\` \`sinusite\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`gastrite\` \`gastrite\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alergiaPeniscilina\` \`alergiaPeniscilina\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`cancerDeProstata\` \`cancerDeProstata\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alergiaIodo\` \`alergiaIodo\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`denteMole\` \`denteMole\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`feridaLabioeLingua\` \`feridaLabioeLingua\` tinyint NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`feridaLabioeLingua\` \`feridaLabioeLingua\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`denteMole\` \`denteMole\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alergiaIodo\` \`alergiaIodo\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`cancerDeProstata\` \`cancerDeProstata\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alergiaPeniscilina\` \`alergiaPeniscilina\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`gastrite\` \`gastrite\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`sinusite\` \`sinusite\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`rinite\` \`rinite\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`bronquite\` \`bronquite\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`asma\` \`asma\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alcool\` \`alcool\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`fuma\` \`fuma\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`diabetes\` \`diabetes\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`convulsoes\` \`convulsoes\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`tonturas\` \`tonturas\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`dst\` \`dst\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`transfusaoSangue\` \`transfusaoSangue\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`anemia\` \`anemia\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`cicatrizacaoDemorada\` \`cicatrizacaoDemorada\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`manchasRochas\` \`manchasRochas\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`sangraCorte\` \`sangraCorte\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`pressaoAlta\` \`pressaoAlta\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` DROP COLUMN \`qAlergiaRemedio\``);
        await queryRunner.query(`ALTER TABLE \`anamneses\` ADD \`qAlergiaRemedio\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`alergiaRemedio\` \`alergiaRemedio\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` DROP COLUMN \`qCirurgia\``);
        await queryRunner.query(`ALTER TABLE \`anamneses\` ADD \`qCirurgia\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`anamneses\` CHANGE \`cirurgia\` \`cirurgia\` tinyint NOT NULL`);
    }

}

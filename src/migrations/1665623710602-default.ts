import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665623710602 implements MigrationInterface {
    name = 'default1665623710602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`dentistas\` (\`codDent\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`dataNasc\` text NOT NULL, \`celular\` text NOT NULL, \`celularRecado\` text NULL, PRIMARY KEY (\`codDent\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacientes\` (\`codPac\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`dataNasc\` text NOT NULL, \`celular\` text NOT NULL, \`celularRecado\` text NULL, PRIMARY KEY (\`codPac\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`consultas\` (\`codCons\` int NOT NULL AUTO_INCREMENT, \`data\` text NOT NULL, \`horaInicio\` text NOT NULL, \`horaFinal\` text NOT NULL, \`confirmado\` text NOT NULL, \`consRealizada\` text NOT NULL, \`dentista_codDent\` int NULL, \`paciente_codPac\` int NULL, PRIMARY KEY (\`codCons\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`consultas\` ADD CONSTRAINT \`FK_5544966032bc62f5be99957d672\` FOREIGN KEY (\`dentista_codDent\`) REFERENCES \`dentistas\`(\`codDent\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`consultas\` ADD CONSTRAINT \`FK_8879233c06c978d02c1c24cbbae\` FOREIGN KEY (\`paciente_codPac\`) REFERENCES \`pacientes\`(\`codPac\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`consultas\` DROP FOREIGN KEY \`FK_8879233c06c978d02c1c24cbbae\``);
        await queryRunner.query(`ALTER TABLE \`consultas\` DROP FOREIGN KEY \`FK_5544966032bc62f5be99957d672\``);
        await queryRunner.query(`DROP TABLE \`consultas\``);
        await queryRunner.query(`DROP TABLE \`pacientes\``);
        await queryRunner.query(`DROP TABLE \`dentistas\``);
    }

}

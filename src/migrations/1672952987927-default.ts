import { MigrationInterface, QueryRunner } from "typeorm";

export class default1672952987927 implements MigrationInterface {
    name = 'default1672952987927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`consultas\` DROP COLUMN \`confirmado\``);
        await queryRunner.query(`ALTER TABLE \`consultas\` ADD \`confirmado\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`consultas\` DROP COLUMN \`consRealizada\``);
        await queryRunner.query(`ALTER TABLE \`consultas\` ADD \`consRealizada\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`consultas\` DROP COLUMN \`consRealizada\``);
        await queryRunner.query(`ALTER TABLE \`consultas\` ADD \`consRealizada\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`consultas\` DROP COLUMN \`confirmado\``);
        await queryRunner.query(`ALTER TABLE \`consultas\` ADD \`confirmado\` text NOT NULL`);
    }

}

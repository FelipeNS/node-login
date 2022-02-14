import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1644798395189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "character",
                    length: "36",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "120",
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "200",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "20",
                },
                {
                    name: "avatar",
                    type: "text",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}

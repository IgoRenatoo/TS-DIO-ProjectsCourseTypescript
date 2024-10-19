import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserMigration1729286075782 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "INTEGER",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "idade",
                        type: "int",
                    },
                    {
                        name: "sexo",
                        type: "varchar",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove a tabela ao fazer rollback
        await queryRunner.dropTable("users");
    }
}

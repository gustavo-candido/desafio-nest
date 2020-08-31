import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedCategories1598896111930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into("category")
        .values([
            {
                name: "Jazz"
            },

            {
                name: "Rock"
            },

            {
                name: "Hip-hop"
            },

            {
                name: "Reggae"
            },

            {
                name: "Pop"
            },

            {
                name: "Mpb"
            },

            {
                name: "Indie"
            },

            {
                name: "Electronic"
            },

            {
                name: "Blues"
            },

            {
                name: "Dance"
            },


        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
        .manager
        .createQueryBuilder()
        .delete()
        .from('category')
        .execute();
    }

}

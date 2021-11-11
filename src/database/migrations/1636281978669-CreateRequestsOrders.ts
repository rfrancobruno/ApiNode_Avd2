import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequestsOrders1636281978669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'requestOrders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'provider_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'amount',
                        type: 'number',
                    },
                    {
                        name: 'unitValue',
                        type: 'number',
                    },
                    {
                        name: 'requestDate',
                        type: 'Date',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default:'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default:'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKProduct',
                        referencedTableName:'products',
                        referencedColumnNames: ['id'],
                        columnNames: ['product_id'],
                        onDelete:'SET NULL', //CASCADE
                        onUpdate:'SET NULL', //CASCADE
                    },
                    {
                        name: 'FKProvider',
                        referencedTableName:'providers',
                        referencedColumnNames: ['id'],
                        columnNames: ['provider_id'],
                        onDelete:'SET NULL', //CASCADE
                        onUpdate:'SET NULL', //CASCADE
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('requestOrders')
    }

}

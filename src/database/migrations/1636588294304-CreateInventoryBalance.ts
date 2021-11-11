// import {MigrationInterface, QueryRunner, Table} from "typeorm";

// export class CreateInventoryBalance1636588294304 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {

//         await queryRunner.createTable(
//             new Table({
//                 name:'inventoryBalance',
//                 columns: [
//                     {
//                         name: 'id',
//                         type: 'uuid',
//                         isPrimary: true,
//                     },
//                     {
//                         name: 'inventory_product_id',
//                         type: 'uuid',
//                         isNullable: false,
//                     },
//                     {
//                         name: 'inventory_amount',
//                         type: 'number',
//                     },
//                     {
//                         name: 'updated_at',
//                         type: 'timestamp',
//                         default:'now()'
//                     },
//                     {
//                         name: 'created_at',
//                         type: 'timestamp',
//                         default:'now()'
//                     },
//                 ],
//                 foreignKeys: [
//                     {
//                         name: 'FKProduct',
//                         referencedTableName:'requestOrders',
//                         referencedColumnNames: ['product_id'],
//                         columnNames: ['inventory_product_id'],
//                         onDelete:'CASCADE', //CASCADE OR SET NULL
//                         onUpdate:'CASCADE', //CASCADE OR SET NULL
//                     },
//                 ]
//             })
//         )

//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable('inventoryBalance')
//     }

// }

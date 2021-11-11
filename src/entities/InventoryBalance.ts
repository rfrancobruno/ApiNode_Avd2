// import { 
//     Column,
//     CreateDateColumn,
//     Entity, PrimaryColumn, UpdateDateColumn,
//     JoinColumn,
//     ManyToOne
// } from 'typeorm'

// import { v4 as uuid } from 'uuid'

// import { Product } from './Product'

// @Entity('inventoryBalance')
// class InventoryBalance {

//     @PrimaryColumn()
//     id: string;

//     @JoinColumn({ name: 'inventory_product_id'})
//     @ManyToOne(() => Product)
//     product: Product;

//     @Column()
//     inventory_product_id: string;

//     @Column()
//     inventory_amount: number;

//     @UpdateDateColumn()
//     updated_at: Date;

//     @CreateDateColumn()
//     created_at: Date;

//     constructor() {
//         if (!this.id) {
//             this.id = uuid()
//         }
//     }
// }

// export { InventoryBalance }
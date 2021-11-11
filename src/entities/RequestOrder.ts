import { 
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Product } from './Product'
import { Provider } from './Provider'

@Entity('requestOrders')
class RequestOrder {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'product_id'})
    @ManyToOne(() => Product)
    product: Product;

    @Column()
    product_id: string;

    @JoinColumn({ name: 'provider_id' })
    @ManyToOne(() => Provider)
    provider: Provider;

    @Column()
    provider_id: string;

    @Column()
    amount: number;

    @Column()
    unitValue: number;

    @Column()
    requestDate: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { RequestOrder }
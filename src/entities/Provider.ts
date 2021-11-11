import { 
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('providers')
class Provider {
  
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

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

export { Provider }
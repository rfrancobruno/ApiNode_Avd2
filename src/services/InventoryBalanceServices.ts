// import { getCustomRepository } from 'typeorm'
// import { InventoryBalanceRepository } from '../repositories/InventoryBalanceRepository'

// interface IInventoryBalanceCreate {
//     inventory_product_id: string;
//     inventory_amount: number;
// }


// class InventoryBalanceServices {

//     async create( { inventory_product_id, inventory_amount }: IInventoryBalanceCreate) {

//         const inventoryBalanceRepository = getCustomRepository(InventoryBalanceRepository)
        
//         const inventoryBalance = await inventoryBalanceRepository.create({ 
//             inventory_product_id,
//             inventory_amount
//         })
        
//         await inventoryBalanceRepository.save(inventoryBalance)
        
//         return inventoryBalance
         
//     }

// }

// export { InventoryBalanceServices }
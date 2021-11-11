// import { Request, Response } from 'express'
// import { InventoryBalanceServices } from '../services/InventoryBalanceServices'

// class InventoryBalanceController {

//     async create(request: Request, response: Response) {

//         const { inventory_product_id, inventory_amount } = request.body
//         const inventoryBalanceServices = new InventoryBalanceServices()

//         try { 
//             const inventoryBalance = await inventoryBalanceServices.create({ inventory_product_id, inventory_amount })
//             return response.json(inventoryBalance)
//         } catch(err){
//             return response
//                 .status(400)
//                 .json({message: err.message})
//         }
//     }
    
// }

// export { InventoryBalanceController }
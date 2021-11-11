import { Any, getCustomRepository }from 'typeorm'
import { RequestsOrderRepository } from '../repositories/RequestsOrdersRepository'
import { ProductsRepository } from '../repositories/ProductsRepository'
import { ProvidersRepository } from '../repositories/ProvidersRepository'

interface IRequestsOrdersServiceCreate {
    id: string;
    product_id: string;
    provider_id: string;
    amount: number;
    unitValue: number;
    requestDate: Date;
}

interface IRequestsOrderServiceDelete {
    id: string;
}

class RequestsOrdersServices {
    
    async create( { id, product_id, provider_id, amount, unitValue, requestDate}: IRequestsOrdersServiceCreate) {

        const requestsOrdersRepository = getCustomRepository(RequestsOrderRepository)
        let requestsOrders = await requestsOrdersRepository.findOne({ product_id })

        const productRepository = getCustomRepository(ProductsRepository)
        const registeredProdut = await productRepository.findOne( product_id ) 
        if(!registeredProdut) {
            throw new Error('O produto solicitado não está cadastrado!')
        }

        const providerRepository = getCustomRepository(ProvidersRepository)
        const registeredProvider = await providerRepository.findOne( provider_id ) 
        if(!registeredProvider) {
            throw new Error('O fornecedor solicitado não está cadastrado!')
        }

        const requestsOrderRepository = getCustomRepository(RequestsOrderRepository)
        const  productAlreadyExist = await requestsOrderRepository.findOne({ product_id }) 
        if(!productAlreadyExist) {
            requestsOrders = await requestsOrdersRepository.create({
                product_id,
                provider_id,
                amount,
                unitValue,
                requestDate
            })
            await requestsOrdersRepository.save(requestsOrders)
            return requestsOrders
        }  

        if(productAlreadyExist) { 

            let lastAmountValue = requestsOrders.amount
            let amontUpdate = amount + lastAmountValue
            
            await requestsOrdersRepository.update(  requestsOrders.id ,  { 
               product_id,
               provider_id, 
               amount: amontUpdate, 
               unitValue, 
               requestDate 
            })
            
            return  "Já existe um pedido de compra para esse produto... List All request orders para vizualizar o 'amount' atualizado"
        } 
    }

    async index() {
        const requestsOrdersRepository = getCustomRepository(RequestsOrderRepository)
        const requestsOrders = await requestsOrdersRepository.find({
            relations: ['product', 'provider']
        })
        return requestsOrders
    }

    
    async delete({ id }: IRequestsOrderServiceDelete) {

        const requestsOrderRepository = getCustomRepository(RequestsOrderRepository)
        let requestsOrder = await requestsOrderRepository.findOne({ id })

        if(!requestsOrder) {
            throw new Error('A ordem de compra não existe para ser excluido!')
        }

        return await requestsOrderRepository.delete({ id })

    }

    
}

export { RequestsOrdersServices }
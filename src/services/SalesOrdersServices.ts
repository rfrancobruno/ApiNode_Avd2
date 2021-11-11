
import { getCustomRepository }from 'typeorm'
import { SalesOrderRepository } from '../repositories/SalesOrdersRepository'
import { ClientsRepository } from '../repositories/ClientsRepository'
import { ProductsRepository } from '../repositories/ProductsRepository'

interface ISalesOrdersServiceCreate {
    client_id: string;
    product_id: string;
    amount: number;
    saleDate: Date;
}

interface ISalesOrdersServicesShow {
    id: string;
}


interface ISalesOrderServiceDelete {
    id: string;
}

interface ISalesOrdersServiceUpdate {
    id: string;
    amount: number;
    saleDate: string;
    client_id: string;
    product_id: string;
}

class SalesOrdersServices {
    
    async create( { client_id, product_id, amount, saleDate}: ISalesOrdersServiceCreate) {

        const salesOrdersServicesRepository = getCustomRepository(SalesOrderRepository)

        const salesOrders = await salesOrdersServicesRepository.create({
            client_id,
            product_id,
            amount,
            saleDate
        })

        await salesOrdersServicesRepository.save(salesOrders)
        return salesOrders
    }

    async index() {
        const salesOrdersRepository = getCustomRepository(SalesOrderRepository)
        const salesOrders = await salesOrdersRepository.find({
            relations: ['client', 'product']
        })
        return salesOrders
    }

    async show({ id }: ISalesOrdersServicesShow) {

        const salesOrderRepository = getCustomRepository(SalesOrderRepository)
        const salesOrder = await salesOrderRepository.findOne(
            { id },
            {relations: ['client', 'product']})

        if(!salesOrder) {
            throw new Error('Pedido de venda não encontrado!')
        }

        return salesOrder
    }

    async delete({ id }: ISalesOrderServiceDelete) {

        const salesOrderRepository = getCustomRepository(SalesOrderRepository)
        let salesOrder = await salesOrderRepository.findOne({ id })

        if(!salesOrder) {
            throw new Error('A ordem de venda não existe para ser excluido!')
        }

        return await salesOrderRepository.delete({ id })

    }

    async update({  id, amount, saleDate, client_id, product_id, }: ISalesOrdersServiceUpdate) {

        const salesOrderRepository = getCustomRepository(SalesOrderRepository)
        let salesOrder = await salesOrderRepository.findOne({ id })
        if(!salesOrder) {
            throw new Error('A ordem de venda a ser alterado não foi encontrado!')
        }

        const clientsRepository = getCustomRepository(ClientsRepository)
        let clients = await clientsRepository.findOne(client_id)
        if (!clients) {
            throw new Error('Cliente não encontrado!')
        }

        const productsRepository = getCustomRepository(ProductsRepository)
        let products = await productsRepository.findOne(product_id)
        if (!products) {
            throw new Error('Produto não encontrado!')
        }

        await salesOrderRepository.update(id, { amount, saleDate, client_id, product_id, })
        salesOrder = await salesOrderRepository.findOne({ id })

        return salesOrder

    }
}

export { SalesOrdersServices }
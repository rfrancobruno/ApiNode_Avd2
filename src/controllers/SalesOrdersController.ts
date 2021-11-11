import { Request, Response } from 'express'
import { SalesOrdersServices } from '../services/SalesOrdersServices'

class SalesOrdersController {

    async create(request: Request, response: Response) {

        let {client_id, product_id, amount, saleDate } = request.body
        const salesOrdersServices = new SalesOrdersServices()
        saleDate = new Date(saleDate)
        try { 
            const salesOrders = await salesOrdersServices.create({
                client_id, product_id, amount, saleDate
            })
            return response.status(200).json(salesOrders)  
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
         
    }

    async index(request: Request, response: Response) {

        const salesOrdersServices = new SalesOrdersServices()

        try { 
            const salesOrders = await salesOrdersServices.index()
            return response.status(200).json(salesOrders)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async show(request: Request, response: Response) {

        const salesOrdersServices = new SalesOrdersServices()
        const { id } = request.params

        try {
            const salesOrders = await salesOrdersServices.show({ id })
            return response.status(200).json(salesOrders)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async delete(request: Request, response: Response) {

        const salesOrdersServices = new SalesOrdersServices()
        const { id } = request.params

        try {
            const salesOrder = await salesOrdersServices.delete({ id })
            return response.json({message: 'Ordem de venda excluido com sucesso!!!'})
        }catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async update(request: Request, response: Response) {

        const { amount, saleDate, client_id, product_id} = request.body
        const { id } = request.params
        const salesOrdersServices = new SalesOrdersServices()

        try { 
            const salesOrders = await salesOrdersServices.update({id, amount, saleDate, client_id, product_id })
            return response.status(200).json(salesOrders)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }
}

export { SalesOrdersController }
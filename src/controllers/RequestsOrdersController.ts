import { Request, Response } from 'express'
import { RequestsOrdersServices } from '../services/RequestsOrdersServices'

class RequestsOrdersController {

    async create(request: Request, response: Response) {

        let {id, product_id, provider_id, amount, unitValue, requestDate } = request.body
        const requestsOrdersServices = new RequestsOrdersServices()
        requestDate = new Date(requestDate)
        try { 
            const requestsOrders = await requestsOrdersServices.create({
                id, product_id, provider_id, amount, unitValue, requestDate
            })
            return response.status(200).json(requestsOrders)  
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
         
    }

    async index(request: Request, response: Response) {

        const requestsOrdersServices = new RequestsOrdersServices()

        try { 
            const requestsOrders = await requestsOrdersServices.index()
            return response.status(200).json(requestsOrders)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async delete(request: Request, response: Response) {

        const requestsOrdersServices = new RequestsOrdersServices()
        const { id } = request.params

        try {
            const requestsOrder = await requestsOrdersServices.delete({ id })
            return response.json({message: 'Ordem de compra excluido com sucesso!!!'})
        }catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }
}

export { RequestsOrdersController }
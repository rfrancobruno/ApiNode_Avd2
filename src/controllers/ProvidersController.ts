import { Request, Response } from 'express'
import { ProvidersServices } from '../services/ProvidersServices'

class ProvidersController {

    async create(request: Request, response: Response) {

        const { name, email } = request.body
        const providersServices = new ProvidersServices()

        try { 
            const providers = await providersServices.create({name, email})
            return response.json(providers)
        } catch(err){
            return response
                .status(400)
                .json({message: err.message})
        }
    }

    async index(request: Request, response: Response) {

        const providersServices = new ProvidersServices()

        try { 
            const providers = await providersServices.index()
            return response.status(200).json(providers)
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message})
        }
    }
}

export { ProvidersController }
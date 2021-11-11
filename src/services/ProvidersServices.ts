import { getCustomRepository } from 'typeorm'
import { ProvidersRepository } from '../repositories/ProvidersRepository'

interface IProvidersCreate {
    name: string;
    email: string;
}

class ProvidersServices {

    async create({ name, email }: IProvidersCreate){

        const providersRepository = getCustomRepository(ProvidersRepository)
        const emailAlreadyExist = await providersRepository.findOne({ email }) 

        if(emailAlreadyExist) {
            throw new Error('Esse endereço de email já existe!')
        }

        const providers = await providersRepository.create({
            name,
            email
        })

        await providersRepository.save(providers)
        return providers
    }

    async index() {

        const providersRepository = getCustomRepository(ProvidersRepository)
        const providers = await providersRepository.find()
        return providers
    }
}

export { ProvidersServices }
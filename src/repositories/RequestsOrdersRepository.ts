import { EntityRepository, Repository } from 'typeorm'
import { RequestOrder } from '../entities/RequestOrder'

@EntityRepository(RequestOrder)
class RequestsOrderRepository extends Repository<RequestOrder> {

}

export { RequestsOrderRepository }
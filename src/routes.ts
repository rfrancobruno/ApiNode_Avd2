// PascalCase == ClientsController (Primeira letra MAIÚSCULA)
//CameCase ===== clientsController (Primeira letra minúscula)

import { Router } from "express";

import { ClientsController } from './controllers/ClientsController' 
import { ProductsController } from './controllers/ProductsController'
import { SalesOrdersController } from "./controllers/SalesOrdersController"
import { ProvidersController } from './controllers/ProvidersController'
import { RequestsOrdersController } from "./controllers/RequestsOrdersController"
//import { InventoryBalanceController } from "./controllers/InventoryBalanceController"


const routes = Router();

// Routes for Clients
const clientsController = new ClientsController() 
routes.post('/clients', clientsController.create)
routes.get('/clients', clientsController.index)
routes.get('/clients/:id', clientsController.show)
routes.delete('/clients/:id', clientsController.delete) 
routes.put('/clients/:id', clientsController.update)

// Routes for products
const productsController = new ProductsController()
routes.post('/products', productsController.create)
routes.get('/products', productsController.index)
routes.get('/products/:id', productsController.show)
routes.delete('/products/:id', productsController.delete) 
routes.put('/products/:id', productsController.update)

// Routes for Salesorders
const salesOrdersController = new SalesOrdersController()
routes.post('/salesorders', salesOrdersController.create)
routes.get('/salesorders', salesOrdersController.index)
routes.get('/salesorders/:id', salesOrdersController.show)
routes.delete('/salesorders/:id', salesOrdersController.delete)
routes.put('/salesorders/:id', salesOrdersController.update)

// Routes for Providers
const providersController = new ProvidersController()
routes.post('/providers', providersController.create)
routes.get('/providers', providersController.index)

// Routes for Requestsorders
const requestsOrdersController = new RequestsOrdersController()
routes.post('/requestOrders', requestsOrdersController.create)
routes.get('/requestOrders', requestsOrdersController.index)
routes.delete('/requestOrders/:id', requestsOrdersController.delete)

// Routes for InventoryBalance
//const inventoryBalanceController = new InventoryBalanceController()
 //routes.post('/inventoryBalance', inventoryBalanceController.create)
// routes.get('/inventoryBalance', inventoryBalanceController.index)
// routes.delete('/inventoryBalance', inventoryBalanceController.delete)

export { routes }
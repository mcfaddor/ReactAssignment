const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customers = require('../controllers/customerController.js');

// unrestricted routes
route.post("/register", customers.createCustomer);

// restricted routes
route.get("/all", customers.getCustomers);
route.get("/:id", authorization, customers.getCustomerById);
route.delete('/:id', authorization, customers.deleteCustomerById)


module.exports = route;
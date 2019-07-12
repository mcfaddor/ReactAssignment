const db = require('mongoose');
const Customer = require('../models/customer');

// unrestricted
exports.getCustomers = (req, res) => {
    Customer.find().then(data => res.status(200).json(data))
}

exports.getCustomerById = (req, res) => {   
    Customer.findOne({ _id: req.params.id }).then(data => res.status(200).json(data))
}

exports.createCustomer = (req, res) => {

    const customer = new Customer(
        {
            _id:        new db.Types.ObjectId,
            cfirstname: req.body.cfirstname,
            clastname:  req.body.clastname,
            ccompany:   req.body.ccompany,
            caddress:   req.body.caddress,
            czipcode:   req.body.czipcode,
            ccity:      req.body.ccity,
            ccountry:   req.body.ccountry,
            cemail:     req.body.cemail,
            cphone:     req.body.cphone
        }
    ) 

    customer.save()
    .then(() => {
        res.status(201).json({
            message: 'Customer created!',
            data: customer
            
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Customer could not be created!',
            error: error
        })
    })

}

exports.deleteCustomerById = (req, res) => {
    Customer.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            message: 'Customer was deleted from database!'
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Customer could not be deleted from database!',
            error: error
        })
    })
}
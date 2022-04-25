const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// Call functions based on url entered
routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getContactById);

module.exports = routes;

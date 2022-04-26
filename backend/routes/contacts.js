const router = require('express').Router();
const contactsController = require('../controllers/contacts');

// Call functions based on url entered
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);
router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContactById);

module.exports = router;

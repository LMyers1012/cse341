const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get entire list of contacts from contacts collection in mongodb
const getAllContacts = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single contact by id
const getContactById = async (req, res, next) => {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: ObjectId(req.params.id) });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new contact
const createContact = async (req, res, next) => {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
      favoriteFood: req.body.favoriteFood,
      height: req.body.height,
      occupation: req.body.occupation,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || 'An error occurred while creating the contact.'
        );
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update one contact by Id
const updateContact = async (req, res, next) => {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
      favoriteFood: req.body.favoriteFood,
      height: req.body.height,
      occupation: req.body.occupation,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: ObjectId(req.params.id) }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || 'An error occurred while updating the contact.'
        );
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete one contact by Id
const deleteContactById = async (req, res, next) => {
  try {
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .deleteOne({ _id: ObjectId(req.params.id) }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error || 'An error occurred while deleting the contact.'
        );
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export the functions
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContactById,
};

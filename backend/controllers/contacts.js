// const res = require('express/lib/response');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const contactId = '6260ac386e12ccf345d9a416';

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contact').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('contacts').collection('contact').find({ _id: ObjectId(userId)});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};



// async function getContactById(contactId) {
//   const result = await mongodb.getDb().db().collection('contacts').find({ _id: ObjectId(contactId) });
//   if (result) {
//     result.toArray().then((lists) => {
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(lists[0]);
//     })
//   }
// }

module.exports = { getAllContacts, getContactById };
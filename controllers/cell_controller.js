const express = require('express');
const router = express.Router();
const Table =  require ("../models/cell")
// GET all rows
router.get('/', async (req, res) => {
    try {
      const tables = await Table.find();
      res.send(tables);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Error retrieving tables.');
    }
  });
router.get('/:id', async (req, res) => {
    try {
      const tables = await Table.findById(req.params.id);
      res.send(tables);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Error retrieving tables.');
    }
  });
  
  // POST a new row
  router.post('/', async (req, res) => {
    try {
      let table = new Table({
        cell: req.body.cell,
        subject: req.body.subject,
        teacher: req.body.teacher,
        date: req.body.date,
        classroom: req.body.classroom
      });
      table = await table.save();
      res.send(table);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Error creating table.');
    }
  });
  
  // PUT an existing row
  router.put('/:id', async (req, res) => {
    try {
      const table = await Table.findByIdAndUpdate(req.params.id, {
        cell: req.body.cell,
        subject: req.body.subject,
        teacher: req.body.teacher,
        date: req.body.date,
        classroom: req.body.classroom
      }, { new: true });
      res.send(table);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Error updating table.');
    }
  });
  
  // DELETE an existing row
  router.delete('/:id', async (req, res) => {
    try {
      const table = await Table.findByIdAndRemove(req.params.id);
      res.send(table);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Error deleting table.');
    }
  });
  
  module.exports = router;
  
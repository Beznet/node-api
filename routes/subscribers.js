const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// Getting one subscriber
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
// Creating one subscriber
router.post('/', (req, res) => {

})
// Updating one subscriber
router.patch('/:id', (req, res) => {

})
// Deleteing one subscriber
router.delete('/:id', (req, res) => {

})

module.exports = router 
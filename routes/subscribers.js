const express = require('express')
const router = express.Router()

// Getting all subscribers
router.get('/', (req, res) => {
  res.send('Hello World')
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
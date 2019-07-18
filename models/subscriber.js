const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true
  },
  subscribedToChannel: {
    type: string,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
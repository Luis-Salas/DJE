const mongoose = require('mongoose')

const visitsSchema = new mongoose.Schema({
  times: { type: Number, default: 0 , required: true},
}, { timestamps: true })

mongoose.model('Visit', visitsSchema)

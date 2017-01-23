const mongoose = require('mongoose')

const visitsSchema = new mongoose.Schema({
  times: { type: Number, required: true},
}, { timestamps: true })

const BucketSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 2, maxlength: 256 },
  description: { type: String, required: true, minlength: 2, maxlength: 256 },
  _creator: {type:mongoose.Schema.ObjectId, required: true ,ref:'User'},
}, { timestamps: true })

const TagSchema = new mongoose.Schema({
  _tager: {type:mongoose.Schema.ObjectId,required: true , ref:'User'},
  _bucket: {type:mongoose.Schema.ObjectId,required: true , ref:'Bucket'},
  _tage: {type:mongoose.Schema.ObjectId,required: true , ref:'User'},
}, { timestamps: true })


mongoose.model('Visit', visitsSchema)
mongoose.model('Bucket', BucketSchema)
mongoose.model('Tag', TagSchema)

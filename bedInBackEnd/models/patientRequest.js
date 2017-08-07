const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;


const patientRequest = new mongoose.Schema({
  dni: { type: Number, required: true },
  sex: { type: String }, // , required: true
  age: { type: Number }, // , required: true
  cie10: { type: String }, // , required: true
  complexity: { type: String }, // , required: true
  plan: [{ type: ObjectId, ref: 'healthcareplans' }],
  viewedBy: [{ type: ObjectId, ref: 'hospitals' }],
  acceptedBy: [{ type: ObjectId, ref: 'hospitals' }],
  sentTo: { type: ObjectId, ref: 'hospitals' },
  dateCreated: { type: Date, default: Date.now, required: true },
}, { collections: 'patientRequest' } );


module.exports = mongoose.model('patientRequest', patientRequest);

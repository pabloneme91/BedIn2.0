const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;


const patientRequest = new mongoose.Schema({
  dni: { type: Number, required: true },
  sex: { type: String }, // , required: true
  age: { type: Number }, // , required: true
  cie10: { type: String }, // , required: true
  complexity: { type: String }, // , required: true
  healthcare: {type: ObjectId, ref: 'healthcares'},
  plan: { type: ObjectId, ref: 'healthcareplans' },
  sentTo: { 
            hospital: {type: ObjectId, ref: 'hospitals', default: null},
            matchedDate: {type: Date, default: null},
            idUserFinanciador: {type: ObjectId, default: null}
          },            
  hospitalsAndState: [{
                _id: {type: ObjectId, ref:'hospitals'}, //id Hospital
                state: {type: String, default: null},
                updatedDate: {type: Date, default: null},
                idUserHospital: {type: ObjectId, ref: 'users', default: null}
              }],
  dateCreated: { type: Date, default: Date.now},
}, { collections: 'patientRequest' })


module.exports = mongoose.model('patientRequest', patientRequest);

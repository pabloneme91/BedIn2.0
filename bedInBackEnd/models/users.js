var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose');

var ObjectId=mongoose.Schema.Types.ObjectId;

var User = new mongoose.Schema({
  name: {type: String, required: true },
  username: {type: String, required: true, unique: true },
  createdAt: {type: Date, default: Date.now},
  rol: {type: String, default: 'user'},
  type : {type: String, required: true},
  hospitalCode:{type: ObjectId, ref: "hospitals"},
  osCode:{type: ObjectId, ref: "healthcares"}, 
  }, 
  {
    collections: 'users',
  } 
);

User.plugin(passportLocalMongoose, 
  {
    UserExistsError : 'El usuario ingresado ya existe',
    MissingUsernameError : 'Debe ingresar un usuario',
    MissingPasswordError : 'Debe ingresar una contraseña',
    IncorrectPasswordError: 'Los datos ingresados son incorrectos',
    IncorrectUsernameError: 'Los datos ingresados son incorrectos'
  });

module.exports = mongoose.model('users', User); 
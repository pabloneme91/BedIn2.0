const mongoose = require('mongoose');
var Promise = require("bluebird");

mongoose.Promise = Promise; 
mongoose.connect("mongodb://localhost/bedin");
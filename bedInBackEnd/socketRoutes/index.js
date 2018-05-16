const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const passport = require('passport');
const passportSocketIo = require('passport.socketio');
const cookieParser = require('cookie-parser');
server.listen(3030);

const MongoStore = require('../config/passport-mongoose')(app).mongoStore();

const patientRequestSocket = require('./patientRequest');

io.use(passportSocketIo.authorize({
  key: 'connect.sid',
  secret: 'secret',
	store: MongoStore,
  passport: passport,
  cookieParser: cookieParser
}));

io.on('connection', (socket) => {
	patientRequestSocket(socket).newRequest();
	patientRequestSocket(socket).setPatientState();
	patientRequestSocket(socket).matchPatient();
})

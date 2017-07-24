const passport = require('passport');
const  LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const flash = require('connect-flash');

var User = require('../models/users');

module.exports = function(app) {

	app.use(expressSession({
		secret : 'secret',
		resave: false,
  		saveUninitialized: true,
	}));

	app.use(flash());

	app.use(passport.initialize())
	app.use(passport.session())

	passport.use(new LocalStrategy(User.authenticate()));

	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());
}
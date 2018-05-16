const passport = require('passport');
const  LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
//const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(expressSession);
const mongoose = require('./mongoose');

var User = require('../models/users');

module.exports = function(app) {

	return {
		session:	() => {
			app.use(expressSession({
				secret : 'secret',
				store: new MongoStore({ mongooseConnection: mongoose.connection }),
				resave: false,
		  		saveUninitialized: true,
			}));

			//app.use(flash());

			app.use(passport.initialize())
			app.use(passport.session())

			passport.use(new LocalStrategy(User.authenticate()));

			passport.serializeUser(User.serializeUser());
			passport.deserializeUser(User.deserializeUser());
		},
		mongoStore: () => new MongoStore({ mongooseConnection: mongoose.connection }),
	}
}
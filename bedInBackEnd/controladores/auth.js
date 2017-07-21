const errorHandler = require('./errorHandler');

module.exports = {
	isLoggedIn : (req,res,next) => {
		if(req.isAuthenticated()) return next();
		return errorHandler.sendError(res,'Permiso denegado');
	}
}
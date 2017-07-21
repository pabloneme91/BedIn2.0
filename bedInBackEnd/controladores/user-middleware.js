const users = require ('../models/users'); 
const errorHandler = require('./errorHandler');

module.exports = {
	checkUserType : function(req,res,next){
		switch (req.user.type) {
			case 'Hospital' : 
				users.findById(req.user._id).populate('hospitals').exec()
				.then(data => { 
					req.user.data = data.hospitals;
				})
				.catch(err => {
					return errorHandler.sendError(res,err.name);
				})
				return next();
			case 'Healthcare' : 
				users.findById(req.user._id).populate('healthcares').exec()
				.then(data => { 
					req.user.data = data.healthcares;
				})
				.catch(err => {
					return errorHandler.sendError(res,err.name);
				})
				return next();
			case 'Bedin' : 
				req.user.data = null;
				return next();
			default :
				return errorHandler.sendError(res,'Permiso denegado');
		}
	}
}
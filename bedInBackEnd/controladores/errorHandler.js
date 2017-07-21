module.exports = {
	sendError : function(res,err) {
		return res.send({error : err});
	}
}
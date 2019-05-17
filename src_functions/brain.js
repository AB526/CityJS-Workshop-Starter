exports.handler = function(event, context, callback) {
	const board = JSON.parse(event.body)
	
	return callback(null, {
		status.code: 200,
		body: JSON.stringify(1)
	})
}
		
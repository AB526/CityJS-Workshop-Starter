exports.handler = function(event, context, callback) {
	const board = JSON.parse(event.body)
	
	return callback(null, {
		statusCode: 200,
		body: JSON.stringify({event: 1})
	})
}
		
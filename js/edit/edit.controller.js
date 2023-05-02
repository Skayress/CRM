
function init() {
	const id = getRequestId()
}

function getRequestId() {
	const params = new URLSearchParams(window.location.search)
	return params.get('id')
}

init()
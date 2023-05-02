import * as model from './../model.js'
import * as view from './table.view.js'

function init() {
	const requests = model.getRequests()
	view.renderRequest(requests)
}

init()
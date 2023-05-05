import * as model from './../model.js'
import * as view from './table.view.js'

function init() {
	const requests = model.getRequests()
	view.renderRequest(requests)
	addEventListeners()

	const newRequstsCount = model.countNewRequests()
	view.renderBadgeNew(newRequstsCount)
}

function addEventListeners() {
	view.elements.select.addEventListener('change', filterProducts)
	view.elements.topStatusBar.addEventListener('click', filterByStatus)
	view.elements.leftStatusLink.forEach((link) => {
		link.addEventListener('click', filterByStatus)
	})
}

function filterProducts() {
	const filter = model.changeFilter('products', this.value)
	const filterRequests = model.filterRequests(filter)
	view.renderRequest(filterRequests)
}

function filterByStatus(e) {
	const filter = model.changeFilter('status', e.target.dataset.value)
	const filterRequests = model.filterRequests(filter)
	view.renderRequest(filterRequests)
	view.updateActiveStatus(e.target.dataset.value)
}

init()
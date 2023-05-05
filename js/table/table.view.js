const elements = {
	table: document.querySelector('#tbody'),
	select: document.querySelector('#productSelect'),
	topStatusBar: document.querySelector('#topStatusBar'),
	leftStatusLink: document.querySelectorAll('[data-role="left-status"]'),
	leftPanelNav: document.querySelector('.left-panel__navigation'),
	badgeNew: document.querySelector('#badge-new')
}

function renderRequest(requests) {
	elements.table.innerHTML = '';

	const bages = {
		new: 'badge-danger',
		inwork: 'badge-warning',
		complete: 'badge-success',
	}

	for (let request of requests) {
		const template = `
			<tr>
				<th scope="row">${request.id}</th>
				<td>${request.date}</td>
				<td>${request.productName}</td>
				<td>${request.name}</td>
				<td>${request.email}</td>
				<td>${request.phone}</td>
				<td>
					<div class="badge badge-pill ${bages[request.status]}">${request.statusName}</div>
				</td>
				<td>
					<a href="edit.html?id=${request.id}">Редактировать</a>
				</td>
			</tr>`;

		elements.table.insertAdjacentHTML('beforeend', template)
	}
}

function updateActiveStatus(value) {
	elements.topStatusBar.querySelectorAll('a').forEach(link => link.classList.remove('active'))
	elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active')

	elements.leftStatusLink.forEach(link => link.classList.remove('active'))
	elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active')
}

function renderBadgeNew(number) {
	elements.badgeNew.innerText = number
	number === 0 ? elements.badgeNew.classList.add('none') : elements.badgeNew.classList.remove('none')
}

export { renderRequest, updateActiveStatus, renderBadgeNew, elements}
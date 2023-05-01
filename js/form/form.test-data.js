class ExampleItem {
	constructor(name, phone, email, product) {
		this.name = name
		this.phone = phone
		this.email = email
		this.product = product
	}
}

const testData = [
	new ExampleItem('Иван Фролов', parseInt('+420772551797'), 'frolow@gmail.com', 'course-js'),
	new ExampleItem('Елена Иванова', parseInt('+120772526943'), 'ivanova@gmail.com', 'course-html'),
	new ExampleItem('Василий Пупкин', parseInt('+820074821797'), 'pupkin@gmail.com', 'course-vue'),
	new ExampleItem('Светлана Козырь', parseInt('+725195845197'), 'kozyr@gmail.com', 'course-wordpress'),
	new ExampleItem('Роман Похоменко', parseInt('+520710678797'), 'pohomenko@gmail.com', 'course-php'),
]

function getRandomIndex(max) {
	return Math.floor(Math.random() * max)
}

export default function getRandomData() {
	const index = getRandomIndex(testData.length)
	return testData[index]
}
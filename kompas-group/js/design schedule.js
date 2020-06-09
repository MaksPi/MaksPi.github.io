// Тело шапки
let thead = document.querySelector('.design-schedule thead');
	console.log('Тело шапки:');
	console.log(thead);

// Все ячейки шапки
let thead_tr_th = document.querySelectorAll('.design-schedule thead tr th');
	console.log(`Количество ячеек в шапке: ${thead_tr_th.length}`);
	console.log('Коллекция ячеек в шапке:');
	console.log(thead_tr_th);

// Тело таблицы
let tbody = document.querySelector('.design-schedule tbody');
	console.log('Тело таблицы:');
	console.log(tbody);

// Получить кнопку "Добавить заказ"
let buttonAddOrder = document.getElementById('add-order');

// Добавить заказ
buttonAddOrder.onclick = function addOrder() {

	console.log('Тело таблицы:');
	console.log(tbody);

	// create tr_newOrder
	let tr_newOrder = document.createElement('tr');

	// add className
	tr_newOrder.className = 'new-order';

	// append tr_newOrder
	tbody.append(tr_newOrder);

	for (let i = 0; i <= (thead_tr_th.length - 1); i++) {
		// create td
		let td = document.createElement('td');
		// append td
		tr_newOrder.append(td);
	}

	// create tr
	let tr = document.createElement('tr');

	// append tr
	tbody.append(tr);

	for (let i = 0; i <= (thead_tr_th.length - 1); i++) {
		// create td
		let td = document.createElement('td');
		// append td
		tr.append(td);
	}

	// create span_plus
	let span_plus = document.createElement('span');

	// add className
	span_plus.className = 'add-task';

	// appand span_plus в первую ячейку последней строки
	tbody.lastChild.firstChild.append(span_plus);
	span_plus.innerHTML = '+';

	// create span_x
	let span_x = document.createElement('span');

	// add className
	span_x.className = 'delete-task';

	// appand span_x в первую ячейку последней строки
	tbody.lastChild.firstChild.append(span_x);
	span_x.innerHTML = 'x';

}

// Управление задачами (добавить/удалить задачу)
tbody.onclick = function removeTask(event) {
	console.log('Клик произошёл на:');
	console.log(event.target);

	// console.log('Имя класса клика:');
	// console.log(event.target.className);

	// console.log('Клик произошёл на строке (про-родитель клика):');
	// console.log(event.target.parentElement.parentElement);

	// Добавить задачу
	if (event.target.className == 'add-task') {

		// create tr
		let tr = document.createElement('tr');

		// Добавить новую строку сделующей за текущей
		event.target.parentElement.parentElement.after(tr);

		for (let i = 0; i <= (thead_tr_th.length - 1); i++) {
			// create td
			let td = document.createElement('td');
			// append td
			tr.append(td);
		}

		// create span_plus
		let span_plus = document.createElement('span');

		// add className
		span_plus.className = 'add-task';

		// appand span_plus в первую ячейку сделующей строки
		event.target.parentElement.parentElement.nextElementSibling.firstChild.append(span_plus);
		span_plus.innerHTML = '+';

		// create span_x
		let span_x = document.createElement('span');

		// add className
		span_x.className = 'delete-task';

		// appand span_plus в первую ячейку сделующей строки
		event.target.parentElement.parentElement.nextElementSibling.firstChild.append(span_x);
		span_x.innerHTML = 'x';

	}

	// Удалить задачу
	if (event.target.className == 'delete-task') {
		event.target.parentElement.parentElement.remove();
		// console.log(event.target.parentElement.parentElement);
	}

}
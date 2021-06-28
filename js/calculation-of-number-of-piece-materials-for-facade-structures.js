const order_name = document.getElementById('order-name');

const th_order_name = document.querySelector('.order-name th span');

const table_initial_data = document.querySelector('.initial-data');

const table_specification_of_elements_for_structure = document.querySelector('.specification-of-elements-for-structure');

const table_specification_of_hardware = document.querySelector('.specification-of-hardware');

/**/

function inner_order_name() {
	th_order_name.textContent = ` ${order_name.value}`;
}

function inner_position(event) {
	// если изменение произошло в ячейке, которая содержит класс position или которая содержит класс delete-row
	if (event.target.classList.contains('position') /*|| event.target.classList.contains('delete-row')*/) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		table_specification_of_elements_for_structure.tBodies[event_index_tr].rows[0].cells[1].querySelector('span').textContent = ` ${event.target.value}`;
	}
}

function fill_sequential_numbers() {
	// для таблицы с исходными данными
	for (let i = 0; i < table_initial_data.tBodies[0].rows.length; i++) {
		table_initial_data.tBodies[0].rows[i].cells[1].textContent = i + 1;
	}
	// для спецификации элементов конструкций
	// для всех tbodies
	for (let i = 0; i < table_specification_of_elements_for_structure.tBodies.length; i++) {
		// для всех строк внутри каждого tbody
		for (let j = 1; j < table_specification_of_elements_for_structure.tBodies[i].rows.length; j++) {
			table_specification_of_elements_for_structure.tBodies[i].rows[j].cells[1].textContent = j;
		}
	}
	// для спецификации метизов
	for (let i = 0; i < table_specification_of_hardware.tBodies[0].rows.length; i++) {
		table_specification_of_hardware.tBodies[0].rows[i].cells[0].textContent = i + 1;
	}
}
// выполнить функцию при загрузке страницы - заполнить колонки порядковыми номерами
fill_sequential_numbers();

function add_initial_data_table_row(event) {
	// если клик произошел на кнопке с классом add-row...
	if (event.target.classList.contains('add-row')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;

		// клонировать строку, на которой произошло событиее
		let new_tr = event_tr.cloneNode(true);
		//...и вставить клон (новую строку) после той, на которой произошло событиее
		event_tr.after(new_tr);

		// очистить содержимое в новой строеке после клонирования
		for (let i = 2; i < new_tr.cells.length; i++) {
			new_tr.cells[i].children[0].value = '';
		}

		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		// клонировать tbody (в спецификации элементов конструкции) с тем индексом строки, на которой произошло событие
		let new_tbody = table_specification_of_elements_for_structure.tBodies[event_index_tr].cloneNode(true);
		//...и вставить клон (новый tbody) после того, который был клонирован
		table_specification_of_elements_for_structure.tBodies[event_index_tr].after(new_tbody);

		// для спецификации элементов конструкции
		// очистить поз.
		new_tbody.rows[0].cells[1].querySelector('span').textContent = '';
		// очистить все кол-ва в новом tbody
		for (let i = 1; i < new_tbody.rows.length; i++) {
			new_tbody.rows[i].cells[3].children[0].value = '';
		}



		// Вариант 2 - последовательное создание и вставка элементов, копирование названий классов
		/*
		// ...создать строку tr...
		let tr = document.createElement('tr');
		// ...и вставить новую строку после той, на которой произошло событиее
		event.target.parentElement.parentElement.after(tr);
		// для всех ячеек строки, на которой произошло событиее
		for (let i = 0; i < event.target.parentElement.parentElement.cells.length; i++) {
			// создать теги td...
			let td = document.createElement('td');
			// и вставить в новую строку
			tr.append(td);
		}
		// присвоить класс первой ячейке новой строки
		tr.cells[0].className = 'hidden';
		// для первой ячеки новой строки
		for (let i = 0; i < 2; i++) {
			// создать 2 тега span
			let span = document.createElement('span');
			// и вставить спаны в первую ячейку новой строки
			tr.cells[0].append(span);
		}
		// присвоить новым спанам имена классов
		tr.cells[0].children[0].className = 'add-row';
		tr.cells[0].children[1].className = 'delete-row';
		// начиная с третьей ячейки строки, на которой произошло событиее...
		for (let i = 2; i < event.target.parentElement.parentElement.cells.length; i++) {
			// ...создать тег input
			let input = document.createElement('input');
			// для всех инпутов создать атрибут
			input.setAttribute('tipe', 'text');
			// для всех инпутов создать атрибут
			input.setAttribute('size', '1');
			// вставить тег input в тег td
			tr.cells[i].append(input);
			// у всех существовавших инпутов...
			for (j = 0; j < event.target.parentElement.parentElement.cells[i].children.length; j++) {
				// ...получить имена классов...
				let classNames = event.target.parentElement.parentElement.cells[i].children[j].className;
				// ...и скопировать эти классы в новые инпуты, при условии, если имена классов были скопированы
				if (classNames) {
					input.className = classNames;
				}
			}
		}
		*/
		// заполнить колонки порядковыми номерами
		fill_sequential_numbers();
	}
}

function delete_initial_data_table_row(event) {
	// если клик произошел на кнопке с классом delete-row...
	if (event.target.classList.contains('delete-row')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// и если в таблице только одна строка
		if (table_initial_data.tBodies[0].rows.length == 1) {
			// начиная с третьей ячейки строки, на которой произошло событиее...
			for (let i = 2; i < event_tr.cells.length; i++) {
				// очистить содержимое
				event_tr.cells[i].children[0].value = '';
			}
			// для спецификации элементов конструкции
			// очистить поз.
			table_specification_of_elements_for_structure.tBodies[0].rows[0].cells[1].querySelector('span').textContent = '';
			// ... и очистить все кол-ва
			for (let i = 1; i < table_specification_of_elements_for_structure.tBodies[0].rows.length; i++) {
				table_specification_of_elements_for_structure.tBodies[0].rows[i].cells[3].children[0].value = '';
			}
		} else {
			// индекс строки, на которой произошло событие
			let event_index_tr = event_tr.sectionRowIndex;
			// удалить строку, на которой произошло событиее
			event_tr.remove();
			// удалить tbody (в спецификации элементов конструкции) с тем индексом строки, на которой произошло событие
			table_specification_of_elements_for_structure.tBodies[event_index_tr].remove();
		}
	}
}

function calculate_quantity_of_mullions(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-floors
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-floors')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_fields_in_width = event_tr.querySelector('.quantity-of-fields-in-width');
		let quantity_of_floors = event_tr.querySelector('.quantity-of-floors');
		let quantity_of_mullions = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-mullions');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_fields_in_width.value && quantity_of_floors.value) {
			quantity_of_mullions.value = (+quantity_of_fields_in_width.value + 1) * quantity_of_floors.value;
		} else {
			quantity_of_mullions.value = '';
		}
	}
}

function calculate_quantity_of_mullion_drips(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-floors, или в теге с классом
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-floors')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_mullions = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-mullions');
		let quantity_of_mullion_drips = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-mullion-drips');

		quantity_of_mullion_drips.value = quantity_of_mullions.value;
	}
	// если изменение произошло в теге с классом quantity-of-mullions
	if (event.target.classList.contains('quantity-of-mullions')) {
		let quantity_of_mullions = event.target;
		// одно из tBodies, на котором произошло событие
		let event_tbody = event.target.closest('tbody');

		let quantity_of_mullion_drips = event_tbody.querySelector('.quantity-of-mullion-drips')
		quantity_of_mullion_drips.value = quantity_of_mullions.value;
	}
}

function calculate_quantity_of_mullion_connectors(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-floors
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-floors')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_fields_in_width = event_tr.querySelector('.quantity-of-fields-in-width');
		let quantity_of_floors = event_tr.querySelector('.quantity-of-floors');
		let quantity_of_mullion_connectors = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-mullion-connectors');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_fields_in_width.value && quantity_of_floors.value > 1) {
			quantity_of_mullion_connectors.value = (+quantity_of_fields_in_width.value + 1) * (quantity_of_floors.value - 1);
		} else {
			quantity_of_mullion_connectors.value = "";
		}
	}
}

function calculate_quantity_of_transoms(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-fields-in-height
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-fields-in-height')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_fields_in_width = event_tr.querySelector('.quantity-of-fields-in-width');
		let quantity_of_fields_in_height = event_tr.querySelector('.quantity-of-fields-in-height');
		let quantity_of_transoms = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-transoms');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_fields_in_width.value && quantity_of_fields_in_height.value) {
			quantity_of_transoms.value = quantity_of_fields_in_width.value * (+quantity_of_fields_in_height.value + 1);
		} else {
			quantity_of_transoms.value = "";
		}
	}
}

function calculate_quantity_of_transom_connectors(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-fields-in-height, или в теге с классом quantity-of-transoms
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-fields-in-height') || event.target.classList.contains('quantity-of-transoms')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_transoms = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-transoms');
		let quantity_of_transom_connectors = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-transom-connectors');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_transoms.value) {
			quantity_of_transom_connectors.value = quantity_of_transoms.value * 2;
		} else {
			quantity_of_transom_connectors.value = "";
		}
	}
}

function calculate_quantity_of_supports_for_glazing(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-fields-in-height, или в теге с классом quantity-of-transoms
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-fields-in-height') || event.target.classList.contains('quantity-of-transoms')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_transoms = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-transoms');
		let quantity_of_supports_for_glazing = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-supports-for-glazing');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_transoms.value) {
			quantity_of_supports_for_glazing.value = quantity_of_transoms.value * 2;
		} else {
			quantity_of_supports_for_glazing.value = "";
		}
	}
}

function calculate_quantity_of_bottom_brackets(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-mullions
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-mullions')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_fields_in_width = event_tr.querySelector('.quantity-of-fields-in-width');
		let quantity_of_mullions = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-mullions');
		let quantity_of_bottom_brackets = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-bottom-brackets');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_fields_in_width.value) {
			quantity_of_bottom_brackets.value = +quantity_of_fields_in_width.value + 1;
		} else {
			quantity_of_bottom_brackets.value = '';
		}
	}
}

function calculate_quantity_of_intermediate_brackets(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-floors
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-floors')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_fields_in_width = event_tr.querySelector('.quantity-of-fields-in-width');
		let quantity_of_floors = event_tr.querySelector('.quantity-of-floors');
		let quantity_of_intermediate_brackets = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-middle-brackets');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_fields_in_width.value && quantity_of_floors.value > 1) {
			quantity_of_intermediate_brackets.value = (+quantity_of_fields_in_width.value + 1) * (quantity_of_floors.value - 1);
		} else {
			quantity_of_intermediate_brackets.value = "";
		}
	}
}

function calculate_quantity_of_top_brackets(event) {
	// если изменение произошло в теге с классом quantity-of-fields-in-width или в теге с классом quantity-of-mullions
	if (event.target.classList.contains('quantity-of-fields-in-width') || event.target.classList.contains('quantity-of-mullions')) {
		// строка, на которой произошло событие
		let event_tr = event.target.parentElement.parentElement;
		// индекс строки, на которой произошло событие
		let event_index_tr = event_tr.sectionRowIndex;

		let quantity_of_fields_in_width = event_tr.querySelector('.quantity-of-fields-in-width');
		let quantity_of_mullions = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-mullions');
		let quantity_of_top_brackets = table_specification_of_elements_for_structure.tBodies[event_index_tr].querySelector('.quantity-of-top-brackets');
		// условие на проверку того, имеются ли значения в необходимых ячейках
		if (quantity_of_fields_in_width.value) {
			quantity_of_top_brackets.value = +quantity_of_fields_in_width.value + 1;
		} else {
			quantity_of_top_brackets.value = '';
		}
	}
}

function sums_of_quantities() {
	// Вариант 1
	let quantity_of_mullions = table_initial_data.querySelectorAll('.quantity-of-mullions');
	let quantity_of_mullion_drips = table_initial_data.querySelectorAll('.quantity-of-mullion-drips');
	let quantity_of_mullion_connectors = table_initial_data.querySelectorAll('.quantity-of-mullion-connectors');
	let quantity_of_transoms = table_initial_data.querySelectorAll('.quantity-of-transoms');
	let quantity_of_transom_connectors = table_initial_data.querySelectorAll('.quantity-of-transom-connectors');
	let quantity_of_supports_for_glazing = table_initial_data.querySelectorAll('.quantity-of-supports-for-glazing');
	let quantity_of_bottom_brackets = table_initial_data.querySelectorAll('.quantity-of-bottom-brackets');
	let quantity_of_intermediate_brackets = table_initial_data.querySelectorAll('.quantity-of-middle-brackets');
	let quantity_of_top_brackets = table_initial_data.querySelectorAll('.quantity-of-top-brackets');

	let total_quantity_of_mullions = table_initial_data.querySelector('.total-quantity-of-mullions');
	let total_quantity_of_mullion_drips = table_initial_data.querySelector('.total-quantity-of-mullion-drips');
	let total_quantity_of_mullion_connectors = table_initial_data.querySelector('.total-quantity-of-mullion-connectors');
	let total_quantity_of_transoms = table_initial_data.querySelector('.total-quantity-of-transoms');
	let total_quantity_of_transom_connectors = table_initial_data.querySelector('.total-quantity-of-transom-connectors');
	let total_quantity_of_supports_for_glazing = table_initial_data.querySelector('.total-quantity-of-supports-for-glazing');
	let total_quantity_of_bottom_brackets = table_initial_data.querySelector('.total-quantity-of-bottom-brackets');
	let total_quantity_of_intermediate_brackets = table_initial_data.querySelector('.total-quantity-of-middle-brackets');
	let total_quantity_of_top_brackets = table_initial_data.querySelector('.total-quantity-of-top-brackets');

	let sum_of_quantities_of_mullions = 0;
	let sum_of_quantities_of_mullion_drips = 0;
	let sum_of_quantities_of_mullion_connectors = 0;
	let sum_of_quantities_of_transoms = 0;
	let sum_of_quantities_of_transom_connectors = 0;
	let sum_of_quantities_of_supports_for_glazing = 0;
	let sum_of_quantities_of_bottom_brackets = 0;
	let sum_of_quantities_of_intermediate_brackets = 0;
	let sum_of_quantities_of_top_brackets = 0;

	for (let i = 0; i < quantity_of_mullions.length; i++) {
		sum_of_quantities_of_mullions += +quantity_of_mullions[i].value;
	}
	for (let i = 0; i < quantity_of_mullion_drips.length; i++) {
		sum_of_quantities_of_mullion_drips += +quantity_of_mullion_drips[i].value;
	}
	for (let i = 0; i < quantity_of_mullion_connectors.length; i++) {
		sum_of_quantities_of_mullion_connectors += +quantity_of_mullion_connectors[i].value;
	}
	for (let i = 0; i < quantity_of_transoms.length; i++) {
		sum_of_quantities_of_transoms += +quantity_of_transoms[i].value;
	}
	for (let i = 0; i < quantity_of_transom_connectors.length; i++) {
		sum_of_quantities_of_transom_connectors += +quantity_of_transom_connectors[i].value;
	}
	for (let i = 0; i < quantity_of_supports_for_glazing.length; i++) {
		sum_of_quantities_of_supports_for_glazing += +quantity_of_supports_for_glazing[i].value;
	}
	for (let i = 0; i < quantity_of_bottom_brackets.length; i++) {
		sum_of_quantities_of_bottom_brackets += +quantity_of_bottom_brackets[i].value;
	}
	for (let i = 0; i < quantity_of_intermediate_brackets.length; i++) {
		sum_of_quantities_of_intermediate_brackets += +quantity_of_intermediate_brackets[i].value;
	}
	for (let i = 0; i < quantity_of_top_brackets.length; i++) {
		sum_of_quantities_of_top_brackets += +quantity_of_top_brackets[i].value;
	}

	for (let i = 0; i < table_initial_data.tBodies[0].rows.length; i++) {
		for (let j = 6; j < table_initial_data.tBodies[0].rows[0].cells.length; j++) {
			// если не число или если пустая строка
			if (isNaN(+table_initial_data.tBodies[0].rows[i].cells[j].children.value) || table_initial_data.tBodies[0].rows[i].cells[j].children.value == '') {
				table_initial_data.tFoot.rows[0].cells[j - 4].textContent = '';
			}
		}
	}

	if (sum_of_quantities_of_mullions) {
		total_quantity_of_mullions.textContent = sum_of_quantities_of_mullions;
	}
	if (sum_of_quantities_of_mullion_drips) {
		total_quantity_of_mullion_drips.textContent = sum_of_quantities_of_mullion_drips;
	}
	if (sum_of_quantities_of_mullion_connectors) {
		total_quantity_of_mullion_connectors.textContent = sum_of_quantities_of_mullion_connectors;
	}
	if (sum_of_quantities_of_mullion_connectors) {
		total_quantity_of_mullion_connectors.textContent = sum_of_quantities_of_mullion_connectors;
	}
	if (sum_of_quantities_of_transoms) {
		total_quantity_of_transoms.textContent = sum_of_quantities_of_transoms;
	}
	if (sum_of_quantities_of_transom_connectors) {
		total_quantity_of_transom_connectors.textContent = sum_of_quantities_of_transom_connectors;
	}
	if (sum_of_quantities_of_supports_for_glazing) {
		total_quantity_of_supports_for_glazing.textContent = sum_of_quantities_of_supports_for_glazing;
	}
	if (sum_of_quantities_of_bottom_brackets) {
		total_quantity_of_bottom_brackets.textContent = sum_of_quantities_of_bottom_brackets;
	}
	if (sum_of_quantities_of_intermediate_brackets) {
		total_quantity_of_intermediate_brackets.textContent = sum_of_quantities_of_intermediate_brackets;
	}
	if (sum_of_quantities_of_top_brackets) {
		total_quantity_of_top_brackets.textContent = sum_of_quantities_of_top_brackets;
	}

	/*****/
	// Вариант 2
	// let total_quantity_of_mullions = table_initial_data.querySelector('.total-quantity-of-mullions');
	// let total_quantity_of_mullion_drips = table_initial_data.querySelector('.total-quantity-of-mullion-drips');
	// let total_quantity_of_mullion_connectors = table_initial_data.querySelector('.total-quantity-of-mullion-connectors');
	// let total_quantity_of_transoms = table_initial_data.querySelector('.total-quantity-of-transoms');
	// let total_quantity_of_transom_connectors = table_initial_data.querySelector('.total-quantity-of-transom-connectors');
	// let total_quantity_of_supports_for_glazing = table_initial_data.querySelector('.total-quantity-of-supports-for-glazing');
	// let total_quantity_of_bottom_brackets = table_initial_data.querySelector('.total-quantity-of-bottom-brackets');
	// let total_quantity_of_intermediate_brackets = table_initial_data.querySelector('.total-quantity-of-middle-brackets');
	// let total_quantity_of_top_brackets = table_initial_data.querySelector('.total-quantity-of-top-brackets');

	// let quantities_of_mullions_sell_index = table_initial_data.querySelectorAll('.quantity-of-mullions')[0].parentElement.cellIndex;
	// let quantities_of_mullionn_drips_sell_index = table_initial_data.querySelectorAll('.quantity-of-mullion-drips')[0].parentElement.cellIndex;
	// let quantities_of_mullion_connectors_sell_index = table_initial_data.querySelectorAll('.quantity-of-mullion-connectors')[0].parentElement.cellIndex;
	// let quantities_of_transoms_sell_index = table_initial_data.querySelectorAll('.quantity-of-transoms')[0].parentElement.cellIndex;
	// let quantities_of_transom_connectors_sell_index = table_initial_data.querySelectorAll('.quantity-of-transom-connectors')[0].parentElement.cellIndex;
	// let quantities_of_supports_for_glazing_sell_index = table_initial_data.querySelectorAll('.quantity-of-supports-for-glazing')[0].parentElement.cellIndex;
	// let quantities_of_bottom_brackets_sell_index = table_initial_data.querySelectorAll('.quantity-of-bottom-brackets')[0].parentElement.cellIndex;
	// let quantities_of_intermediate_brackets_sell_index = table_initial_data.querySelectorAll('.quantity-of-middle-brackets')[0].parentElement.cellIndex;
	// let quantities_of_top_brackets_sell_index = table_initial_data.querySelectorAll('.quantity-of-top-brackets')[0].parentElement.cellIndex;

	// let sum_of_quantities_of_mullions = 0;
	// let sum_of_quantities_of_mullion_drips = 0;
	// let sum_of_quantities_of_mullion_connectors = 0;
	// let sum_of_quantities_of_transoms = 0;
	// let sum_of_quantities_of_transom_connectors = 0;
	// let sum_of_quantities_of_supports_for_glazing = 0;
	// let sum_of_quantities_of_bottom_brackets = 0;
	// let sum_of_quantities_of_intermediate_brackets = 0;
	// let sum_of_quantities_of_top_brackets = 0;

	// // console.log(table_initial_data.tBodies[0].rows.length);
	// for (let i = 0; i < table_initial_data.tBodies[0].rows.length; i++) {
	//	// если число
	//	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_mullions_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_mullions += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_mullions_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_mullionn_drips_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_mullion_drips += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_mullionn_drips_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_mullion_connectors_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_mullion_connectors += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_mullion_connectors_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_transoms_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_transoms += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_transoms_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_transom_connectors_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_transom_connectors += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_transom_connectors_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_supports_for_glazing_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_supports_for_glazing += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_supports_for_glazing_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_bottom_brackets_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_bottom_brackets += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_bottom_brackets_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_intermediate_brackets_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_intermediate_brackets += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_intermediate_brackets_sell_index].children[0].value;
	// 	}
	//	// если число
	// 	if (!isNaN(+table_initial_data.tBodies[0].rows[i].cells[quantities_of_top_brackets_sell_index].children[0].value)) {
	// 		sum_of_quantities_of_top_brackets += +table_initial_data.tBodies[0].rows[i].cells[quantities_of_top_brackets_sell_index].children[0].value;
	// 	}

	// 	for (let j = 6; j < table_initial_data.tBodies[0].rows[0].cells.length; j++) {
	//	// если не число или если пустая строка
	// 		if (isNaN(+table_initial_data.tBodies[0].rows[i].cells[j].children.value) || table_initial_data.tBodies[0].rows[i].cells[j].children.value == '') {
	// 			table_initial_data.tFoot.rows[0].cells[j - 4].textContent = '';
	// 		}
	// 	}
	// }

	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_mullions) {
	// 	total_quantity_of_mullions.textContent = sum_of_quantities_of_mullions;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_mullion_drips) {
	// 	total_quantity_of_mullion_drips.textContent = sum_of_quantities_of_mullion_drips;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_mullion_connectors) {
	// 	total_quantity_of_mullion_connectors.textContent = sum_of_quantities_of_mullion_connectors;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_transoms) {
	// 	total_quantity_of_transoms.textContent = sum_of_quantities_of_transoms;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_transom_connectors) {
	// 	total_quantity_of_transom_connectors.textContent = sum_of_quantities_of_transom_connectors;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_supports_for_glazing) {
	// 	total_quantity_of_supports_for_glazing.textContent = sum_of_quantities_of_supports_for_glazing;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_bottom_brackets) {
	// 	total_quantity_of_bottom_brackets.textContent = sum_of_quantities_of_bottom_brackets;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_intermediate_brackets) {
	// 	total_quantity_of_intermediate_brackets.textContent = sum_of_quantities_of_intermediate_brackets;
	// }
	// если в переменной имеется какое-то значение
	// if (sum_of_quantities_of_top_brackets) {
	// 	total_quantity_of_top_brackets.textContent = sum_of_quantities_of_top_brackets;
	// }

	/*Закомментировал данную проверку, так как выше - в конце общего цикла, написал другую, которая заменяет эту*/
	// если в таблице только одна строка
	// if (table_initial_data.tBodies[0].rows.length == 1) {
	// 	// если пустая строка
	// 	for (let i = 6; i < table_initial_data.tBodies[0].rows[0].cells.length; i++) {
	// 		if (table_initial_data.tBodies[0].rows[0].cells[i].children[0].value == '') {
	// 			table_initial_data.tFoot.rows[0].cells[i - 4].textContent = '';
	// 		}
	// 	}
	// }
}

function calculate_sum_bolts_M10_80_DIN_931_for_fixing_reinforced_transom_connectors() {
	let quantity_of_fields_in_width = table_initial_data.querySelectorAll('.quantity-of-fields-in-width');
	let quantity_of_transoms = table_initial_data.querySelectorAll('.quantity-of-transoms');
	let bolt_M10_80_DIN_931_for_fixing_reinforced_transom_connectors = table_specification_of_hardware.querySelector('.bolt-M10-80-DIN-931-for-fixing-reinforced-transom-connectors');

	let sum_of_quantities_of_fields_in_width = 0;
	let sum_of_quantities_of_transoms = 0;

	for (let i = 0; i < quantity_of_fields_in_width.length; i++) {
		sum_of_quantities_of_fields_in_width += +quantity_of_fields_in_width[i].value;
		// console.log(sum_of_quantities_of_fields_in_width);
	}
	for (let i = 0; i < quantity_of_transoms.length; i++) {
		sum_of_quantities_of_transoms += +quantity_of_transoms[i].value;
		// console.log(sum_of_quantities_of_transoms);
	}

	if (sum_of_quantities_of_fields_in_width && sum_of_quantities_of_transoms) {
		bolt_M10_80_DIN_931_for_fixing_reinforced_transom_connectors.textContent = ((sum_of_quantities_of_fields_in_width + 1) * sum_of_quantities_of_transoms) * 2;
	}

	// if (total_quantity_of_mullions.value == "" || total_quantity_of_transoms.value == "") {
	// 	bolt_M10_80_DIN_931.data = "";
	// } else {
	// 	bolt_M10_80_DIN_931.data = ( (+quantity_of_fields_in_width.value + 1) * quantity_of_transoms.value) * 2;
	// }
}

function calculate_sum_bolts_M10_80_DIN_931_for_fixing_mullion() {
	let quantity_of_mullions = table_specification_of_elements_for_structure.querySelectorAll('.quantity-of-mullions');
	let bolt_M10_80_DIN_931_for_fixing_mullion = table_specification_of_hardware.querySelector('.bolt-M10-80-DIN-931-for-fixing-mullion');

	let sum_of_quantities_of_mullions = 0;

	for (let i = 0; i < quantity_of_mullions.length; i++) {
		if (quantity_of_mullions[i].value) {
			sum_of_quantities_of_mullions += +quantity_of_mullions[i].value;
		}
	}
	if (sum_of_quantities_of_mullions) {
		bolt_M10_80_DIN_931_for_fixing_mullion.textContent = sum_of_quantities_of_mullions;
	}
}

function calculate_sum_nuts_М10_А2_DIN_934_for_fixing_mullion() {
	let bolt_M10_80_DIN_931_for_fixing_mullion = table_specification_of_hardware.querySelector('.bolt-M10-80-DIN-931-for-fixing-mullion');
	let nut_М10_А2_DIN_934_for_fixing_mullion = table_specification_of_hardware.querySelector('.nut-М10-А2-DIN-934-for-fixing-mullion');

	nut_М10_А2_DIN_934_for_fixing_mullion.textContent = bolt_M10_80_DIN_931_for_fixing_mullion.textContent;
}

function calculate_sum_washers_10_А2_DIN_125_for_fixing_mullion() {
	let bolt_M10_80_DIN_931_for_fixing_mullion = table_specification_of_hardware.querySelector('.bolt-M10-80-DIN-931-for-fixing-mullion');
	let washer_10_А2_DIN_125_for_fixing_mullion = table_specification_of_hardware.querySelector('.washer-10-А2-DIN-125-for-fixing-mullion');

	washer_10_А2_DIN_125_for_fixing_mullion.textContent = bolt_M10_80_DIN_931_for_fixing_mullion.textContent;
}

function calculate_sum_spring_washers_10_А2_DIN_7980_for_fixing_mullion() {
	let bolt_M10_80_DIN_931_for_fixing_mullion = table_specification_of_hardware.querySelector('.bolt-M10-80-DIN-931-for-fixing-mullion');
	let spring_washer_10_А2_DIN_7980_for_fixing_mullion = table_specification_of_hardware.querySelector('.spring-washer-10-А2-DIN-7980-for-fixing-mullion');

	spring_washer_10_А2_DIN_7980_for_fixing_mullion.textContent = bolt_M10_80_DIN_931_for_fixing_mullion.textContent;
}

function calculate_sum_screws_3_9x13_А2_DIN_7981_for_fixing_mullion_connectors() {
	let quantity_of_mullion_connectors = table_specification_of_elements_for_structure.querySelector('.quantity-of-mullion-connectors');
	let screw_3_9x13_А2_DIN_7981_for_fixing_mullion_connectors = table_specification_of_hardware.querySelector('.screw-3-9x13-А2-DIN-7981-for-fixing-mullion-connectors');

	if (quantity_of_mullion_connectors.value) {
		screw_3_9x13_А2_DIN_7981_for_fixing_mullion_connectors.textContent = quantity_of_mullion_connectors.value * 4;
	}
}

function calculate_screws_3_9x13_А2_DIN_7981_for_fixing_transoms_to_mullions() {
	let quantity_of_transoms = table_specification_of_elements_for_structure.querySelector('.quantity-of-transoms');
	let screw_3_9x13_А2_DIN_7981_for_fixing_transoms_to_mullions = table_specification_of_hardware.querySelector('.screw-3-9x13-А2-DIN-7981-for-fixing-transoms-to-mullions');

	if (quantity_of_transoms.value) {
		screw_3_9x13_А2_DIN_7981_for_fixing_transoms_to_mullions.textContent = quantity_of_transoms.value * 4;
	}
}

function calculate_screws_3_9x16_А2_DIN_7981_for_fixing_transom_connectors() {
	let quantity_of_transom_connectors = table_specification_of_elements_for_structure.querySelector('.quantity-of-transom-connectors');
	let screw_3_9x16_А2_DIN_7981_for_fixing_transom_connectors = table_specification_of_hardware.querySelector('.screw-3-9x16-А2-DIN-7981-for-fixing-transom-connectors');

	if (quantity_of_transom_connectors.value) {
		screw_3_9x16_А2_DIN_7981_for_fixing_transom_connectors.textContent = quantity_of_transom_connectors.value * 6; // кол-во саморезов зависит от соединителя ригеля
		screw_3_9x16_А2_DIN_7981_for_fixing_transom_connectors.style = "color: red";
	}
}

/**/

order_name.onchange = () => {
	inner_order_name();
}

table_initial_data.onclick = () => {
	add_initial_data_table_row(event); // добавить строку в таблице с исходными донными
	delete_initial_data_table_row(event); // добавить строку в таблице с исходными донными
	fill_sequential_numbers(); // заполнить колонки порядковыми номерами
	// sums_of_quantities(); // пересчитать суммы количеств
}

table_initial_data.onchange = () => {
	inner_position(event); // внести позиции в спецификации элементов конструкций
	calculate_quantity_of_mullions(event);
	calculate_quantity_of_mullion_drips(event);
	calculate_quantity_of_mullion_connectors(event);
	calculate_quantity_of_transoms(event);
	calculate_quantity_of_transom_connectors(event);
	calculate_quantity_of_supports_for_glazing(event);
	calculate_quantity_of_bottom_brackets(event); // пересчитать кол-во нижних кронштейнов
	calculate_quantity_of_intermediate_brackets(event); // пересчитать кол-во промежуточных кронштейнов
	calculate_quantity_of_top_brackets(event); // пересчитать кол-во верхних кронштейнов
	// sums_of_quantities(); // пересчитать суммы количеств
	calculate_sum_bolts_M10_80_DIN_931_for_fixing_reinforced_transom_connectors();
	calculate_sum_bolts_M10_80_DIN_931_for_fixing_mullion(); // пересчитать кол-во болтов для крепления стоек
	calculate_sum_nuts_М10_А2_DIN_934_for_fixing_mullion() // пересчитать кол-во гаек для крепления стоек
	calculate_sum_washers_10_А2_DIN_125_for_fixing_mullion() // пересчитать кол-во шайб для крепления стоек
	calculate_sum_spring_washers_10_А2_DIN_7980_for_fixing_mullion() // пересчитать кол-во шайб пружинных для крепления стоек
	calculate_sum_screws_3_9x13_А2_DIN_7981_for_fixing_mullion_connectors() // пересчитать кол-во саморезов для крепления стоечных соединителей
	calculate_screws_3_9x13_А2_DIN_7981_for_fixing_transoms_to_mullions() // пересчитать кол-во саморезов для крепления ригелей к стойкам
	calculate_screws_3_9x16_А2_DIN_7981_for_fixing_transom_connectors() // пересчитать кол-во саморезов для крепления соединителей для ригелей
}

table_specification_of_elements_for_structure.onchange = () => {
	calculate_quantity_of_mullion_drips(event);
}
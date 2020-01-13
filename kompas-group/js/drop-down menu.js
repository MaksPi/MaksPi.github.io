// Вариант 2

let primary_menu = document.getElementById('primary-menu');

primary_menu.onmouseover = function(event) {
	let target = event.target;
	// console.log(target);
	// console.log(event.currentTarget);

	if (target.className == 'sf-with-ul' && target.parentElement.parentElement == event.currentTarget) {
		closeSubMenu();
	}

	if (target.className == 'sf-with-ul' && target.parentElement.parentElement.parentElement.parentElement == event.currentTarget) {
		closeSubMenu();
	}

	// console.log(target.parentElement);
	if (target.parentElement.matches('.menu-item')) {
		target.parentElement.classList.add("submenu-opened");

		// console.log(target.nextElementSibling);
		if (target.nextElementSibling) {
			let sub_menu = target.parentElement.querySelector('.sub-menu');
			sub_menu.style = "display: block";
		}
	}
}

document.onmouseover = function(event) {
	let target = event.target;
	// console.log(target);
	
	if (target.className != 'sf-with-ul' && target.className != 'sub-menu' && target.tagName != 'A') {
		closeMenu();
	}
}

function closeSubMenu() {
	let target = event.target;

	// console.log(target.parentElement.parentElement);
	for (let i of target.parentElement.parentElement.querySelectorAll('.submenu-opened')) {
		i.classList.remove("submenu-opened");
	}

	for (let i of target.parentElement.parentElement.querySelectorAll('.sub-menu')) {
		i.style = "display: none";
	}
}

function closeMenu() {
	for (let i of primary_menu.querySelectorAll('.submenu-opened')) {
		i.classList.remove("submenu-opened");
	}

	for (let i of primary_menu.querySelectorAll('.sub-menu')) {
		i.style = "display: none";
	}
}
/***********************************************/

// Вариант 1 (поиск каждого пункта меню отдельно)

// var menu_item_load_collection = document.getElementById('menu-item-load-collection');
// var sub_menu_load_collection = menu_item_load_collection.querySelector('.sub-menu');

// var menu_item_strength_calculations = document.getElementById('menu-item-strength-calculations');
// var sub_menu_strength_calculations = menu_item_strength_calculations.querySelector('.sub-menu');

// var menu_item_heat_engineering_calculations = document.getElementById('menu-item-heat-engineering-calculations');
// var sub_menu_heat_engineering_calculations = menu_item_heat_engineering_calculations.querySelector('.sub-menu');

// menu_item_load_collection.onmouseover = function() {
// 	this.classList.add("submenu-opened");
// 	sub_menu_load_collection.style = "display: block";
// }

// menu_item_load_collection.onmouseout = function() {
// 	this.classList.remove("submenu-opened");
// 	sub_menu_load_collection.style = "display: none";
// }

// menu_item_strength_calculations.onmouseover =  function() {
// 	this.classList.add("submenu-opened");
// 	sub_menu_strength_calculations.style = "display: block";
// }

// menu_item_strength_calculations.onmouseout = function() {
// 	this.classList.remove("submenu-opened");
// 	sub_menu_strength_calculations.style = "display: none";
// }

// menu_item_heat_engineering_calculations.onmouseover = function() {
// 	this.classList.add("submenu-opened");
// 	sub_menu_heat_engineering_calculations.style = "display: block";
// }

// menu_item_heat_engineering_calculations.onmouseout = function() {
// 	this.classList.remove("submenu-opened");
// 	sub_menu_heat_engineering_calculations.style = "display: none";
// }
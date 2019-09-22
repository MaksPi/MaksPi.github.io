// найти главное меню
var primary_menu = document.getElementById('primary-menu');

primary_menu.onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'menu-item') {
		console.log("Find!");
	}
}

// Переписать этот велосипед

/*********************************************************************************************************************/

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
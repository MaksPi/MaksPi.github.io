// Высота конструкции, H
let H = document.getElementById("H");

// Шаг стоек, B1
let B1 = document.getElementById("B1");

// Шаг стоек, B2
let B2 = document.getElementById("B2");

// Шаг ригелей, h1
let h1 = document.getElementById("h1");

// Шаг ригелей, h2
let h2 = document.getElementById("h2");

// Толщина заполнения, t
let t = document.getElementById("t");

// расстояние от стойки до оси подкладки, a
let a = document.getElementById("a");

// Допустимый прогиб для стойки, fдоп (ст)
let f_mullion_permiss = document.getElementById("f_mullion_permiss");

// Допустимый прогиб для ригеля (в направлении действия ветровой нагрузки), fдоп (риг)
let f_transom_wind_permiss = document.getElementById("f_transom_wind_permiss");

// Допустимый прогиб для ригеля (в направлении действия нагрузки от собственного веса и веса заполнения), fдоп (риг)
let f_transom_vertical_load_permiss = document.getElementById("f_transom_vertical_load_permiss");

// Предел прочности материала стойки и ригеля, Ry
let Ry = document.getElementById("Ry");

// Модуль упругости материала стойки и ригеля, E
let E = document.getElementById("E");

// Удельный вес материала стойки и ригеля, γ ст/р
let γ_const = document.getElementById("γ_const");

// Удельный вес материала заполнения, γ зап
let γ_filling = document.getElementById("γ_filling");

// Поле для выбора материала стойки / ригеля
let material_const = document.getElementById("material_const");

// Список материалов стойки / ригеля
let material_const_list = document.getElementById("material_const_list");

// Поле для выбора материала заполнения
let material_filling = document.getElementById("material_filling");

// Список материалов заполнения
let material_filling_list = document.getElementById("material_filling_list");

// Предельное расчётное значение ветровой нагрузки, Wm
let Wm = document.getElementById("Wm");
Wm.style.color = "#6d6d6d";

// Ветровая нагрузка, приведённая к линейной равномерно распределённой нагрузке на стойку, Qст
let Q_mullion = document.getElementById("Q_mullion");

// Ветровая нагрузка, приведённая к линейной равномерно распределённой нагрузке на стойку, Qриг
let Q_transom = document.getElementById("Q_transom");

// Собственный вес наибольшего ригеля, Fриг
let F_transom = document.getElementById("F_transom");

// Собственный вес наибольшего заполнения, Fзап
let F_filling = document.getElementById("F_filling");

// Минимально необходимый осевой момент инерции стойки, Ix (ст)
let Ix_mullion_min = document.getElementById("Ix_mullion_min");

// Минимально необходимый осевой момент инерции ригеля (в направлении действия ветровой нагрузки), Ix (риг)
let Ix_transom_min = document.getElementById("Ix_transom_min");

// Минимально необходимый осевой момент инерции ригеля (в направлении действия нагрузки от собственного веса заполнения), Iy (риг)
let Iy_transom_min = document.getElementById("Iy_transom_min");

// Площадь сечения ригеля (из каталога профильной системы), Aриг
let A_transom = document.getElementById("A_transom");

// Осевой момент инерции стойки (из каталога профильной системы), Ix (ст)
let Ix_mullion = document.getElementById("Ix_mullion");

// Осевой момент инерции ригеля (в направлении действия ветровой нагрузки - из каталога профильной системы), Ix (риг)
let Ix_transom = document.getElementById("Ix_transom");

// Осевой момент инерции ригеля (в направлении действия нагрузки от собственного веса заполнения - из каталога профильной системы), Iy (риг)
let Iy_transom = document.getElementById("Iy_transom");

// Фактический прогиб стойки, fфакт (ст)
let f_mullion_fact = document.getElementById("f_mullion_fact");

// Фактический прогиб ригеля от действия ветровой нагрузки, fфакт (риг)
let f_transom_wind_fact = document.getElementById("f_transom_wind_fact");

// Фактический прогиб ригеля от действия нагрузки от веса заполнения, fфакт (риг)
let f_transom_filling_fact = document.getElementById("f_transom_filling_fact");

// Фактический прогиб ригеля от действия нагрузки от собственного веса, fфакт (риг)
let f_transom_self_fact = document.getElementById("f_transom_self_fact");

// Фактический суммарный прогиб ригеля от действия нагрузки от собственного веса и веса заполнения, fфакт (риг)
let f_transom_vertical_load_fact = document.getElementById("f_transom_vertical_load_fact");

// Кнопка Расчитать
let calculate = document.getElementById("calculate");


/**/


// Физические свойства материалов
let materials_const = {
	"Алюминий":{
		E:700000,
		γ:2700
	},
	"Сталь":{
		E:2000000,
		γ:7850
	}
}

let materials_filling = {
	"Стекло":{
		γ:2500
	}
}

// Создать список материалов стойки / ригеля
for (let key in materials_const) {
	let option_material_const_list = document.createElement('option');
	option_material_const_list.innerHTML = key;
	material_const_list.append(option_material_const_list);
}

// Создать список материалов заполнения
for (let key in materials_filling) {
	let option_material_filling_list = document.createElement('option');
	option_material_filling_list.innerHTML = key;
	material_filling_list.append(option_material_filling_list);
}


/**/


// Обработать Input для ввода дробных чисел



/**/


// Вычислить допустимый прогиб для стойки, fдоп (ст)
function calculate_f_mullion_permiss() {
	if (H.value) {
		f_mullion_permiss.value = Math.round(H.value * 1000 / 300 * 10) / 10;
	} else {
		f_mullion_permiss.value = "";
	}
}

// Вычислить допустимый прогиб для ригеля (в направлении действия ветровой нагрузки), fдоп (риг)
function calculate_f_transom_wind_permiss() {
	if (B1.value || B2.value) {
		f_transom_wind_permiss.value = Math.round(Math.max(B1.value, B2.value) * 1000 / 300 * 10) / 10;
	} else {
		f_transom_wind_permiss.value = "";
	}
}

// Получить значение модуля упругости выбранного материала стойки и ригеля, E
function get_E_const() {
	// Получить значение (наименование) материала
	let selected_material_const = material_const.value;
	
	if (selected_material_const) {
		E.value = materials_const[selected_material_const].E;
	} else {
		E.value = "";
	}
}

// Получить значение удельного веса выбранного материала стойки и ригеля, γст/р
function get_γ_const() {
	// Получить значение (наименование) материала
	let selected_material_const = material_const.value;
	
	if (selected_material_const) {
		γ_const.value = materials_const[selected_material_const].γ;
	} else {
		γ_const.value = "";
	}
}

// Получить значение удельного веса выбранного материала заполнения, γзап
function get_γ_filling() {
	// Получить значение (наименование) материала
	let selected_material_filling = material_filling.value;
	
	if (selected_material_filling) {
		γ_filling.value = materials_filling[selected_material_filling].γ;
	} else {
		γ_filling.value = "";
	}
}

// Вычислить ветровую нагрузка, приведённую к линейной равномерно распределённой нагрузке на стойку, Qст
function calculate_Q_mullion() {
	if (Wm.value && (B1.value || B2.value)) {
		Q_mullion.value = Math.round(Wm.value * (B1.value / 2 + B2.value / 2) * 10) / 10;
	} else {
		Q_mullion.value = "";
	}
}

// Вычислить ветровую нагрузку, приведённую к линейной равномерно распределённой нагрузке на ригель, Qриг
function calculate_Q_transom() {
	if (Wm.value && (B1.value || B2.value) && (h1.value || h2.value)) {
		Q_transom.value = Math.round(
			Wm.value * Math.max(
				Math.min(B1.value, h1.value) / 2 + Math.min(B1.value, h2.value) / 2,
				Math.min(B2.value, h1.value) / 2 + Math.min(B2.value, h2.value) / 2) * 10) / 10;
	} else {
		Q_transom.value = "";
	}
}

// Вычислить собственный вес наибольшего поля заполнения, F зап
function calculate_F_filling() {
	if ((B1.value || B2.value) && (h1.value || h2.value) && t.value && γ_filling.value) {
		F_filling.value = Math.round(
			(Math.max(B1.value, B2.value)) *
			(Math.max(h1.value, h2.value)) *
			t.value / Math.pow(10, 2) *
			γ_filling.value * 10) / 10;
	} else {
		F_filling.value = "";
	}
}

// Вычислить минимально необходимый осевой момент инерции стойки, Ix (ст)
function calculate_Ix_mullion_min() {
	if ((B1.value || B2.value) && Wm.value && H.value && E.value && f_mullion_permiss.value) {
		Ix_mullion_min.value = Math.round(
			5 / 384 *
			(Q_mullion.value / Math.pow(10, 2) * Math.pow(H.value * Math.pow(10, 2), 4)) /
			(E.value * f_mullion_permiss.value / 10) * 10) / 10;
	} else {
		Ix_mullion_min.value = "";
	}
}

// Вычислить минимально необходимый осевой момент инерции ригеля (в направлении действия ветровой нагрузки), Ix (риг)
function calculate_Ix_transom_min() {
	if ((B1.value || B2.value) && (h1.value || h2.value) && Wm.value && E.value && f_transom_wind_permiss.value) {
		Ix_transom_min.value = Math.round(
			5 / 384 *
			(Q_transom.value / Math.pow(10, 2) * Math.pow(Math.max(B1.value, B2.value) * Math.pow(10, 2), 4)) /
			(E.value * f_transom_wind_permiss.value / 10) * 10) / 10;
	} else {
		Ix_transom_min.value = "";
	}
}

// Вычислить минимально необходимый осевой момент инерции ригеля (в направлении действия ветровой нагрузки), Ix (риг)
function calculate_Iy_transom_min() {
	if (F_filling.value && a.value && (B1.value || B2.value) && (h1.value || h2.value) && E.value && f_transom_vertical_load_permiss.value) {
		Iy_transom_min.value = Math.round(
			F_filling.value / 2 * a.value *
			(3 * Math.pow(Math.max(B1.value, B2.value) * Math.pow(10, 2), 2) - 4 * Math.pow(a.value, 2)) /
			(24 * E.value * f_transom_vertical_load_permiss.value / 10) * 10) / 10;
	} else {
		Iy_transom_min.value = "";
	}
}

// Вычислить собственный вес наибольшего ригеля, Fриг
function calculate_F_transom() {
	if (γ_const.value && A_transom.value) {
		F_transom.value = Math.round(γ_const.value / Math.pow(10, 6) * A_transom.value * 100 * Math.max(B1.value, B2.value) * 100) / 100;
	} else {
		F_transom.value = "";
	}
}

// Вычислить фактический прогиб стойки, fфакт (ст)
function calculate_f_mullion_fact() {
	if ((B1.value || B2.value) && Wm.value && H.value && E.value && Ix_mullion.value) {
		f_mullion_fact.value = Math.round(
			5 / 384 *
			(Q_mullion.value / Math.pow(10, 2) * Math.pow(H.value * Math.pow(10, 2), 4)) /
			(E.value * Ix_mullion.value) * 10 * 10) / 10;
	} else {
		f_mullion_fact.value = "";
	}

	if (+f_mullion_fact.value <= +f_mullion_permiss.value) {
		f_mullion_fact.style.color = "green";
	} else {
		f_mullion_fact.style.color = "red";
	}
}

// Вычислить фактический прогиб ригеля от действия ветровой нагрузки, fфакт (риг)
function calculate_f_transom_wind_fact() {
	if ((B1.value || B2.value) && (h1.value || h2.value) && Wm.value && E.value && Ix_transom.value) {
		f_transom_wind_fact.value = Math.round(
			5 / 384 *
			(Q_transom.value / Math.pow(10, 2) * Math.pow(Math.max(B1.value, B2.value) * Math.pow(10, 2), 4)) /
			(E.value * Ix_transom.value) * 10 * 10) / 10;
	} else {
		f_transom_wind_fact.value = "";
	}

	if (+f_transom_wind_fact.value <= +f_transom_wind_permiss.value) {
		f_transom_wind_fact.style.color = "green";
	} else {
		f_mullf_transom_wind_faction_fact.style.color = "red";
	}
}

// Вычислить фактический прогиб ригеля от действия нагрузки от веса заполнения, fфакт (риг)
function calculate_f_transom_filling_fact() {
	if (F_filling.value && a.value && (B1.value || B2.value) && (h1.value || h2.value) && E.value && Iy_transom.value) {
		f_transom_filling_fact.value = Math.round(
			F_filling.value / 2 * a.value *
			(3 * Math.pow(Math.max(B1.value, B2.value) * Math.pow(10, 2), 2) - 4 * Math.pow(a.value, 2)) /
			(24 * E.value * Iy_transom.value) * 10 * 10) / 10;
	} else {
		f_transom_filling_fact.value = "";
	}

	if (+f_transom_filling_fact.value <= +f_transom_vertical_load_permiss.value) {
		f_transom_filling_fact.style.color = "green";
	} else {
		f_transom_filling_fact.style.color = "red";
	}
}

// Вычислить фактический прогиб ригеля от действия нагрузки от собственного веса, fфакт (риг)
function calculate_f_transom_self_fact() {
	if (F_transom.value && (B1.value || B2.value) && (h1.value || h2.value) && E.value && Iy_transom.value) {
		f_transom_self_fact.value = Math.round(
			5 / 384 *
			(F_transom.value / Math.max(B1.value, B2.value) / Math.pow(10, 2) *
				Math.pow(Math.max(B1.value, B2.value) * Math.pow(10, 2), 4)) /
			(E.value * Iy_transom.value) * 10 * 10) / 10;
	} else {
		f_transom_self_fact.value = "";
	}

	if (+f_transom_self_fact.value <= +f_transom_vertical_load_permiss.value) {
		f_transom_self_fact.style.color = "green";
	} else {
		f_transom_self_fact.style.color = "red";
	}
}

// Вычислить фактический суммарный прогиб ригеля от действия нагрузки от собственного веса и веса заполнения, fфакт (риг)
function calculate_f_transom_vertical_load_fact() {
	if (f_transom_filling_fact.value && f_transom_self_fact.value) {
		f_transom_vertical_load_fact.value = Math.round( (+f_transom_filling_fact.value + +f_transom_self_fact.value) * 10 ) / 10;
	} else {
		f_transom_vertical_load_fact.value = "";
	}

	if (+f_transom_vertical_load_fact.value <= +f_transom_vertical_load_permiss.value) {
		f_transom_vertical_load_fact.style.color = "green";
	} else {
		f_transom_vertical_load_fact.style.color = "red";
	}
}


/**/


H.onchange = () => {
	calculate_f_mullion_permiss();
	calculate_Ix_mullion_min();
	calculate_f_mullion_fact();
}

B1.onchange = () => {
	calculate_Q_mullion();
	calculate_Q_transom();
	calculate_f_transom_wind_permiss();
	calculate_F_filling();
	calculate_Ix_mullion_min();
	calculate_Ix_transom_min();
	calculate_Iy_transom_min();
	calculate_f_mullion_fact();
	calculate_f_transom_wind_fact();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

B2.onchange = () => {
	calculate_Q_mullion();
	calculate_Q_transom();
	calculate_f_transom_wind_permiss();
	calculate_F_filling();
	calculate_Ix_mullion_min();
	calculate_Ix_transom_min();
	calculate_Iy_transom_min();
	calculate_f_mullion_fact();
	calculate_f_transom_wind_fact();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

h1.onchange = () => {
	calculate_Q_transom();
	calculate_F_filling();
	calculate_Ix_transom_min();
	calculate_Iy_transom_min();
	calculate_f_transom_wind_fact();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

h2.onchange = () => {
	calculate_Q_transom();
	calculate_F_filling();
	calculate_Ix_transom_min();
	calculate_Iy_transom_min();
	calculate_f_transom_wind_fact();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

Wm.onchange = () => {
	calculate_Q_mullion();
	calculate_Q_transom();
	calculate_Ix_mullion_min();
	calculate_Ix_transom_min();
	calculate_f_mullion_fact();
	calculate_f_transom_wind_fact();
}

material_const.onchange = () => {
	get_E_const();
	get_γ_const();
	calculate_Ix_mullion_min();
	calculate_Ix_transom_min();
	calculate_Iy_transom_min();
	calculate_F_transom();
	calculate_f_mullion_fact();
	calculate_f_transom_wind_fact();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

material_filling.onchange = () => {
	get_γ_filling();
	calculate_F_filling();
	calculate_Iy_transom_min();
	calculate_f_transom_filling_fact();
	calculate_f_transom_vertical_load_fact();
}

t.onchange = () => {
	calculate_F_filling();
	calculate_Iy_transom_min();
	calculate_f_transom_vertical_load_fact();
}

a.onchange = () => {
	calculate_Iy_transom_min();
	calculate_f_transom_filling_fact();
	calculate_f_transom_vertical_load_fact();
}

A_transom.onchange = () => {
	calculate_F_transom();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

Ix_mullion.onchange = () => {
	calculate_f_mullion_fact();
}

Ix_transom.onchange = () => {
	calculate_f_transom_wind_fact();
}

Iy_transom.onchange = () => {
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}

calculate.onclick = () => {
	calculate_f_mullion_fact();
	calculate_f_transom_wind_fact();
	calculate_f_transom_filling_fact();
	calculate_f_transom_self_fact();
	calculate_f_transom_vertical_load_fact();
}
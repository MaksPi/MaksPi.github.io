// список городов
let citiesWindLoad = {
	'Киев':37,
	'Севастополь':46,
	//АР Крым
	'Симферополь':46,
	'Алушта':45,
	'Джанкой':48,
	'Евпатория':49,
	'Керчь':54,
	'Красноперекопск':51,
	'Саки':48,
	'Армянск':51,
	'Феодосия':50,
	'Судак':47,
	'Ялта':47,
	//Винницкая область
	'Винница':47,
	'Жмеринка':48,
	'Могилев-Подольский':47,
	'Хмельник':45,
	//Волынская область
	'Луцк':48,
	'Владимир-Волынский':50,
	'Ковель':46,
	'Нововолынск':50,
	//Днепропетровская область
	'Днепропетровск':47,
	'Вольногорск':44,
	'Днепродзержинск':47,
	'Желтые Воды':44,
	'Кривой Рог':44,
	'Марганец':46,
	'Никополь':46,
	'Новомосковск':47,
	'Орджоникидзе':46,
	'Павлоград':48,
	'Первомайск':50,
	'Синельниково':48,
	'Терновка':49,
	//Донецкая область
	'Донецк':50,
	'Авдеевка':49,
	'Артемовск':48,
	'Горловка':50,
	'Дебальцево':50,
	'Дзержинск':50,
	'Димитров':48,
	'Доброполье':48,
	'Докучаевск':50,
	'Енакиево':50,
	'Ждановка':50,
	'Мариуполь':60,
	'Кировское':50,
	'Константиновка':48,
	'Краматорск':47,
	'Красноармейск':48,
	'Красный Лиман':46,
	'Макеевка':50,
	'Селидово':49,
	'Славянск':46,
	'Снежное':49,
	'Торез':49,
	'Угледар':50,
	'Харцизск':50,
	'Шахтерск':50,
	'Ясиноватая':50,
	//Житомирская область
	'Житомир':46,
	'Бердичев':46,
	'Коростень':48,
	'Новоград-Волынский':47,
	//Закарпатская область
	'Ужгород':37,
	'Мукачево':37,
	//Запорожская область
	'Запорожье':46,
	'Бердянск':52,
	'Мелитополь':52,
	'Токмак':49,
	//Ивано-Франковская область
	'Ивано-Франковск':50,
	'Болехов':55,
	'Калуш':53,
	'Коломыя':49,
	'Яремча':47,
	//Киевская область
	'Белая Церковь':39,
	'Березань':39,
	'Борисполь':38,
	'Бровары':38,
	'Васильков':38,
	'Ирпень':39,
	'Переяславль-Хмельницкий':39,
	'Припять':45,
	'Фастов':38,
	'Ржищев':39,
	'Славутич':43,
	//Кировоградская область
	'Кировоград':41,
	'Александрия':43,
	'Знаменка':42,
	'Светловодск':43,
	//Луганская область
	'Луганск':46,
	'Антрацит':49,
	'Брянка':48,
	'Кировск':48,
	'Алчевск':48,
	'Краснодон':47,
	'Красный Луч':49,
	'Лисичанск':46,
	'Первомайск':48,
	'Ровеньки':48,
	'Рубежное':45,
	'Свердловск':48,
	'Северодонецк':46,
	'Стаханов':48,
	//Львовская область
	'Львов':52,
	'Борислав':54,
	'Дрогобич':56,
	'Самбор':53,
	'Стрый':55,
	'Трускавец':55,
	'Червоноград':51,
	//Николаевская область
	'Николаев':47,
	'Вознесенск':45,
	'Очаков':49,
	'Первомайск':41,
	'Южноукраинск':43,
	//Одесская область
	'Одесса':46,
	'Белгород-Днестровский':47,
	'Измаил':50,
	'Ильичевск':48,
	'Котовск':45,
	'Южный':49,
	//Полтавская область
	'Полтава':47,
	'Комсомольск':43,
	'Кременчуг':43,
	'Лубны':41,
	'Миргород':42,
	//Ровенская область
	'Ровно':52,
	'Дубно':53,
	'Кузнецовск':46,
	'Острог':52,
	//Сумская область
	'Сумы':42,
	'Ахтырка':45,
	'Глухов':39,
	'Конотоп':36,
	'Лебедин':43,
	'Ромны':38,
	'Шостка':39,
	//Тернопольская область
	'Тернополь':52,
	//Харьковская область
	'Харьков':43,
	'Изюм':43,
	'Купянск':45,
	'Лозовая':48,
	'Люботин':45,
	'Первомайский':45,
	'Чугуев':43,
	//Херсонская область
	'Херсон':48,
	'Каховка':46,
	'Новая Каховка':45,
	//Хмельницкая область
	'Хмельницкий':50,
	'Каменец-Подольский':46,
	'Нетишин':52,
	'Славута':51,
	'Шепетовка':50,
	//Черкасская область
	'Черкассы':42,
	'Ватутино':41,
	'Канев':41,
	'Золотоноша':41,
	'Смела':42,
	'Умань':44,
	//Черновицкая область
	'Черновцы':50,
	//Черниговская область
	'Чернигов':41,
	'Нежин':37,
	'Прилуки':37
};

/*****************************************************************************/

// значения коэффициента "γfm" в зависимости от среднего периода повторяемости
let medialRepeatabilityPeriod = {
	'5 лет':0.55,
	'10 лет':0.69,
	'15 лет':0.77,
	'25 лет':0.87,
	'40 лет':0.96,
	'50 лет':1,
	'70 лет':1.07,
	'100 лет':1.14,
	'150 лет':1.22,
	'200 лет':1.28,
	'300 лет':1.35,
	'500 лет':1.45
};

/*****************************************************************************/

// значения высоты сооружения
let constructionHight = ['≤ 5 м', '10 м', '20 м', '40 м', '60 м', '80 м', '100 м', '150 м', '200 м'];

// значения "Ch"
let Ch_Value_Table1_Type1 = ['0.90', '1.20', '1.35', '1.60', '1.75', '1.90', '1.95', '2.15', '2.30'];
let Ch_Value_Table1_Type2 = ['0.70', '0.90', '1.15', '1.45', '1.65', '1.75', '1.85', '2.10', '2.20'];
let Ch_Value_Table1_Type3 = ['0.40', '0.60', '0.85', '1.15', '1.35', '1.50', '1.60', '1.85', '2.05'];
let Ch_Value_Table1_Type4 = ['0.20', '0.40', '0.65', '1.00', '1.10', '1.20', '1.25', '1.35', '1.45'];

let Ch_Value_Table2_Type1 = ['1.40', '1.80', '1.95', '2.25', '2.45', '2.65', '2.70', '2.95', '3.10'];
let Ch_Value_Table2_Type2 = ['1.20', '1.50', '1.85', '2.20', '2.45', '2.60', '2.70', '3.00', '3.15'];
let Ch_Value_Table2_Type3 = ['0.90', '1.20', '1.55', '2.00', '2.25', '2.45', '2.60', '2.90', '3.20'];
let Ch_Value_Table2_Type4 = ['0.60', '1.00', '1.40', '1.95', '2.25', '2.50', '2.70', '3.10', '3.40'];

/*****************************************************************************/

// количество коэффициентов "γfm"
/* let counter_γfm = 0;
for (let key in medialRepeatabilityPeriod) {
	counter_γfm++;
};
console.log('Количество коэффициентов "γfm": ' + counter_γfm); */
console.log('Количество коэффициентов "γfm": ' + Object.keys(medialRepeatabilityPeriod).length);

// переменная для создания тега "options"
let options_γfm = '';

for (let key in medialRepeatabilityPeriod) {
	options_γfm += '<option>' + key + '</option>';
};

// вставка списка "options" в "datalist"
document.getElementById('medialRepeatabilityPeriodList').innerHTML = options_γfm;

/*****************************************************************************/

// количество городов
/* let counterCity = 0;
for (let key in citiesWindLoad) {
	counterCity++;
};
console.log("Количество городов: " + counterCity); */
console.log("Количество городов: " + Object.keys(citiesWindLoad).length);

// переменная для создания тега "options"
let optionsCities = '';

for (let key in citiesWindLoad) {
	optionsCities += '<option>' + key + '</option>';
};

// вставка списка "options" в "datalist"
document.getElementById('citiesList').innerHTML = optionsCities;

/*****************************************************************************/

// переменная для создания тега "options"
let options_constructionHight = '<option disabled selected>Укажите Z, м:</option>';

for (let i = 0; i < constructionHight.length; i++) {
	options_constructionHight += '<option>' + constructionHight[i] + '</option>';
};

// вставка списка "options" в "select"
document.getElementById('constructionHight').innerHTML = options_constructionHight;

/*****************************************************************************/

// получить значение коэффициента высоты в зависимости от выбранных из списков значений
function WmGetSelectCh() {
	// получить значение коэффициента "γfm"
	let γfm = document.getElementById('γfm').value;
	
	// получить значение "Wo"
	let Wo = document.getElementById('Wo').value;
	
	// получить значения ПОДкоэффициентов "C"
	let Caer = document.getElementById('Caer').value;
	let Ch = document.getElementById('Ch'); // значение без .value (!)
	let Calt = document.getElementById('Calt').value;
	let Crel = document.getElementById('Crel').value;
	let Cdir = document.getElementById('Cdir').value;
	let Cd = document.getElementById('Cd').value;
	
	// значения, от которых зависит значение "Ch"
	let selected_OFP = document.getElementById('ownFluctuationPeriod').value;
	let selected_terrainType = document.getElementById('terrainType').value;
	let selected_constructionHight = document.getElementById('constructionHight').value;
	
	let selected_Ch_Value_Type;
	let foundNumber;
	
	if ( (selected_OFP == '< 0.25 сек.') & (selected_terrainType == 'ТипI') ) {
		selected_Ch_Value_Type = Ch_Value_Table1_Type1;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '< 0.25 сек.') & (selected_terrainType == 'ТипII') ) {
		selected_Ch_Value_Type = Ch_Value_Table1_Type2;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '< 0.25 сек.') & (selected_terrainType == 'ТипIII') ) {
		selected_Ch_Value_Type = Ch_Value_Table1_Type3;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '< 0.25 сек.') & (selected_terrainType == 'ТипIV') ) {
		selected_Ch_Value_Type = Ch_Value_Table1_Type4;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '> 0.25 сек.') & (selected_terrainType == 'ТипI') ) {
		selected_Ch_Value_Type = Ch_Value_Table2_Type1;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '> 0.25 сек.') & (selected_terrainType == 'ТипII') ) {
		selected_Ch_Value_Type = Ch_Value_Table2_Type2;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '> 0.25 сек.') & (selected_terrainType == 'ТипIII') ) {
		selected_Ch_Value_Type = Ch_Value_Table2_Type3;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];

	} else if ( (selected_OFP == '> 0.25 сек.') & (selected_terrainType == 'ТипIV') ) {
		selected_Ch_Value_Type = Ch_Value_Table2_Type4;
		//console.log(selected_Ch_Value_Type);
		
		// найти номер в массиве выбранного значения из списка "Z, м"
		foundNumber = constructionHight.indexOf(selected_constructionHight);
		//console.log(foundNumber);

		// получить значение коэффициента "Ch" в зависимости от выбранного из списка "Z, м"
		Ch = Ch.value = selected_Ch_Value_Type[foundNumber];
	};
	
	if (!Ch) Ch = document.getElementById('Ch').value = '';
	
	// получить местоположение коэффициента "C"
	let C = document.getElementById('C');
	
	// изменить цвет текста коэффициента "C"
	//C.style.color = 'red';

	// вычислить значение коэффициента "C"
	C.innerHTML = Math.round(Caer * Ch * Calt * Crel * Cdir * Cd * 100) / 100;
	
	if (foundNumber == undefined) C.innerHTML = 0;
	
	// получить местоположение "Wm"
	let Wm = document.getElementById('Wm');

	// изменить цвет текста "Wm"
	//Wm.style.color = 'red';

	// вычислить значение "Wm"
	Wm.innerHTML = Math.round(γfm * Wo * C.innerHTML * 100) / 100;
}

/*****************************************************************************/

// расчет "Wm" в зависимости от выбранных значений из списка "T, лет"
function WmGetSelect_γfm() {
	// получить значение коэффициента "γfm" в зависимости от выбранного из списка "T, лет"
	let selected_γfm = document.getElementById('medialRepeatabilityPeriod').value;
	//console.log(medialRepeatabilityPeriod[selected_γfm]);
	let γfm = document.getElementById('γfm').value = medialRepeatabilityPeriod[selected_γfm];
	if (!γfm) document.getElementById('γfm').value = '';
	
	// получить значение "Wo"
	let Wo = document.getElementById('Wo').value;
	
	// получить значения ПОДкоэффициентов "C"
	let Caer = document.getElementById('Caer').value;
	let Ch = document.getElementById('Ch').value;
	let Calt = document.getElementById('Calt').value;
	let Crel = document.getElementById('Crel').value;
	let Cdir = document.getElementById('Cdir').value;
	let Cd = document.getElementById('Cd').value;
	
	// получить местоположение коэффициента "C"
	let C = document.getElementById('C');

	// изменить цвет текста коэффициента "C"
	//C.style.color = 'red';

	// вычислить значение коэффициента "C"
	C.innerHTML = Math.round(Caer * Ch * Calt * Crel * Cdir * Cd * 100) / 100;
	
	// получить местоположение "Wm"
	let Wm = document.getElementById('Wm');

	// изменить цвет текста "Wm"
	//Wm.style.color = 'red';

	// вычислить значение "Wm"
	Wm.innerHTML = Math.round(γfm * Wo * C.innerHTML * 100) / 100;
	if (!γfm) Wm.innerHTML = 0;
}

/*****************************************************************************/

// расчет "Wm" в зависимости от выбранных значений из списка городов
function WmGetSelectCity() {
	// получить значение коэффициента "γfm"
	let γfm = document.getElementById('γfm').value;
	
	// получить значение "Wo" в зависимости от выбранного из списка города
	let selectedCity = document.getElementById('cities').value;
	// console.log(citiesWindLoad[selectedCity]);

	// получить значение "Wo"
	let Wo = document.getElementById('Wo').value = citiesWindLoad[selectedCity];
	if (!Wo) document.getElementById('Wo').value = '';
	
	// получить значения ПОДкоэффициентов "C"
	let Caer = document.getElementById('Caer').value;
	let Ch = document.getElementById('Ch').value;
	let Calt = document.getElementById('Calt').value;
	let Crel = document.getElementById('Crel').value;
	let Cdir = document.getElementById('Cdir').value;
	let Cd = document.getElementById('Cd').value;
	
	// получить местоположение коэффициента "C"
	let C = document.getElementById('C');

	// изменить цвет текста коэффициента "C"
	//C.style.color = 'red';

	// вычислить значение коэффициента "C"
	C.innerHTML = Math.round(Caer * Ch * Calt * Crel * Cdir * Cd* 100) / 100;
	
	// получить местоположение "Wm"
	let Wm = document.getElementById('Wm');

	// изменить цвет текста "Wm"
	//Wm.style.color = 'red';

	// вычислить значение "Wm"
	Wm.innerHTML = Math.round(γfm * Wo * C.innerHTML * 100) / 100;
	if (!Wo) Wm.innerHTML = 0;
};

/*****************************************************************************/

// расчет "Wm" по введённым значениям вручную
function Wm() {
	// получить значение коэффициента "γfm"
	let γfm = document.getElementById('γfm').value;
	
	// получить значение "Wo"
	let Wo = document.getElementById('Wo').value;
	
	// получить значения ПОДкоэффициентов "C"
	let Caer = document.getElementById('Caer').value;
	let Ch = document.getElementById('Ch').value;
	let Calt = document.getElementById('Calt').value;
	let Crel = document.getElementById('Crel').value;
	let Cdir = document.getElementById('Cdir').value;
	let Cd = document.getElementById('Cd').value;
	
	// получить местоположение коэффициента "C"
	let C = document.getElementById('C');

	// изменить цвет текста коэффициента "C"
	//C.style.color = 'red';

	// вычислить значение коэффициента "C"
	C.innerHTML = Math.round(Caer * Ch * Calt * Crel * Cdir * Cd* 100) / 100;
	
	// получить местоположение "Wm"
	let Wm = document.getElementById('Wm');

	// изменить цвет текста "Wm"
	// Wm.style.color = 'red';

	// вычислить значение "Wm"
	Wm.innerHTML = Math.round(γfm * Wo * C.innerHTML * 100) / 100;
};

Wm();
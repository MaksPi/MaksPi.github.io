// изменение состояния и значка мобильного меню
// document.querySelector('.mob-menu').addEventListener('click', function() {
// 	this.classList.toggle('change');
// });

document.addEventListener('click', function(event) {
	if (event.target.closest('.mob-menu')) {
		document.querySelector('.header').classList.toggle('change');
	}
});



// получить полный возраст (кол-во лет) в зависимости от дня рождения
function getFullYears(year, month, date) {
	let birthDate = new Date(year, month, date);

	let now = new Date();

	let fullYears = (now.getFullYear() - birthDate.getFullYear());

	if (now.setFullYear(year) < birthDate.setFullYear(year)) {
		return fullYears - 1;
	} else {
		return fullYears;
	}
}

// вставить полный возраст (кол-во лет)
(function insertFullYears(elem) {
	let textContent = document.querySelector(elem).textContent;
	document.querySelector(elem).textContent = `${getFullYears(1984, 6-1, 8)} ${textContent}`;
})('.years');



// продолжительность (годы, месяцы) работы в каждой из компаний
(function getWorkDuration() {
	let dateStartElems = document.querySelectorAll(".date.start");
	let dateEndElems = document.querySelectorAll(".date.end");
	let durationElems = document.querySelectorAll(".duration");

	for (let item = 0; item < dateStartElems.length; item++) {
		let dateStart = dateStartElems[item].textContent.split('.');
		let monthStart = dateStart[0];
		let yearStart = dateStart[1];

		let dateEnd = dateEndElems[item].textContent.split('.');
		let monthEnd = dateEnd[0];
		let yearEnd = dateEnd[1];

		if (monthEnd === "present" || monthEnd === "текущее время") {
			yearEnd = new Date().getFullYear();
			monthEnd = new Date().getMonth();
		}

		let durationYear = yearEnd - yearStart;
		let durationMonth = monthEnd - monthStart;

		if (durationMonth < 0) {
			durationYear = durationYear - 1;
			durationMonth = 12 - (-durationMonth);
		}

		if (durationYear === 0) {
			durationElems[item].textContent = `${durationMonth} ${lang_obj["monthMeasurements"][durationMonth][hash]}`;
		}	else if (durationMonth === 0) {
			durationElems[item].textContent = `${durationYear} ${lang_obj["yearMeasurements"][durationYear][hash]}`;
		} else {
			durationElems[item].textContent = `${durationYear} ${lang_obj["yearMeasurements"][durationYear][hash]}, ${durationMonth} ${lang_obj["monthMeasurements"][durationMonth][hash]}`;
		}
	}
})();
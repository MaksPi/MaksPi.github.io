const lang_switcher = document.getElementById('lang-switcher');
const all_lang = ['en', 'ru'];
let hash = window.location.hash;
hash = hash.substr(1);

lang_switcher.addEventListener("change", change_url_language);

function change_url_language () {
	let lang = lang_switcher.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function change_language () {
	// let hash = window.location.hash;
	// hash = hash.substr(1);

	// проверить, правильно ли введен хеш языка в адресной строке
	if (!all_lang.includes(hash)) {
		location.href = window.location.pathname + '#' + all_lang[0];
		location.reload();
	}

	lang_switcher.value = hash;

	for (let key in lang_obj) {
		// let elem = document.querySelector('.lng.' + key);
		let elems = document.querySelectorAll('.lng.' + key);
		for (let elem of elems) {
			if (elem) {
				elem.textContent = lang_obj[key][hash];

				// для определенных классов сделать первую букву заглавной
				if (elem.classList.contains("born")
					|| elem.classList.contains("city-kiev")
					|| elem.classList.contains("country-ukraine")
					|| elem.classList.contains("skills")
					|| elem.classList.contains("add-skills")
					|| elem.classList.contains("programs")
					|| elem.classList.contains("education")
					|| elem.classList.contains("first-name")
					|| elem.classList.contains("last-name")
					|| elem.classList.contains("experience")) {
					let first_symbol = lang_obj[key][hash][0];
					let all_string = lang_obj[key][hash];
					elem.textContent = first_symbol.toUpperCase() + all_string.substr(1);
				}
			}
		}
	}
}
change_language();
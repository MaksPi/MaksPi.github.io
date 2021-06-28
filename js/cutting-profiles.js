let profile_length = document.getElementById('profile-length');

let details_input = [
	1000,
	2000,
	3000,
	4000,
	5000
]
console.log(details_input);

function find_max_length() {
	let max_length = 0;
	for (let i = 0; i < details_input.length; i++) {
		if (max_length < details_input[i]) {
			max_length = details_input[i];
		}
	}
	console.log(`Максимальная длина детали: ${max_length}`);
}
find_max_length();

function sum_details() {
	let sum = 0;
	for (let i = 0; i < details_input.length; i++) {
		sum += details_input[i];
		console.log(`Сумма ${i}: ${sum}`);
	}
	console.log(`Сумма длин деталей: ${sum}`);
}

sum_details();
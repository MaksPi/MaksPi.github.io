elem = document.querySelectorAll('.line-numbers-rows');
console.log(elem);
console.log(elem.length);

// create rowsNumbers
function rowsNumbers(rowsQuantity) {

	for (let i = 1; i <= rowsQuantity; i++) {
		// create span
		let span = document.createElement('span');
		// fill span with numbers of rows
		span.innerHTML = i;
		// create br
		let br = document.createElement('br');
		// append span
		document.querySelectorAll('.line-numbers-rows')[elem.length - 1].append(span);
		// append br
		document.querySelectorAll('.line-numbers-rows')[elem.length - 1].append(br);
	}

}
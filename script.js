let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	let title = document.getElementById('title').value;
	let author = document.getElementById('author').value;
	let pages = document.getElementById('pages').value;
	let read = document.getElementById('read').value;

	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
	document.forms[0].reset();
	console.log(myLibrary);
	document.getElementById('form').style.display = 'none';
	clearShelf();
	updateLibrary();
}

function updateLibrary() {
	myLibrary.forEach((Book) => {
		let card = document.createElement('div');
		card.setAttribute('id', 'cardDiv');

		let h2 = document.createElement('h2');
		let cardTitle = document.createTextNode(
			'Title:' + ' ' + Book.title
		);
		h2.appendChild(cardTitle);
		card.appendChild(h2);

		let h3 = document.createElement('h3');
		let cardAuthor = document.createTextNode(
			'Author:' + ' ' + Book.author
		);
		h3.appendChild(cardAuthor);
		card.appendChild(h3);

		let p = document.createElement('p');
		let cardPages = document.createTextNode(
			'Page count:' + ' ' + Book.pages
		);
		p.appendChild(cardPages);
		card.appendChild(p);

		let p1 = document.createElement('p');
		let cardRead = document.createTextNode(
			'Has been Read?' + ' ' + Book.read
		);
		p1.appendChild(cardRead);
		card.appendChild(p1);

		let button = document.createElement('button');
		button.innerHTML = 'Remove Book';
		button.value = myLibrary.indexOf(Book);
		button.id = 'removeBtn';
		button.className = 'button';
		button.setAttribute('onclick', 'removeBook(this.value);');
		card.appendChild(button);

		let container = document.querySelector('#container');
		container.appendChild(card);
		// removeBookButton();
	});
}

// function removeBookButton() {
// 	const el = document.getElementById('removeBtn');
// 	el.addEventListener('click', removeBook(el.value));
// 	console.log('created event listener?');
// }

function removeBook(index) {
	myLibrary.splice(index, 1);
	clearShelf();
	updateLibrary();
	console.log('remove book function', index);
}

function showForm() {
	document.getElementById('form').style.display = 'block';
}

function clearShelf() {
	// let element = document.getElementById('cardDiv');
	// if (element != undefined) {
	// 	element.remove();
	// }
	document.querySelectorAll('#cardDiv').forEach((e) => e.remove());
}

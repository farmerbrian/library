let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	// this.sayTitle = function () {
	// 	console.log(title);
	// };
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
}

function showForm() {
	document.getElementById('form').style.display = 'block';
}

let myLibrary = [];

function book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.sayTitle = function () {
		console.log(title);
	};
}

function addBookToLibrary() {
	// do stuff here
}

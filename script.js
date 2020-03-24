let myLibrary = [];

let library = document.getElementById('library');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //do stuff here
}

function render() {
  for (i = 0; i < myLibrary.length; i++) {
    var book = document.createTextNode(`${myLibrary[i]}<br/>`);
    library.appendChild(book);
    //print it to html
  }
}
var form = document.getElementById('popupForm');
var newBook = document.getElementById('addBook');
var submit = document.getElementById('submit');

newBook.onclick = function() {
  form.style.display = 'block';
};

submit.onclick = function() {
  form.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == form) {
    this.form.style.display = 'none';
  }
};

let myLibrary = [];

let library = document.getElementById('library');

var form = document.getElementById('popupForm');
var newBook = document.getElementById('addBook');
var span = document.getElementsByClassName('form');

var idNumber = 0;

const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'No');
const booktwo = new Book('Meditations', 'Marcus Aurelius', '200', 'Yes');
const bookthree = new Book(
  'Thinking Fast and Slow',
  'Daniel Kahneman',
  '400',
  'No'
);

addBookToLibrary(bookOne);
addBookToLibrary(booktwo);
addBookToLibrary(bookthree);

newBook.onclick = function() {
  document.getElementById('title').value = null;
  document.getElementById('author').value = null;
  document.getElementById('pages').value = null;
  document.getElementById('readStatus').checked = null;
  console.log('Form opened');
  form.style.display = 'block';
};

span.onclick = function() {
  form.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == form) {
    this.form.style.display = 'none';
  }
};

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createNewBook() {
  form.style.display = 'none';
  console.log('Form closed');
  console.log('Adding Book ...');
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var read = document.getElementById('readStatus').checked;
  if (read == true) {
    read = 'Yes';
  } else {
    read = 'No';
  }
  if (title == '' || author == '' || pages == 0) {
    console.log('Error');
    return;
  }
  //create new book
  let book = new Book();
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.read = read;
  //add book to temp array
  addBookToLibrary(book);
  //tempLibrary.push(book);
}

function addBookToLibrary(book) {
  myLibrary.push(book); //pushing new book to library
  render(myLibrary);
}

function render(library = myLibrary) {
  if (library == '') {
    alert('ERROR\nPlease add a book before\nrendering.');
  }
  console.log('Rendering...');
  let table = document.querySelector('tbody');
  while (table.rows.length >= 1) {
    table.deleteRow(0);
  }
  makeTable(table, library);
}

function makeTable(table, library) {
  for (let book of library) {
    let row = table.insertRow();
    row.setAttribute('id', `row${idNumber}`);
    for (key in book) {
      let cell = row.insertCell();
      if (key == 'read') {
        cell.setAttribute('id', `read${idNumber}`);
        cell.setAttribute('onclick', 'status(this.id)');
      }
      let text = document.createTextNode(book[key]);
      cell.appendChild(text);
    }
    let deleteFeature = row.insertCell(4);
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete Book';
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('id', `${idNumber}`);
    deleteButton.setAttribute('onclick', 'deleteBook(this.id)');
    deleteFeature.appendChild(deleteButton);
    idNumber++;
  }
}

function deleteBook(id) {
  myLibrary.splice(id, 1);
  render(myLibrary);
}

function status(check) {
  var bookStatus = document.getElementById(check);
  if (bookStatus.innerHTML == 'No') {
    bookStatus.innerHTML = 'Yes';
  } else {
    bookStatus.innerHTML = 'No';
  }
}

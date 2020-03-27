let myLibrary = [];

let library = document.getElementById('library');

var form = document.getElementById('popupForm');
var newBook = document.getElementById('addBook');
var span = document.getElementsByClassName('form');

newBook.onclick = function() {
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
  this.info = function() {
    return [title, author, pages, read];
  };
}

function addBookToLibrary() {
  //do stuff here
  form.style.display = 'none';
  console.log('Form closed');
  console.log('Adding Book ...');
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var read = document.getElementById('readStatus').checked;
  if (read == true) {
    read = 'Read';
  } else {
    read = 'Not Read';
  }
  if (title == '' || author == '' || pages == 0) {
    console.log('Error');
    return;
  }

  let book = new Book();
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.read = read;
  myLibrary.push(book);
}

function render() {
  console.log('Rendering...');
  for (i = 0; i < myLibrary.length; i++) {
    var book = document.createTextNode(`${myLibrary[i]} \n`);
    library.appendChild(book);
    //print it to html
  }
  console.log(myLibrary);
}

function catalog() {}

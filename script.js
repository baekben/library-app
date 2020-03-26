let myLibrary = [];

let library = document.getElementById('library');

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
  console.log('Adding Book');
  title = document.getElementById('title').value;
  console.log(title);
  author = document.getElementById('author').value;
  pages = document.getElementById('pages').value;
  read = document.getElementById('readStatus').checked;
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
}
var form = document.getElementById('popupForm');
var newBook = document.getElementById('addBook');
var submit = document.getElementById('submit');
var span = document.getElementsByClassName('form')[0];

newBook.onclick = function() {
  form.style.display = 'block';
};

span.onclick = function() {
  form.style.display = 'none';
};

submit.onclick = function() {
  form.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == form) {
    this.form.style.display = 'none';
  }
};

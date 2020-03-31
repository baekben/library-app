let myLibrary = [];

let library = document.getElementById('library');

var form = document.getElementById('popupForm');
var newBook = document.getElementById('addBook');
var span = document.getElementsByClassName('form');

var idNumber = 0;

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
  // this.info = function() {
  //   return [title, author, pages, read];
  // };
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
  if (myLibrary == '') {
    alert('ERROR\nPlease add a book before\nrendering.');
  }
  console.log(myLibrary);
  console.log('Rendering...');
  let table = document.querySelector('table');
  let library = Object.keys(myLibrary[0]);
  makeTable(table, myLibrary);
  // generateTableHead(table, library);
  console.log(myLibrary);
}

// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement('th');
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

function makeTable(table, library) {
  for (let book of library) {
    let row = table.insertRow();
    row.setAttribute('id', idNumber++);
    for (key in book) {
      let cell = row.insertCell();
      let text = document.createTextNode(book[key]);
      cell.appendChild(text);
    }
  }
}

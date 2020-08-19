const myLibrary = [];
const addBook = document.getElementById('add-book-btn');

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const newTitle = document.getElementById('title').value;
  const newAuthor = document.getElementById('author').value;
  const newPages = document.getElementById('pages').value;
  const newReadStatus = document.getElementById('readStatus').value;

  const newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
  myLibrary.push(newBook);
}

addBook.addEventListener('click', addBookToLibrary);

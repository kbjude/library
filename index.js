const myLibrary = [];
const addBook = document.getElementById('add-book-btn');
const showFormBtn = document.getElementById('show-form-btn');

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function render(books) {
  const lastBookIndex = myLibrary.length - 1;
  for (let book = lastBookIndex; book < books.length; book += 1) {
    const
      {
        title, author, pages, readStatus 
      } = books[book];
    // Create elements

    const container = document.getElementById('bookcontainer');
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookReadStatus = document.createElement('h4');
    const readStatusText = document.createElement('h4');
    const deleteBookBtn = document.createElement('button');

    card.setAttribute('data-index', `${book}`);
    // Class additions

    card.classList.add('card', 'column', 'is-4');
    cardContent.classList.add('card-content');
    bookAuthor.classList.add('title', 'is-5', 'has-text-centered');
    bookTitle.classList.add('title', 'is-3', 'box');
    bookPages.classList.add('title', 'is-6', 'has-text-centered');
    bookReadStatus.classList.add('title', 'is-6', 'has-text-centered');
    readStatusText.classList.add('title', 'is-6', 'has-text-centered');
    deleteBookBtn.classList.add('button', 'is-danger');

    // Inner HTML declarations

    bookTitle.innerHTML = title;
    bookAuthor.innerHTML = author;
    bookPages.innerHTML = `${pages} pages`;
    bookReadStatus.innerHTML = readStatus;
    readStatusText.innerHTML = 'Already read?';
    deleteBookBtn.innerHTML = 'Delete Book';

    // Appends

    container.append(card);
    card.append(cardContent);
    cardContent.append(bookTitle, bookAuthor, bookPages, readStatusText, bookReadStatus, deleteBookBtn);
  }
}

function getIndex(newBook) {
  console.log(myLibrary.indexOf(newBook));
}


function addBookToLibrary() {
  const newTitle = document.getElementById('title').value;
  const newAuthor = document.getElementById('author').value;
  const newPages = document.getElementById('pages').value;
  const newReadStatus = document.getElementById('readStatus').value;

  const newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
  myLibrary.push(newBook);
  document.getElementById('addbook').reset();
  getIndex(newBook);
  render(myLibrary);
}

function showForm() {
  const form = document.getElementById('addbook');
  form.classList.toggle('is-hidden');
}

addBook.addEventListener('click', addBookToLibrary);
showFormBtn.addEventListener('click', showForm);

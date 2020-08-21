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
        title, author, pages, readStatus,
      } = books[book];

    // Create elements

    const container = document.getElementById('bookcontainer');
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('h4');
    const bookReadStatus = document.createElement('h4');
    const readSwitchLabel = document.createElement('label');
    const readSwitchInput = document.createElement('input');
    const readSwitchSpan = document.createElement('span');
    const deleteBookBtn = document.createElement('button');

    card.setAttribute('data-index', `${book}`);
    readSwitchInput.type = 'checkbox';

    deleteBookBtn.addEventListener('click', (e) => {
      const bookIndex = card.getAttribute('data-index');
      const cardToDelete = e.currentTarget.parentNode.parentNode;
      cardToDelete.remove();
      myLibrary.splice(bookIndex, 1);
    });

    // Class additions

    card.classList.add('card', 'column', 'is-4');
    cardContent.classList.add('card-content', 'has-text-centered');
    bookAuthor.classList.add('title', 'is-5');
    bookTitle.classList.add('title', 'is-3', 'box');
    bookPages.classList.add('title', 'is-6');
    bookReadStatus.classList.add('title', 'is-6');
    readSwitchSpan.classList.add('slider', 'round');
    readSwitchLabel.classList.add('switch', 'm-auto');
    deleteBookBtn.classList.add('button', 'is-danger', 'mt-20');

    // Inner HTML declarations

    bookTitle.innerHTML = title;
    bookAuthor.innerHTML = author;
    bookPages.innerHTML = `${pages} pages`;
    bookReadStatus.innerHTML = 'Have you read it yet?';
    deleteBookBtn.innerHTML = 'Delete Book';
    readSwitchInput.checked = readStatus;

    // Appends

    container.append(card);
    card.append(cardContent);
    readSwitchLabel.append(readSwitchInput, readSwitchSpan);
    cardContent.append(bookTitle, bookAuthor,
      bookPages, bookReadStatus, readSwitchLabel, deleteBookBtn);
  }
}


function addBookToLibrary() {
  const newTitle = document.getElementById('title').value;
  const newAuthor = document.getElementById('author').value;
  const newPages = document.getElementById('pages').value;
  const newReadStatus = document.getElementById('readStatus').checked;

  const newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
  myLibrary.push(newBook);
  document.getElementById('addbook').reset();
  render(myLibrary);
}

function showForm() {
  const form = document.getElementById('addbook');
  const button = document.getElementById('show-form-btn');
  form.classList.toggle('is-hidden');
  if (button.innerHTML === 'Show Form') {
    button.innerHTML = 'Hide Form';
  } else {
    button.innerHTML = 'Show Form';
  }
}

addBook.addEventListener('click', addBookToLibrary);
showFormBtn.addEventListener('click', showForm);

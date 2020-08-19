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
  document.getElementById("addbook").reset()

}

addBook.addEventListener('click', addBookToLibrary);

function render(books) {
    for (let book = 0; book < books.length; book++){ 
        const {
            title, author, pages, readStatus 
        } = books[book];
        const container = document.getElementById('bookcontainer');
        const card = document.createElement('div');
        card.classList.add('card', 'column' , 'is-4');
        container.append(card);
       const bookTitle = document.createElement('h1');
       bookTitle.classList.add('title', 'is-3');
       bookTitle.innerHTML = title;
       card.append(title);
    }
}

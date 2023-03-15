const myLibrary = [];

const newBtn = document.querySelector('#newBtn');
const newBookForm = document.querySelector('#newBookForm');

newBtn.addEventListener('click', () => {
  newBookForm.style.display = 'block';
});

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#titleInput').value;
  const author = document.querySelector('#authorInput').value;
  const pages = document.querySelector('#pagesInput').value;
  let read = '';
  if (document.querySelector('#readInput').checked === true) {
    read = 'Read';
  } else read = 'Not read yet';

  addBookToLibrary(title, author, pages, read);
  newBookForm.style.display = 'none';
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLib();
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  displayLib();
}

function displayLib() {
  const libraryTable = document.querySelector('#library-table');
  libraryTable.innerHTML = ''; // Clear the table before adding books

  // Create table header
  const tableHeader = document.createElement('tr');
  const headerTitles = ['Title', 'Author', 'Pages', 'Read', ''];
  headerTitles.forEach((attrib) => {
    const th = document.createElement('th');
    th.textContent = attrib;
    tableHeader.appendChild(th);
  });
  libraryTable.appendChild(tableHeader);

  // Create table rows for each book
  myLibrary.forEach((book) => {
    const bookRow = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    bookRow.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    bookRow.appendChild(authorCell);

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;
    bookRow.appendChild(pagesCell);

    const readCell = document.createElement('td');
    readCell.textContent = book.read;
    bookRow.appendChild(readCell);

    const removeCell = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('data-index', index);
    removeBtn.addEventListener('click', () => {
      removeBookFromLibrary(index);
    });
    removeCell.appendChild(removeBtn);
    bookRow.appendChild(removeCell);

    libraryTable.appendChild(bookRow);
  });
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'Not read yet');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'Read');
addBookToLibrary('1984', 'George Orwell', 328, 'Read');

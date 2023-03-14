const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push;
}

function displayLib() {
  const libraryTable = document.querySelector('#library-table');
  libraryTable.innerHTML = ''; // Clear the table before adding books

  // Create table header
  const tableHeader = document.createElement('tr');
  const headerTitles = ['Title', 'Author', 'Pages', 'Read'];
  headerTitles.forEach((title) => {
    const th = document.createElement('th');
    th.textContent = title;
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
    pagesCell.textContent = book.author;
    bookRow.appendChild(pagesCell);

    const readCell = document.createElement('td');
    readCell.textContent = book.author;
    bookRow.appendChild(readCell);

    libraryTable.appendChild(bookRow);
  });
}

const theHobbit = new Book( // just some sample data
  'The Hobbit',
  'J.R.R. Tolkien',
  '295 pages',
  'not read yet'
);

console.log(theHobbit.info());

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
  myLibrary.push(newBook);
}

function displayLib() {
  const libraryTable = document.querySelector('#library-table');

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
    pagesCell.textContent = book.pages;
    bookRow.appendChild(pagesCell);

    const readCell = document.createElement('td');
    readCell.textContent = book.read;
    bookRow.appendChild(readCell);

    libraryTable.appendChild(bookRow);
  });
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'Not read yet');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'Read');
addBookToLibrary('1984', 'George Orwell', 328, 'Read');

displayLib();

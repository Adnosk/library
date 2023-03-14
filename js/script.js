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

function displayLib {
  
}

const theHobbit = new Book( // just some sample data
  'The Hobbit',
  'J.R.R. Tolkien',
  '295 pages',
  'not read yet'
);

console.log(theHobbit.info());

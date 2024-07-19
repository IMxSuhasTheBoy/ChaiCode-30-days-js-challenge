// Activity 1: Object Creation and Access
// Task 1
const book = {
  title: "Why reactjs?",
  author: "IMxSuhasTheBoy",
  year: "2016",
};
console.log(book);

// Task 2
const bookTitle = book.title;
console.log(bookTitle);

const bookAuthor = book.author;
console.log(bookAuthor);

const { author, title } = book;
console.log(author);
console.log(title);

// Activity 2: Object Methods
// Task 3
book.getBookInfo = () => `Title: ${book.title} Author: ${book.author}`;

const bookInfo = book.getBookInfo();
console.log(bookInfo);

// Task 4
book.updateBookPublishYear = (newYear) => (book.year = newYear);

book.updateBookPublishYear(2024);
console.log(book);

// Activity 3: Nested Objects
// Task 5
const library = {
  name: "Science",
  books: [
    { title: "Physics", author: "John Does Science", year: "2042" },
    { title: "Chemistry", author: "John Does Chemistry", year: "2032" },
    { title: "Biology", author: "John Does Biology", year: "2028" },
  ],
};
console.log(library);

// Task 6
const libraryName = library.name;
console.log(libraryName);

library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword
// Task 7
book.getBookDetails = function () {
  return `Book title: ${this.title}, Publish year: ${this.year}`;
};
const bookDetails = book.getBookDetails();
console.log(bookDetails);

// Activity 5: Object Iteration
// Task 8
for (const key in book) {
  if (Object.hasOwnProperty.call(book, key)) {
    const element = book[key];
    console.log(element);
  }
}

// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));

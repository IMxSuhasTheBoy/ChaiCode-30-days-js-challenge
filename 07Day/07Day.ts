/** Activity 1: Object Creation and Access */
// Task 1
const book = {
  title: "Why reactjs?",
  author: "IMxSuhasTheBoy",
  year: "2016",
};
console.log(book);

//
//
//
//
//
//
//
//
// Task 2
console.log(`${book.title} - title prop from book obj.`);

console.log(`${book.author} - author prop from book obj.`);

const { title: bookTitle, author } = book;

//
//
//
//
//
//
//
//
/** Activity 2: Object Methods */
// Task 3
const book2 = {
  title: "Why nextjs?",
  author: "IMxSuhasTheBoy",
  year: 2024,
  getBookInfo() {
    return `Title: ${this.title} Author: ${this.author}.`;
  },
  updateBookPublishYear: Function.prototype,
};

console.log(book2.getBookInfo());

//
//
//
//
//
//
//
//
// Task 4
book2.updateBookPublishYear = (newYear: number) => (book2.year = newYear);

console.log("Updated book2 Obj:\n", book2);

//
//
//
//
//
//
//
//
/** Activity 3: Nested Objects */
// Task 5
const library: {
  name: string;
  books: {
    title: string;
    author: string;
    year: string;
  }[];
} = {
  name: "Science",
  books: [
    { title: "Physics", author: "John Does Science", year: "2042" },
    { title: "Chemistry", author: "John Does Chemistry", year: "2032" },
    { title: "Biology", author: "John Does Biology", year: "2028" },
  ],
};
console.log("nested Obj library:\n", library);

//
//
//
//
//
//
//
//
// Task 6
console.log(`Name of the library: ${library.name}`);

console.log(`Title of each book in library:`);
library.books.forEach((book, idx) => {
  console.log(`Book title at index ${idx}: ${book.title}`);
});

//
//
//
//
//
//
//
//
/** Activity 4: The this Keyword */
// Task 7
const book3 = {
  title: "Why typescript?",
  author: "IMxSuhasTheBoy",
  year: 2020,
  getBookDetails() {
    return `Book title: ${this.title}, Publish year: ${this.year}`;
  },
};

console.log(book3.getBookDetails());

//
//
//
//
//
//
//
//
/** Activity 5: Object Iteration */
// Task 8
for (const key in book) {
  //
  if (Object.hasOwnProperty.call(book, key)) {
    //
    console.log(book[key]);
  }
}

//
//
//
//
//
//
//
//
// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));

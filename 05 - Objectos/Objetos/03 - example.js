const key1 = 'title';
const key2 = 'author';
const key3 = 'pages';
const key4 = 'language';
const key5 = 'available';


const book = {};

book.title = 'Clean Code';
book.author = 'Robert C. Martin',
book.pages = 464;
book.language = 'English';
book.available = true;

console.log(book.author) 

delete book.language 
console.log(book)
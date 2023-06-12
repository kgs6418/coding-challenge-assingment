
const books = [
    { title: "Book 1", author: "tim", publicationYear: 2002 },
    { title: "Book 2", author: "tom", publicationYear: 2010 },
    { title: "Book 3", author: "tam", publicationYear: 2019 },
   ];

function filterBooks(books) {
    const filteredBooks = [];
  
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const { title, author, publicationYear } = book;
  
      if (publicationYear >= 2010) {
        filteredBooks.push({
          title,
          author: capitalizeAuthorName(author),
          publicationYear
        });
      }
    }
  
    return filteredBooks;
  }
  
  function capitalizeAuthorName(author) {
    return (author.toUpperCase());
  }
  

  
  const filteredBooks = filterBooks(books);
  console.log(filteredBooks);
  
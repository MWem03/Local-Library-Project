function getTotalBooksCount(books=[]) {
  return books.length
}

function getTotalAccountsCount(accounts=[]) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const total = books.reduce((accumulator,booksObj) => {
    const { borrows } =booksObj;
    let isBookBorrowed = borrows.some((borrowsObj) => {
      return borrowsObj.returned === false;
    });

    if (isBookBorrowed === true) {
      accumulator++;
    }
    return accumulator;
  }, 0);

  return total;
}

function getMostCommonGenres(books) {
  let lookUp = {};
  books.forEach((bookObj) => {
    const { genre } = bookObj;
    if (lookUp.hasOwnProperty(genre)) {
      lookUp[genre] += 1;
    } else {
      lookUp[genre] = 1;
    }
  });
  const genreArray = Object.keys(lookUp);
  let result = genreArray.map(genre=>{
        let count = lookUp[genre];
        let resultObj = { name: genre, count }
        return resultObj;
    })
  result.sort((genreA, genreB)=>{
    return genreB.count - genreA.count
  })
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  books.sort((bookA, bookB)=>{
    return bookB.borrows.length - bookA.borrows.length
  })
  let result = books.map((bookObj)=>{
    const { title, borrows} = bookObj
    let resultObj = {name: title, count: borrows.length}
    return resultObj
  })
  return result.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  books.sort((bookA, bookB)=>{
    return bookB.borrows.length - bookA.borrows.length
  })
  let topFiveBooks = books.slice(0, 5)
  let result = topFiveBooks.map((bookObj)=>{
    const {authorId, borrows} = bookObj
    let foundAuthor = authors.find((authorsObj)=>{
      return authorsObj.id === authorId
    })
    let fixedName = popularAuthorHelper(
      foundAuthor.name.first,
      foundAuthor.name.last
    )
    let resultObj = {name: fixedName, count: borrows.length}
    return resultObj
  })
  return result
}

function popularAuthorHelper(first, last){
return `${first} ${last}`
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

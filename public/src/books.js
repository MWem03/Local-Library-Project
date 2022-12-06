function findAuthorById(authors=[], id) {
  return authors.find((authorsObj)=> authorsObj.id === id)
}

function findBookById(books=[], id) {
  return books.find((booksObj)=> booksObj.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let bookIsBorrowed = books.filter((currentBookObj)=>{
    const {borrows} = currentBookObj
    let isTheBookBorrowed = borrows.some((isReturned)=>{
      return isReturned.returned === false
    })
    return isTheBookBorrowed
  })
  let isBookBorrowed = books.filter((currentBookObj)=>{
    const {borrows} = currentBookObj
    let isTheBookBorrowed = borrows.every((isReturned)=>{
      return isReturned.returned === true
    })
    return isTheBookBorrowed
  })
  return [bookIsBorrowed, isBookBorrowed]
}

function partitionBooksByBorrowedStatus(books) {
  let bookIsBorrowed = books.filter((currentBookObj)=>{
    const {borrows} = currentBookObj
    let isTheBookBorrowed = borrows.some((isReturned)=>{
      return isReturned.returned === false
    })
    return isTheBookBorrowed
  })
  let isBookBorrowed = books.filter((currentBookObj)=>{
    const {borrows} = currentBookObj
    let isTheBookBorrowed = borrows.every((isReturned)=>{
      return isReturned.returned === true
    })
    return isTheBookBorrowed
  })
  return [bookIsBorrowed, isBookBorrowed]
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  let result = borrows.map((borrowsObj)=>{
    let foundAccount = accounts.find((accountObj)=>{
      return borrowsObj.id === accountObj.id
    })
    foundAccount.returned = borrowsObj.returned
    return foundAccount
  })
  return result.slice(0, 10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

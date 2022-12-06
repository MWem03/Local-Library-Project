function findAccountById(accounts = [], id) {
  return accounts.find((accountsObj)=> accountsObj.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB)=>{
    if(accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()){
        return 1
    }else{
        return -1
    }
//     accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
})
}


function getTotalNumberOfBorrows(account, books) {
  let total = 0
  books.forEach((bookObj)=>{
    const {borrows} = bookObj
    borrows.forEach((accountObj)=>{
      if(accountObj.id === account.id) {
        total ++
      }
    })
  })
  return total
}
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessedByAccount = books.filter((bookObj) => {
    const { borrows } = bookObj;
    let foundAccount = borrows.find((borrowsObj) => {
      return borrowsObj.id === account.id && borrowsObj.returned === false;
    });
    return foundAccount
  });
  let result = booksPossessedByAccount.map((bookObj) => {
    const { authorId } = bookObj;
    let foundAuthor = authors.find((authorObj) => {
      return authorObj.id === authorId;
    });
    bookObj.author = foundAuthor;

    return bookObj;
  });
  return result.slice(0, 1);
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

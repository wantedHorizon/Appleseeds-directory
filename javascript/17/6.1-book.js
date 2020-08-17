
const book = {
    autor: 'eliran',
    name:'Wonderland',
    publish_year:'2002',
    country: 'israel',
    language: 'Hebrew'
}

const returnBook = (book) => {
    return `The book ${book.name} was written by ${book.autor} in the year
    ${book.publish_year} `
}

console.log(returnBook(book));
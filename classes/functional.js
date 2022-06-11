let myLibrary = []

function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () =>
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read ? 'read' : 'not read yet'
      }.`
    )
}

const myDiary = new Book('diary', 'me', 6, true)

function addBookToLibrary(book) {
  myLibrary.push(book)
}

addBookToLibrary(myDiary)

console.log(myLibrary)
myDiary.info()

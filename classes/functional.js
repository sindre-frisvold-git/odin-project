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

function addBookToLibrary() {
  // do stuff here
}

class Stack {
  constructor(){
    this.books = [];
  }
  
  push(item) {
    this.books.push(item);
  }

  print(){
    console.log(this.books)
  }

}

// Se sugiere cambiar por una clase

class crearLibro {
  constructor(name, isbn, author, editorial) {
    this.name = name,
    this.isbn = isbn,
    this.author = author,
    this.editorial = editorial;
  }
}

// Datos de libros

let book = {
  name: "El principito",
  isbn: 1234,
  author: "Andres",
  editorial: "Norma"
};

let book2 = {
  name: "El viaje de miguel strogof",
  isbn: 2132,
  author: "Russo",
  editorial: "Punto negro"
};

let book3 = {
  name: "Fabulas de robots de Stanislaw Lem",
  isbn: 1212,
  author: "Jadwiga Maurizio",
  editorial: "Impedimenta"
};

let stack = new Stack();

stack.push(book);
stack.push(book2);
stack.push(book3);

stack.print();
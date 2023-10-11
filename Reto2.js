class Node {
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Insertar un nodo 
  append(value, position) {
      const newNode = new Node(value);

      if (position === 0) {
          newNode.next = this.head;
          this.head = newNode;
          if (!this.tail) {
              this.tail = newNode;
          }
          return `El elemento ${value.titulo} se insertó como cabeza`;
      }

      let current = this.head;
      let currentIndex = 0;
      while (current !== null && currentIndex < position - 1) {
          current = current.next;
          currentIndex++;
      }

      if (current === null) {
          this.tail.next = newNode;
          this.tail = newNode;
      } else {
          newNode.next = current.next;
          current.next = newNode;
      }

      return `${value.titulo} insertado en la posición: ${position}`;
  }

  // Buscar un valor en la lista
  peek(value, current = this.head) {
      if (this.head === null) {
          return false;
      }

      if (current !== null) {
          if (current.value.title === value.title) {
              return true;
          } else {
              return this.peek(value, current.next);
          }
      }

      return false;
  }

  // Tamaño de la lista
  size(current = this.head, acum = 0) {
      if (current === null) {
          return acum;
      }
      
      return this.size(current.next, acum + 1);
  }    

  // Eliminar un valor de la lista
  remove(value, current = this.head) {
      if (this.head === null) {
          return false;
      }

      if (this.head.value.title === value.title) {
          this.head = this.head.next;
          return true;
      }

      if (current.next !== null) {
          if (current.next.value === value) {
              current.next = current.next.next;
              return true;
          } else {
              return this.remove(value, current.next);
          }
      }
      
      return false;
  }

  // Imprimir la lista
  print() {
      let node = this.head;
      while (node !== null) {
          console.log(`Título: ${node.value.titulo} -Descripción: ${node.value.descripcion} -Siguiente: ${node.next ? node.next.value.titulo : null}`);
          node = node.next;
      }
  }
}

//Solucion reto

const tareas = [
  {
      titulo: "Hacer tarea ingenieria 2",
      descripcion: "Ver video de la API."
  },
  {
      titulo: "Hacer ejercicio",
      descripcion: "Hacer pierna y gluteo."
  },
  {
    titulo: "Reparar computador",
    descripcion: "Formatear el portatil para eliminar virus."
  },
 
];


// creación de la LinkedList
var listaTareas = new LinkedList();

// agregar datos del arreglo listaTareas en la lista
for (const task of tareas) {
  console.log(listaTareas.append(task, tareas.indexOf(task)));
}

// imprimir toda la lista
console.log("Lista de tareas");
listaTareas.print();






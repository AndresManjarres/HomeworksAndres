class Person {
  constructor(nombre, cumpleanos) {
      this.nombre = nombre;
      this.cumpleanos = cumpleanos;
  }
}

class Node {
  constructor(value) {
      this.value = value;
      this.children = [];
  }

  isLeaf() {
      return this.children.length === 0;
  }
}

class NaryTree {
  constructor() {
      this.root = null;
  }

  search(nombre, node = this.root) {
      if (!this.root) {
          return null;
      }

      if (node.value.nombre === nombre) {
          return node;
      } else {
          const children = node.children;
          const inChildren = children.find(item => item.value.nombre === nombre);

          if (inChildren) {
              return inChildren;
          } else {
              let hasChild;
              children.forEach(item => {
                  if (hasChild) {
                      return;
                  }
                  hasChild = this.search(nombre, item);
              });

              return hasChild;
          }
      }
  }

  insert(value, parent) {
      const newNode = new Node(value);

      if (!parent) {
          if (!this.root) {
              this.root = newNode;
          } else {
              return null;
          }
      } else {
          const parentNode = this.search(parent);
          if (parentNode) {
              parentNode.children.push(newNode);
          } else {
              return null; 
          }
      }
  }

  preOrder(node = this.root) {
      if (!node) {
          return;
      }

      console.log(node.value);
      node.children.forEach(element => {
          this.preOrder(element);
      });
  }

  postOrder(node = this.root) {
      if (!node) {
          return;
      }

      node.children.forEach(element => {
          this.postOrder(element);
      });

      console.log(node.value);
  }

  inOrder(node = this.root) {
      if (!node) {
          return;
      }

      if (node.children.length === 0) {
          console.log(node.value);
      } else {
          this.inOrder(node.children[0]);
          console.log(node.value);

          for (let i = 1; i < node.children.length; i++) {
              this.inOrder(node.children[i]);
          }
      }
  }
}

const tree = new NaryTree();

//Arbol genialogico

// Generación 1
tree.insert(new Person("Edgar Manjarres", "1968-12-12"), null);

// Generación 2
tree.insert(new Person("Lina Pancho", "1990-05-20"), "Edgar Manjarres");
tree.insert(new Person("Yuliana Pancho", "1992-08-15"), "Edgar Manjarres");
tree.insert(new Person("Andres Manjarres", "1995-03-30"), "Edgar Manjarres");

// Generación 3
tree.insert(new Person("Luisa Perez", "2010-11-05"), "Andres Manjarres");
tree.insert(new Person("Jacobo Pancho", "2011-09-25"), "Yuliana Pancho");
tree.insert(new Person("Adara Delgago", "2014-04-08"), "Lina Panco");

console.log("Preorder Familia:");
tree.preOrder();

console.log("Inorder Familia:");
tree.inOrder();

console.log("Postorder Familia:");
tree.postOrder();
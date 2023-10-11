class Queue{
  constructor(){
      this.queue = [];
  }

  enqueue(value){
      this.queue.push(value);
      return this.queue;
  }

  dequeue(){
      return this.queue.shift();
  }

  peek(){
      return this.queue[0];
  }

  size(){
      return this.queue.length;
  }

  isEmpty(){
      return this.queue.length === 0;
  }

  print(){
      return console.log(this.queue);
  }
}

const colaATM = [
  {
      nombre: "Andres Manjarres",
      tiempoLlegada: "10:30 AM"
  },
  {
      nombre: "Alex Valdez",
      tiempoLlegada: "12:15 PM"
  },
  {
      nombre: "Juan Bolaños",
      tiempoLlegada: "12:30 PM"
  }
];

var personQueue = new Queue()

for (let i = 0; i < colaATM.length; i++) {
  personQueue.enqueue(colaATM[i]);
}

personQueue.print()

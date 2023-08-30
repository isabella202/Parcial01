//1.	Escriba una función que reciba una Cola de números flotantes y 
//devuelva una nueva Cola pero con los elementos invertidos, es decir el último de la Cola C, pasará a ser el primero de la nueva Cola.

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

const colaOriginal = [1.5, 2.2, 3.5, 4.3];
console.log ("Cola original",colaOriginal)

  function invierteCola(cola) {
    const colaInvertida = [];
  
    for (let i = cola.length - 1; i >= 0; i--) {
      colaInvertida.push(cola[i]);
    }
  
    return colaInvertida;
  }
const colaInvertida = invierteCola(colaOriginal);
  
console.log("Cola invertida:" , colaInvertida);
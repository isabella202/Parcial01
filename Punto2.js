//2.	Implementar una función que invierta una pila.
class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}

function invertirPila(pila) {
    const pilaInvertida = [];
    let i = 0;

    while (i < pila.length) {
      pilaInvertida.unshift(pila[i]);
      i++;
    }
  
    return pilaInvertida;
  }
  
  const pilaOriginal = [1, 2, 3, 4, 5];
  const pilaInvertida = invertirPila(pilaOriginal);
  
  console.log("Pila original:",pilaOriginal);
 
  console.log("Pila invertida:",pilaInvertida);

  
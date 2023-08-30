//3.	Escriba un método que, dadas dos listas ordenadas de números enteros, 
//realice la concatenación en forma ordenada de ambas listas. El método debe recibir los apuntadores a los primeros nodos de cada lista.

class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  }
  
  function concatenaListasOrdenadas(lista1, lista2) {
    const dummyNode = new ListNode();
    let current = dummyNode;
  
    while (lista1 && lista2) {
      if (lista1.value < lista2.value) {
        current.next = lista1;
        lista1 = lista1.next;
      } else {
        current.next = lista2;
        lista2 = lista2.next;
      }
      current = current.next;
    }
  
    current.next = lista1 || lista2;
  
    return dummyNode.next;
  }
  
  const lista1 = new LinkedList();
  [1, 3, 5].forEach(value => lista1.insert(value));
  
  const lista2 = new LinkedList();
  [2, 4, 6].forEach(value => lista2.insert(value));
  
  const listaConcatenada = concatenaListasOrdenadas(lista1.head, lista2.head);
  
  let current = listaConcatenada;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
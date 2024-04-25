/* 

Given K sorted singly-linked lists, merge them in-place into a single sorted linked list.

e.g.

1 -> 3 -> 5
2 -> 3 -> 6
2 -> 7 -> 9

1 -> 2 -> 2 -> 3 -> 3 -> 5 -> 6 -> 7 -> 9
*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  getData() {
    return this.data
  }

  setData(data) {
    this.data = data
  }

  getNext() {
    return this.next
  }

  setNext(next) {
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  getHead() {
    return this.head
  }

  setHead(head) {
    this.head = head
  }

  append(data) {
    const newNode = new Node(data)

    // If the linked list is empty, set the new node as the head and return to stop the function
    if (this.getHead() === null) {
      this.setHead(newNode)
      return
    }

    let currentNode = this.getHead()
    while (currentNode.getNext() !== null) {
      currentNode = currentNode.getNext()
    }

    currentNode.setNext(newNode)
  }

  getTail() {
    // If the linked list is empty, and return null to stop the function
    if (this.getHead() === null) {
      return null
    }

    let currentNode = this.getHead()
    while (currentNode.getNext() !== null) {
      currentNode = currentNode.getNext()
    }

    return currentNode
  }
}

// Merge linked lists, returns a new linked list
function mergeLists(lists) {
  const listResult = new LinkedList()

  // Iterate the list of linked lists
  for (let i = 0; i < lists.length; i++) {
    let currentList = lists[i]
    let currentNode = currentList.getHead()
    let currentTail = currentList.getTail()

    // Iterate each linked list and append the data to the result linked list
    while (currentNode.getNext() !== null) {
      listResult.append(currentNode.getData())
      currentNode = currentNode.getNext()
    }

    listResult.append(currentTail.getData())
  }

  return listResult
}

// Sort linked list, returns the given linked list sorted
function sortLinkedList(linkedList) {
  let currentNode = linkedList.getHead()

  // Iterate the linked list
  while (currentNode.getNext() !== null) {
    let nextNode = currentNode.getNext()

    // Detect if the current node is greater than the next node
    if (currentNode.getData() > nextNode.getData()) {
      let temp = currentNode.getData()
      currentNode.setData(nextNode.getData())
      nextNode.setData(temp)

      // Reset the current node to the head
      currentNode = linkedList.getHead()
    } else {
      // Move to the next node
      currentNode = nextNode
    }
  }

  return linkedList
}

// TEST
const linkedList1 = new LinkedList()
linkedList1.append(1)
linkedList1.append(3)
linkedList1.append(5)

const linkedList2 = new LinkedList()
linkedList2.append(2)
linkedList2.append(3)
linkedList2.append(6)

const linkedList3 = new LinkedList()
linkedList3.append(2)
linkedList3.append(7)
linkedList3.append(9)

const linkedList = mergeLists([linkedList1, linkedList2, linkedList3])
console.log(JSON.stringify(linkedList))

const sortedLinkedList = sortLinkedList(linkedList)

console.log(JSON.stringify(sortedLinkedList))

// Chat GPT Solution:

// function mergeKLists(lists) {
//   // Función para encontrar el mínimo nodo entre las listas enlazadas
//   function findMin(lists) {
//     let min = Infinity
//     let minIndex = -1
//     for (let i = 0; i < lists.length; i++) {
//       if (lists[i] && lists[i].val < min) {
//         min = lists[i].val
//         minIndex = i
//       }
//     }
//     return minIndex
//   }

//   let dummy = new ListNode(-1)
//   let current = dummy

//   while (true) {
//     let minIndex = findMin(lists)
//     // Si no se encuentra ningún mínimo, todas las listas están vacías, salimos del bucle
//     if (minIndex === -1) break

//     // Agregamos el nodo mínimo a la lista enlazada resultante
//     current.next = lists[minIndex]
//     current = current.next

//     // Avanzamos al siguiente nodo en la lista seleccionada
//     lists[minIndex] = lists[minIndex].next
//   }

//   return dummy.next
// }

// function showList() {
//   // Ejemplo de uso
//   let list1 = new ListNode(1, new ListNode(3, new ListNode(5)))
//   let list2 = new ListNode(2, new ListNode(3, new ListNode(6)))
//   let list3 = new ListNode(2, new ListNode(7, new ListNode(9)))

//   let mergedList = mergeKLists([list1, list2, list3])

//   while (mergedList) {
//     console.log(mergedList.val)
//     mergedList = mergedList.next
//   }
// }
// // Imprimir la lista enlazada resultante
// console.log(showList())

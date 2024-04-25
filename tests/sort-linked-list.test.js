const {
  LinkedList,
  sortLinkedListLists,
} = require('../challenges/sort-linked-list')

describe('sortLinkedListLists', () => {
  test('Should return 1 -> 2 -> 2 -> 3 -> 3 -> 5 -> 6 -> 7 -> 9 if receive [1 -> 3 -> 5, 2 -> 3 -> 6, 2 -> 7 -> 9]', () => {
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

    const linkedListExpected = new LinkedList()
    linkedListExpected.append(1)
    linkedListExpected.append(2)
    linkedListExpected.append(2)
    linkedListExpected.append(3)
    linkedListExpected.append(3)
    linkedListExpected.append(5)
    linkedListExpected.append(6)
    linkedListExpected.append(7)
    linkedListExpected.append(9)

    const result = sortLinkedListLists([linkedList1, linkedList2, linkedList3])

    expect(result).toEqual(linkedListExpected)
  })
})

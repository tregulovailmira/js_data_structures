/*1) Написать функцию, которая проверяет строку на правильность скобочной последовательности. Скобки могут быть любые.
В реализации использовать структуру данных Stack. */
export class Stack {
    constructor(maxSize = 1000) {
        if (typeof maxSize !== "number") {
            throw new TypeError("size must be a number");
        }
        if (maxSize < 1) {
            throw new RangeError("must be a positive number");
        }

        this._maxSize = maxSize;
        this._size = 0;
    }

    get maxSize() {
        return this._maxSize;
    }

    get isEmpty() {
        return this.size === 0;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;
    }

    push(value) {
        if (this.size >= this.maxSize) {
            throw new RangeError("Stack overflow");
        }
        this[this.size++] = value;
        return this.size;
    }

    pop() {
        if (this.isEmpty) {
            return;
        }
        const deletedItem = this[this.size - 1];
        delete this[this.size - 1];
        this.size--;
        return deletedItem;
    }

    peek() {
        if (this.isEmpty) {
            return;
        }
        return this[this.size - 1];
    }
}

export function checkBraces(string) {
    const stack = new Stack();
    const openBraces = ['(', '{', '['];
    const closeBraces = [')', '}', ']'];
    const braceObject = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (const brace of string) {
        if (openBraces.includes(brace)) {
            stack.push(brace);
            continue;
        }
        if (closeBraces.includes(brace)) {
            if (stack.isEmpty) {
                return false;
            }
        }

        if (braceObject[brace] === stack.peek()) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.isEmpty;
}
/*2)Сформировать список(структура данных LinkedList) целых чисел, вводимых пользователем,
в том порядке, в котором вводятся эти числа, но без повторений элементов подряд.*/
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addNode(value) {
        const node = new ListNode(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    getNodeByIndex(index) {
        if (this.length === 0 || index < 0 || index > this.length) {
            throw new RangeError('Not in list');
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    [Symbol.iterator]() {
        return new LinkedListIterator(this);
    }
}

const list = new LinkedList();
list.addNode('test');
list.addNode('test2');
list.addNode('test3');

class LinkedListIterator {
    constructor(linkedList) {
        this.iterable = linkedList.head;
    }

    next() {
        if(this.iterable) {
            const value = this.iterable.value;
            this.iterable = this.iterable.next;
            return {
                value,
                done: false,
            };
        }
        return {done: true};
    }
}

export function addNumberToList(string) {
    const list = new LinkedList();
    const array = string.split('');
    for (let item of array) {
        if(!isNaN(+item)) {
            if (list.head === null) {
                list.addNode(+item);
                continue;
            }
            let previousItem = list.getNodeByIndex(list.length-1).value;
            if (previousItem !== +item) {
                list.addNode(+item);
            }
        }
    }
    return list;
}
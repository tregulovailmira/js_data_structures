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

        switch (brace) {
            case ')': {
                if (stack.peek() === '(') {
                    stack.pop();
                }
                break;
            }
            case '}': {
                if (stack.peek() === '{') {
                    stack.pop();
                }
                break;
            }
            case ']': {
                if (stack.peek() === '[') {
                    stack.pop();
                }
                break;
            }
        }
    }
    return stack.isEmpty;
}
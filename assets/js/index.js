import { Stack, checkBraces, LinkedList, addNumberToList } from './dataStructures.js'

console.log(checkBraces('{}()]]]()(){}'));
console.log(checkBraces('{}()))()(){}'));
console.log(checkBraces('{}()((())){{}}[[]]()'));

console.log(addNumberToList(1, 6, 8, 8, 10, 10));
import { checkBraces, addNumberToList } from './dataStructures.js'

console.log(checkBraces('{}()]]]()(){}'));
console.log(checkBraces('{}()))()(){}'));
console.log(checkBraces('{}()((())){{}}[[]]()'));

console.log(addNumberToList(5, 5, 7, 4, 5, 5));
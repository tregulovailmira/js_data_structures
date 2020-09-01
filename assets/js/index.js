import { Stack, checkBraces } from './dataStructures.js'

console.log(checkBraces('{}()]]]()(){}'));
console.log(checkBraces('{}()))()(){}'));
console.log(checkBraces('{}()((())){{}}[[]]()'));
import { randomNumber, sortAsc, sortDesc } from "./array-metot.js";
import * as arrayMetot2 from "./array-metot2.js";

const numbers = [];
const numbers2 = [];

for(let i = 0; i < 10; i++){
    numbers.push(randomNumber(100));
    numbers2.push(arrayMetot2.createNumber(100));
}

console.log(numbers);
console.log(sortAsc(numbers));
console.log(sortDesc(numbers));
console.log(numbers2);
console.log(arrayMetot2.sortASC(numbers2));
console.log(arrayMetot2.sortDESC(numbers2));
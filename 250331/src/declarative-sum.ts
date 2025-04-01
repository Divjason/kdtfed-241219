import { range } from "./range";
import { fold } from "./fold";

let numbers: number[] = range(1, 101);
let result = fold(numbers, (result, value) => result + value, 0);

console.log(result);

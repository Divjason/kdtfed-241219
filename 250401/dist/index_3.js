"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
// class NumberList {
//   constructor(private list: number[]) {}
//   push(data: number) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }
// class StringList {
//   constructor(private list: string[]) {}
//   push(data: string) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }
const numberList = new List([1, 2, 3]);
console.log(numberList);

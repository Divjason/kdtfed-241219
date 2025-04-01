"use strict";
// // let str = "Hello World!";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동가능!`);
    }
}

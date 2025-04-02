"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});
promise.then((response) => {
    console.log(response);
});
promise.catch((error) => {
    if (typeof error === "string") {
        console.error(error);
    }
});

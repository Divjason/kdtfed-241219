"use strict";
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "David",
    age: 20,
    location: "seoul",
};
const getPropertyKey = (person, key) => {
    return person[key];
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글제목",
                content: "게시글본문",
            });
        }, 3000);
    });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const login = (user: User) => {
//   if ("kickCount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명을 추방했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
//   } else if ("visitCount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
//   }
// };
const login = (user) => {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명을 추방했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }
};
const loading = {
    state: "LOADING",
};
const failed = {
    state: "FAILED",
    error: {
        message: "because error is...",
    },
};
const success = {
    state: "SUCCESS",
    response: {
        data: "data...",
    },
};
const processResult = (task) => {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러발생 : ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
};

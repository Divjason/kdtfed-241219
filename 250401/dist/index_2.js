"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goToSchool = (user) => {
    // if (user.profile.type !== "student") {
    //   console.log("잘못오셨습니다!");
    //   return;
    // }
    const school = user.profile.school;
    console.log(`${school}으로 등교 완료!`);
};
const developerUser = {
    name: "David",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "David",
    profile: {
        type: "student",
        school: "Ezen",
    },
};
goToSchool(studentUser);
// goToSchool(developerUser);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "David",
    role: Role.ADMIN,
};
const user8 = {
    name: "Jane",
    role: Role.GUEST,
};
const user7 = {
    name: "Juliet",
    role: Role.USER,
};
console.log(user9, user8, user7);

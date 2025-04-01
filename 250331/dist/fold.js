"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fold = void 0;
const fold = (array, callback, initValue) => {
    let result = initValue;
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        result = callback(result, value);
    }
    return result;
};
exports.fold = fold;

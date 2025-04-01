"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
const range = (from, to) => {
    return from < to ? [from, ...(0, exports.range)(from + 1, to)] : [];
};
exports.range = range;

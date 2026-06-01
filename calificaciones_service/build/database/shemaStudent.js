"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    dni: { type: Number, required: true },
    career: { type: String, required: true }
});
exports.default = exports.studentSchema;

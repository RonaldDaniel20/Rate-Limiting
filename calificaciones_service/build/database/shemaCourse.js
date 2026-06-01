"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.courseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
    instructor: { type: String, required: true },
});

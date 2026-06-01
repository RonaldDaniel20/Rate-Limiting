"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.gradeSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Types.ObjectId, ref: "Student", required: true },
    courseId: { type: mongoose_1.Types.ObjectId, ref: "Course", required: true },
    grade: { type: Number, required: true },
});

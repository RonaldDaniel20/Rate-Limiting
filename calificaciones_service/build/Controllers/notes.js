"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesStudent = void 0;
const models_1 = require("../database/models");
const models_2 = require("../database/models");
const getNotesStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = req.body.id;
    // if(typeof studentId !== 'number'){
    //     return res.status(400).json({ 
    //         success: false,
    //         message: 'Invalid student ID' });
    // }
    const student = yield models_2.StudentModel.find({ dni: studentId });
    if (!student || student.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'Student not found'
        });
    }
    const notes = yield Promise.all(student.map((st) => __awaiter(void 0, void 0, void 0, function* () {
        const grades = yield models_1.GradeModel.find({ studentId: st._id }).populate('courseId');
        return {
            student: st.name + ' ' + st.lastName,
            grades: grades.map(grade => ({
                course: grade.courseId.name,
                grade: grade.grade
            }))
        };
    })));
    return res.status(200).json({
        success: true,
        data: notes
    });
});
exports.getNotesStudent = getNotesStudent;

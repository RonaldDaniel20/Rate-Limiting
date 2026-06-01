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
const models_1 = require("./models");
const models_2 = require("./models");
const models_3 = require("./models");
/* Estudiantes */
const students = [
    {
        name: 'R. Daniel',
        lastName: 'Mutumbajoy',
        age: 23,
        dni: 12345678,
        career: 'Computer Science'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 22,
        dni: 87654321,
        career: 'Mathematics'
    }
];
/* Cursos */
const courses = [
    {
        name: 'Database Systems',
        code: 'CS101',
        credits: 4,
        instructor: 'Dr. Smith'
    },
    {
        name: 'Algorithms',
        code: 'CS102',
        credits: 3,
        instructor: 'Dr. Johnson'
    }
];
/* Agregamos a la base de datos los estudiantes */
function addData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentsAdded = yield models_1.StudentModel.insertMany(students);
            console.log("Estudiantes agregados:", studentsAdded);
            const courseAdded = yield models_2.CourseModel.insertMany(courses);
            console.log("Cursos agregados:", courseAdded);
            const gradesAdded = yield models_3.GradeModel.insertMany([
                {
                    studentId: studentsAdded[0]._id,
                    courseId: courseAdded[0]._id,
                    grade: 45
                },
                {
                    studentId: studentsAdded[1]._id,
                    courseId: courseAdded[1]._id,
                    grade: 40
                }
            ]);
            console.log("Calificaciones agregadas:", gradesAdded);
            console.log("Datos agregados exitosamente.");
        }
        catch (error) {
            let message = '';
            if (error instanceof Error) {
                message += error.message;
            }
            console.error("Error al agregar los datos:", message);
        }
    });
}
exports.default = addData;

import { StudentModel } from "./models";
import { CourseModel } from "./models";
import { GradeModel } from "./models";

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
]

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
]

/* Agregamos a la base de datos los estudiantes */

async function addData () {
    try {
        const studentsAdded = await StudentModel.insertMany(students);
        console.log("Estudiantes agregados:", studentsAdded);

        const courseAdded = await CourseModel.insertMany(courses);
        console.log("Cursos agregados:", courseAdded);

        const gradesAdded = await GradeModel.insertMany([
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
        ])
        console.log("Calificaciones agregadas:", gradesAdded);
        console.log("Datos agregados exitosamente.");

    }catch(error: unknown){
        let message = ''

        if(error instanceof Error){
            message += error.message
        }
        console.error("Error al agregar los datos:", message);
    }
}

export default addData;




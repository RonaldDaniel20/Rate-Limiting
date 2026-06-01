import { studentSchema } from "./shemaStudent";
import { courseSchema } from "./shemaCourse";
import { gradeSchema } from "./shemaGrade";
import { model } from "mongoose";

import { Student } from "./shemaStudent";
import { Course } from "./shemaCourse";
import { Grade } from "./shemaGrade";

const StudentModel = model<Student>("Student", studentSchema);
const CourseModel = model<Course>("Course", courseSchema);
const GradeModel = model<Grade>("Grade", gradeSchema);

export { StudentModel, CourseModel, GradeModel };

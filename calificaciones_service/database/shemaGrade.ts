import { Schema, Types } from "mongoose";

export interface Grade {
    studentId: Types.ObjectId;
    courseId: Types.ObjectId;
    grade: number;
}

export const gradeSchema = new Schema<Grade>({
    studentId: { type: Types.ObjectId, ref: "Student", required: true },
    courseId: { type: Types.ObjectId, ref: "Course", required: true },
    grade: { type: Number, required: true },
});

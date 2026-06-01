import { Schema } from "mongoose";

export interface Student {
    name: string;
    lastName: string;
    age: number;
    dni: number;
    career: string;
}

export const studentSchema = new Schema<Student>({
    name : { type: String, required: true },
    lastName : { type: String, required: true },
    age : { type: Number, required: true },
    dni : { type: Number, required: true },
    career : { type: String, required: true }
})

export default studentSchema;
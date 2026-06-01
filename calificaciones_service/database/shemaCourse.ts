import { Schema } from "mongoose";

export interface Course {
    name: string;
    code: string;
    credits: number;
    instructor: string;
}

export const courseSchema = new Schema<Course>({
    name: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
    instructor: { type: String, required: true },
});


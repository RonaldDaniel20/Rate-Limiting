import { Request, Response } from "express";
import { GradeModel } from "../database/models";
import { StudentModel } from "../database/models";

const getNotesStudent = async (req: Request, res: Response) => {
    const studentId = req.body.id; 
    if(typeof studentId !== 'number'){
        return res.status(400).json({ 
            success: false,
            message: 'Invalid student ID' });
    }
    
    const student = await StudentModel.find({ dni: studentId });

    if(!student || student.length === 0){
        return res.status(404).json({ 
            success: false,
            message: 'Student not found' });
    }

    const notes = await Promise.all(
        student.map(async ( st ) => {
            const grades = await GradeModel.find({studentId: st._id}).populate('courseId');

            return {
                student: st.name + ' ' + st.lastName,
                grades: grades.map(grade => ({
                    course: (grade.courseId as any).name,
                    grade: grade.grade
                }))
            }
        })

    )

    return res.status(200).json(
        {
            success: true,
            data: notes
        }
    );
}

export { getNotesStudent }; 
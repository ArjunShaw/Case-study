import { Request, Response } from "express";
import { CourseService } from "../service/CourseService";
import { Course } from "../models/Course";

export class CourseController {
  constructor(private courseService: CourseService) {}

  async addCourse(req: Request, res: Response): Promise<void> {
    try {
      const { id, name, capacity } = req.body;

      const course: Course = {
        id,
        name,
        capacity,
        students: []
      };

      await this.courseService.addCourse(course);

      res.status(201).json({
        status: true,
        message: "Course added successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async getAllCourses(req: Request, res: Response) {
    const courses = await this.courseService.findAllCourses();
    res.json(courses);
  }

  //controller methods for enrollStudent and deleteCourse have been commented out in app.ts

  //  async enrollStudent(req: Request, res: Response) {
  //   try {
  //     const { courseId, studentId } = req.body;
  //     const result = await this.courseService.enroll(courseId, studentId);
  //     res.json(result);
  //   } catch (error: any) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }


  // async deleteCourse(req: Request, res: Response) {
  //   try {
  //     const { courseId } = req.params;
  //     const result = await this.courseService.deleteCourse(courseId as string);
  //     res.json(result);
  //   } catch (error: any) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }
}

import { ICourseRepository } from "../repositories/interfaces/ICourseRepository";
import { Course } from "../models/Course";

export class CourseService {
  constructor(private courseRepo: ICourseRepository) {}

  async addCourse(course: Course) {
    await this.courseRepo.save(course);
    return { message: "Course added" };
  }


  async enroll(courseId: string, studentId: string) {
    const course = await this.courseRepo.findById(courseId);

    if (!course) {
      throw new Error("Course not found");
    }

    if (course.students.length >= course.capacity) {
      throw new Error("Course is full");
    }

    await this.courseRepo.enrollStudent(courseId, studentId);
    return { message: "Student enrolled successfully" };
  }

  async getStudentCourses(studentId: string) {
    return this.courseRepo.findByStudentId(studentId);
  }


  async findAllCourses(): Promise<Course[]> {
    return this.courseRepo.findAll();
  }



  async deleteCourse(courseId: string) {
  const course = await this.courseRepo.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  await this.courseRepo.delete(courseId);
    return { message: "Course deleted successfully" };
 }
}

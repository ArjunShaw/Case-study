import express from "express";

import { CourseController } from "./controllers/CourseController";
import { CourseService } from "./service/CourseService";
import { InMemoryCourseRepository } from "./repositories/InMemoryCourseRepository";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// dependency injection
const courseRepository = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepository);
const courseController = new CourseController(courseService);

// routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/courses", (req, res) => {
  courseController.addCourse(req, res);
});


app.post("/courses/enroll", async (req, res) => {
  try {
    const { courseId, studentId } = req.body;
    const result = await courseService.enroll(courseId, studentId);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/course", (req, res) => {
    courseController.getAllCourses(req, res);  
});

app.delete("/courses/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;
    const result = await courseService.deleteCourse(courseId);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});



// app.post("/courses/enroll", (req, res) => {
//   courseController.enrollStudent(req, res);
// });
// app.delete("/courses/:courseId", (req, res) => {
//   courseController.deleteCourse(req, res);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

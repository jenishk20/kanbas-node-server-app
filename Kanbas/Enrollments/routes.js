import * as enrollmentDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments/enroll", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentDao.enrollUserInCourse(userId, courseId);
    res.send("Enrolled User in Course");
  });

  app.post("/api/enrollments/unenroll", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentDao.unenrollUserFromCourse(userId, courseId);
    res.send("Unenrolled User from Course");
  });
}

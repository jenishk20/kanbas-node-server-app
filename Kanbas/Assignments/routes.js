import * as dao from "./dao.js";
import * as assignmentDao from "../Assignments/dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.getAllAssignments();
    res.send(assignments);
  });

  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentDao.findCourseAssignment(courseId);
    res.json(assignments);
  });

  app.post("/api/assignments", (req, res) => {
    const assignment = req.body;
    const newAssignment = dao.createAssignment(assignment);
    res.send(newAssignment);
  });

  app.post("/api/assignments/deleteAssignment", (req, res) => {
    const { courseId, assignmentId } = req.body;
    const status = assignmentDao.deleteAssignment(assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
}

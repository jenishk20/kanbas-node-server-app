import Database from "../Database/index.js";
export function getAllAssignments() {
  return Database.assignments;
}

export function findCourseAssignment(courseId) {
  const { assignments } = Database;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return courseAssignments;
}

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
};

export const deleteAssignment = (assignmentId) => {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
};

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  const { assignments } = Database;
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  Object.assign(assignment, assignmentUpdates);
  return assignment;
};

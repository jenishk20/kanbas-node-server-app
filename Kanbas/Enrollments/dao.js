import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now().toString(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId,courseId){
  const { enrollments } = Database;
  const index = enrollments.findIndex((enrollment) => enrollment.user === userId && enrollment.course === courseId);
  enrollments.splice(index, 1);
}



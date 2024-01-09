export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (Array.isArray(arr)) {
    const students = arr.filter((item) => item.location === city);
    const studentsId = students.map((item) => item.id);
    const newStudents = arr.map((item) => {
      if (studentsId.includes(item.id)) {
        const studentGrade = newGrades.filter(
          (grade) => grade.studentId === item.id
        );
        if (studentGrade.length > 0) {
          return { ...item, grade: studentGrade[0].grade };
        }
      }
      return item;
    });
    return newStudents;
  }
  return [];
}

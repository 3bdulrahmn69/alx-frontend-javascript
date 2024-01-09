export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((accumulator, item) => accumulator + item.id, 0);
  }
  return 0;
}

export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((item) => item.location === city);
  }
  return [];
}

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newSet = new Set();
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newSet.add(item.slice(startString.length));
    }
  }
  return [...newSet].join('-');
}

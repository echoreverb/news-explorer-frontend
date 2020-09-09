export default function dateToString(initDate) {
  const date = new Date(initDate);
  return `${date.toLocaleString('ru', { day: 'numeric', month: 'long' })}, ${date.getFullYear()}`;
}

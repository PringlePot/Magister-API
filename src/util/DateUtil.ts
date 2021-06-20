export function getMonday(date: Date) {
  date = new Date(date);
  const day = date.getDay(),
    diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
}
export function getSunday(date: Date) {
  const lastday = date.getDate() - (date.getDay() - 1) + 6;
  return new Date(date.setDate(lastday));
}

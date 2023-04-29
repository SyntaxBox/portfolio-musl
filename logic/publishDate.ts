import getMonthShortcut from "./getMonthShortcut";

export default function publishDate(time: EpochTimeStamp | Date): string {
  const date = new Date(time);
  const mo = getMonthShortcut(date.getMonth())
  const day = date.getDate();
  const year = date.getFullYear()
  return `${mo} ${day}, ${year}`
}
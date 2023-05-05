export default function getFirstString(home: string | string[] | undefined): string {
  let firstString: string;
  if (typeof home === "undefined") {
    firstString = "hello";
  } else if (Array.isArray(home) && home.length > 0) {
    firstString = home[0];
  } else if (typeof home === "string") {
    firstString = home;
  } else {
    firstString = "hello";
  }
  return firstString;
}
export function catchErrors(fn: any): Function {
  return function (...args: any[]) {
    return fn(...args).catch((err: any) => console.error(err));
  };
}
// 216699 milliseconds -> 3:36
export function formatDuration(ms: number) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

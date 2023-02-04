export function catchErrors(fn: any): Function {
  return function (...args: any[]) {
    return fn(...args).catch((err: any) => console.error(err));
  };
}

// @flow

export function getHelloWorld(): string {
  return 'hello world';
}

if (process.env.NODE_ENV !== 'test') {
  process.stdout.write(`${getHelloWorld()}\n`);
}

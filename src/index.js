// @flow

export function getHelloWorld(): string {
  return 'hello world';
}

process.stdout.write(`${getHelloWorld()}\n`);

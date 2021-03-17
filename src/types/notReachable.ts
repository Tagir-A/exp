export function notReachable(x: never): never {
  throw new Error(`Unexpected value: ${x}. Should have been never.`)
}

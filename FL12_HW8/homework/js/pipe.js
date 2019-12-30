function pipe(...args) {
  return args.slice(1).reduce((acc, fn) => {
    return fn(acc);
  }, args[0]);
}

function addOne(x) {
  return x + 1;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));

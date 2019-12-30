function getMin(...arr) {
  return arr.reduce((prev, current) => (prev < current ? prev : current));
}
console.log(getMin(3, 0, -3));

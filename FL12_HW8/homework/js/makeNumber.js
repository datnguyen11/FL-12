function makeNumber(val) {
  return val
    .split('')
    .filter(val => !isNaN(val))
    .join('');
}

console.log(makeNumber('123sadf123'));
console.log(makeNumber('sa921mas31as5i1'));
console.log(makeNumber('askdjnasjkdn'));

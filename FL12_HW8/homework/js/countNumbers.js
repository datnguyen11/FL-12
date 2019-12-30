function countNumbers(val) {
  return val
    .split('')
    .filter(val => !isNaN(val))
    .reduce((acc, previous) => {
      !acc[previous] ? (acc[previous] = 1) : (acc[previous] += 1);
      return acc;
    }, {});
}

console.log(countNumbers('1233111512923sadf123'));
console.log(countNumbers('sa921mas31as5i21'));
console.log(countNumbers('askdjnasjkdn'));

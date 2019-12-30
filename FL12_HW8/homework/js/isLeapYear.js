function isLeapYear(val) {
  const date = new Date(val);
  if (!isNaN(date)) {
    const year = date.getFullYear();
    return new Date(year, 1, 29).getMonth() === 1
      ? `${year} is a leap year`
      : `${year} is not a leap year`;
  } else {
    return 'Invalid date';
  }
}
console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));

const convert = function(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr[i] += '';
    } else {
      arr[i] = parseInt(arr[i]);
    }
  }
  return arr;
};

const executeforEach = function(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const mapArray = function(arr, cb) {
  const result = [];
  executeforEach(arr, function(item) {
    result.push(cb(item));
  });
  return result;
};

const filterArray = function(arr, cb) {
  const result = [];
  executeforEach(arr, function(item) {
    cb(item) ? result.push(item) : '';
  });
  return result;
};

const flipOver = function(str) {
  let flippedStr = '';
  for (let i = str.length; i > 0; i--) {
    flippedStr += str[i - 1];
  }
  return flippedStr;
};

const makeListFromRange = function(arr) {
  const rangeStart = arr[0];
  const rangeEnd = arr[1];
  const result = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    result.push(i);
  }
  return result;
};

const getArrayOfKeys = function(arr, key) {
  const result = [];
  executeforEach(arr, function(item) {
    result.push(item[key]);
  });
  return result;
};

const substitute = function(arr) {
  const minValue = 30;
  return mapArray(arr, function(el) {
    if (el < minValue) {
      el = '*';
    }
    return el;
  });
};

const getPastDay = function(givenDate, differ) {
  const newDate = new Date(givenDate);
  newDate.setDate(givenDate.getDate() - differ);
  return newDate.getDate();
};

const formatDate = function(date) {
  const numberTen = 10;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let hours = date.getHours();
  if (hours < numberTen) {
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < numberTen) {
    minutes = '0' + minutes;
  }
  return `${year}/${month + 1}/${day} ${hours}:${minutes}`;
};

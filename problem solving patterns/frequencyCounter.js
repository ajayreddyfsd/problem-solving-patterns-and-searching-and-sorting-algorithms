let x = function (arr) {
  obj = splitAndCount(arr);

  let maxValue = -Infinity;
  let maxValueKey = null;

  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxValueKey = key;
    }
  }

  return maxValueKey;
};

function splitAndCount(arr) {
  obj = {};

  for (let i of arr) {
    obj[i] = obj[i] + 1 || 1;
  }

  return obj;
}

console.log(x([1, 1, 1, 5, 5, 5]));

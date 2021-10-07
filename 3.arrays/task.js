function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every(i => arr1[i] === arr2[i]);
  return result; // boolean
};

function advancedFilter(arr) {
  let resultArr;
  arr1 = arr.filter(i => i > 0);
  arr2 = arr1.filter(i => i % 3 === 0);
  resultArr = arr2.map(i => i*10);
  return resultArr; // array
};

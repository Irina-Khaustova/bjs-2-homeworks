function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length) && (arr1.every((elem, i) => (arr1[i] === arr2[i])));
};

function advancedFilter(arr) {
  return arr.filter(i => i > 0).filter(i => i % 3 === 0).map(i => i*10);
};

// HOF map

Array.prototype.myMap = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i, this));
  }
  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const results = numbers.myMap((num) => num * 2);
console.log(results);

// HOF reduce

function customReduce(array, cb, initialValue) {
  let accumulator, startIndex;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = array[0];
  }
  if (initialValue !== undefined) {
    startIndex = 0; 
  } else {
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = cb(accumulator, array[i], i, array);
  }

  return accumulator;
}

// Example usage
const array = [1, 2, 3, 4, 5];

const sum = customReduce(
  array,
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

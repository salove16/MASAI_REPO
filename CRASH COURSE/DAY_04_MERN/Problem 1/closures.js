const createCounter = () => {
  let count = 0;

  const increment = () => {
    count++;
    return count;
  };

  return increment;
};

const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());

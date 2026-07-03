// 1. repeat(action, times)
const repeat = (action, times) => {
  for (let i = 0; i < times; i++) {
    action();
  }
};

console.log("1. repeat():");
repeat(() => console.log("Hello"), 3);

// 2. operate(arr, fn)
const operate = (arr, fn) => arr.map(fn);
console.log("2. operate():", operate([1, 2, 3], x => x * 2));

// 3. filterBy(arr, conditionFn)
const filterBy = (arr, conditionFn) => arr.filter(conditionFn);
console.log("3. filterBy():", filterBy([1, 2, 3, 4], x => x % 2 === 0));

// 4. logger(fn)
const logger = fn => (...args) => {
  console.log("before");
  const result = fn(...args);
  console.log("after");
  return result;
};

const add = (a, b) => a + b;
const loggedAdd = logger(add);
console.log("4. logger():", loggedAdd(2, 3));

// 5. createAdder(x)
const createAdder = x => y => x + y;
const addFive = createAdder(5);
console.log("5. createAdder():", addFive(10));

// 6. sortBy(arr, key)
const sortBy = (arr, key) =>
  [...arr].sort((a, b) =>
    a[key] > b[key] ? 1 : -1
  );

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 }
];
console.log("6. sortBy():", sortBy(people, "age"));

// 7. pipeline(...functions)
const pipeline = (...fns) => value =>
  fns.reduce((acc, fn) => fn(acc), value);

const result = pipeline(
  x => x + 2,
  x => x * 3,
  x => x - 1
)(5);

console.log("7. pipeline():", result);

// 8. withTax(taxRate)
const withTax = taxRate => price =>
  price + price * taxRate;

const addTax = withTax(0.18);
console.log("8. withTax():", addTax(100));

// 9. debounce(fn, delay)
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const debouncedLog = debounce(msg => console.log(msg), 500);
console.log("9. debounce(): (wait 500ms)");
debouncedLog("Debounced message");

// 10. memoize(fn)
const memoize = fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("From cache");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const slowAdd = (a, b) => a + b;
const memoizedAdd = memoize(slowAdd);

console.log("10. memoize():", memoizedAdd(2, 3));
console.log("10. memoize():", memoizedAdd(2, 3)); // cached

let numbers = [];
for (let i = 0; i <= 100000; i++) {
  numbers[i] = i;
}
function reverseArray(a) {
  const reverseArray = [];
  for (let i = 0; i < a.length; i++) {
    reverseArray[a.length - (i + 1)] = a[i];
  }

  return reverseArray;
}

// const r = reverseArray(numbers);
// console.log(r);

// second attempt
function reverseArray2(a) {
  const reverseArray = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reverseArray.push(a[i]);
  }

  return reverseArray;
}

// const r = reverseArray2(numbers);
// console.log(r);

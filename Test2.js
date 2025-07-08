function sumOfTopTwo(arr) {
  if (!arr || arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
  }
  return first + second;
}

const testCases = [
  {
    input: [1, 4, 2, 3, 5],
    expected: 9,
    description: "Basic case: [1, 4, 2, 3, 5]"
  },
  {
    input: [10, 20],
    expected: 30,
    description: "Two elements: [10, 20]"
  },
  {
    input: [5, 5, 5, 5],
    expected: 10,
    description: "All elements same: [5, 5, 5, 5]"
  },
  {
    input: [-1, -5, -2, -10],
    expected: -3,
    description: "All negative: [-1, -5, -2, -10]"
  },
  {
    input: [100, 50, 25, 75, 90],
    expected: 190,
    description: "Larger numbers: [100, 50, 25, 75, 90]"
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expected: 19,
    description: "Sequential numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
  },
  {
    input: [0, 0, 1, 1],
    expected: 2,
    description: "With zeros: [0, 0, 1, 1]"
  }
];

function runTests() {
  console.log('Testing sumOfTopTwo function:');

  let passed = 0;
  let failed = 0;


  testCases.forEach((testCase, index) => {
    try {
      const result = sumOfTopTwo(testCase.input);

      if (result === testCase.expected) {
        console.log(`Test ${index + 1}: ${testCase.description}`);
        console.log(`Input: [${testCase.input.join(', ')}]`);
        console.log(`Expected: ${testCase.expected}, Got: ${result}`);
        passed++;
      } else {
        console.log(`Test ${index + 1}: ${testCase.description}`);
        console.log(`Input: [${testCase.input.join(', ')}]`);
        console.log(`Expected: ${testCase.expected}, Got: ${result}`);
        failed++;
      }
    } catch (error) {
      console.log(`Test ${index + 1}: ${testCase.description}`);
      console.log(`Error: ${error.message}`);
      failed++;
    }
    console.log();
  })
}

runTests();
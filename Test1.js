function mostFrequencyStringLength(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  const lengthCount = {};
  arr.forEach(str => {
    const len = str.length;
    lengthCount[len] = (lengthCount[len] || 0) + 1;
  })
  const maxCount = Math.max(...Object.values(lengthCount));

  const mostFrequencyLength = Object.keys(lengthCount)
    .filter(len => lengthCount[len] === maxCount)
    .map(len => parseInt(len));

  return arr.filter(str => mostFrequencyLength.includes(str.length));
}

console.log("=== Test Cases ===");
console.log("Test 1:");
const test1 = [];
console.log("Input:", test1)
console.log("Output:", mostFrequencyStringLength(test1));

// Test 1: Original example
console.log("Test 2:");
const test2 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
console.log("Input:", test2);
console.log("Output:", mostFrequencyStringLength(test2));

console.log("Test 3:");
const test3 = ['a', 'bb', 'ccc', 'd', 'ee', 'fff'];
console.log("Input:", test3);
console.log("Output:", mostFrequencyStringLength(test3));

console.log("Test 4:");
const test4 = ['x', 'hello', 'world', 'a', 'javascript', 'code', 'fun'];
console.log("Input:", test4);
console.log("Output:", mostFrequencyStringLength(test4));

function runTests() {
  console.log("=== Unit Tests ===");

  const tests = [
    {
      name: "Original example",
      input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
      expected: ['ab', 'cd', 'gh']
    },
    {
      name: "Empty array",
      input: [],
      expected: []
    },
    {
      name: "Single string",
      input: ['test'],
      expected: ['test']
    },
    {
      name: "All same length",
      input: ['cat', 'dog', 'fox'],
      expected: ['cat', 'dog', 'fox']
    },
    {
      name: "Multiple frequent lengths",
      input: ['a', 'b', 'xx', 'yy'],
      expected: ['a', 'b', 'xx', 'yy']
    }
  ];

  let passed = 0;
  let total = tests.length;

  tests.forEach(test => {
    const result = mostFrequencyStringLength(test.input);
    const success = JSON.stringify(result.sort()) === JSON.stringify(test.expected.sort());

    console.log(`${test.name}: ${success ? 'PASS' : 'FAIL'}`);
    if (!success) {
      console.log(`  Expected: ${JSON.stringify(test.expected)}`);
      console.log(`  Got: ${JSON.stringify(result)}`);
    }

    if (success) passed++;
  });

  console.log(`\nResults: ${passed}/${total} tests passed`);
}

// Run the unit tests
runTests();
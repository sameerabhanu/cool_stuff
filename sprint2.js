const program = [
  "START", 3, 9, 0, 0, 0, 0, 100, 50, 1, 7, 8, 3, 2, 7, 8, 4, 4, 7, 8, 24, 0, 25, 5, 7, 3, 6, 5, 7, 8, 31, 9,
];

let currentIndex = 1;

const put = (value, index) => {
  program[index] = value;
  return 3;
}

const add = (index1, index2, resultIndex) => {
  program[resultIndex] = program[index1] + program[index2];
  return 4;
}

const sub = (index1, index2, resultIndex) => {
  program[resultIndex] = program[index1] - program[index2];
  return 4;
}

const mul = (index1, index2, resultIndex) => {
  program[resultIndex] = program[index1] * program[index2];
  return 4;
}

const div = (index1, index2, resultIndex) => {
  program[resultIndex] = program[index1] / program[index2];
  return 4;
}

const copy = (index1, index2) => {
  program[index2] = program[index1];
  return 3;
}

const less = (index1, index2, resultIndex) => {
  return program[index1] < program[index2] ? resultIndex - currentIndex : 4;
}

const equal = (index1, index2, resultIndex) => {
  return program[index1] === program[index2] ? resultIndex - currentIndex : 4;
}

const jump = (targetIndex) => targetIndex - currentIndex;

const operations = {
  0: put,
  1: add,
  2: sub,
  3: jump,
  4: equal,
  5: less,
  6: mul,
  7: copy,
  8: div,
};

while (program[currentIndex] !== 9) {
  const [operation, index1, index2, index3] = program.slice(
    currentIndex,
    currentIndex + 4
  );

  const offset = operations[operation](index1, index2, index3);
  currentIndex += offset;
}

const result =
  "START 3 9 150 50 25 150 100 50 1 7 8 3 2 7 8 4 4 7 8 24 0 25 5 7 3 6 5 7 8 31 9";

console.log(program.join(" ") === result);

const add = (operand1, operand2) => operand1 + operand2;
const sub = (operand1, operand2) => operand1 - operand2;
const isEqual = (operand1, operand2) => operand1 === operand2;
const isLessThan = (operand1, operand2) => operand1 < operand2;

const fetchArgs = (index, sprintCode) => {
  const [index1, index2, indexToPut] = sprintCode.slice(
    index + 1,
    index + 4
  );
  const operand1 = sprintCode.at(index1);
  const operand2 = sprintCode.at(index2);

  return [operand1, operand2, indexToPut];
};

const executePutOrCopy = (currentIndex, value, sprintCode) => {
  const indexToPut = sprintCode.at(currentIndex + 2);
  sprintCode[indexToPut] = value;

  return currentIndex + 3;
};

const executeAddOrSub = (currentIndex, operation, sprintCode) => {
  const [operand1, operand2, indexToPut] = fetchArgs(
    currentIndex,
    sprintCode
  );
  sprintCode[indexToPut] = operation(operand1, operand2);

  return currentIndex + 4;
};

const executeJumpIfEqualOrLessThan = (
  currentIndex,
  operation,
  sprintCode
) => {
  const [operand1, operand2, indexToJump] = fetchArgs(
    currentIndex,
    sprintCode
  );

  return operation(operand1, operand2) ? indexToJump : currentIndex + 4;
};

const executeJump = (currentIndex, sprintCode) =>
  sprintCode.at(currentIndex + 1);

const executePut = (currentIndex, sprintCode) => {
  const valueToCopy = sprintCode.at(currentIndex + 1);

  return executePutOrCopy(currentIndex, valueToCopy, sprintCode);
};

const executeCopy = (currentIndex, sprintCode) => {
  const indexToCopy = sprintCode.at(currentIndex + 1);
  const valueToCopy = sprintCode.at(indexToCopy);

  return executePutOrCopy(currentIndex, valueToCopy, sprintCode);
};

const executeAdd = (currentIndex, sprintCode) =>
  executeAddOrSub(currentIndex, add, sprintCode);

const executeSub = (currentIndex, sprintCode) =>
  executeAddOrSub(currentIndex, sub, sprintCode);

const executeJumpIfEqual = (currentIndex, sprintCode) =>
  executeJumpIfEqualOrLessThan(currentIndex, isEqual, sprintCode);

const executeJumpIfLessThan = (currentIndex, sprintCode) =>
  executeJumpIfEqualOrLessThan(currentIndex, isLessThan, sprintCode);

const errorMessage = (currentIndex, sprintCode) => {
  const errorIndex = "Index : " + currentIndex + " , Instruction : ";
  const errorInstruction = sprintCode.at(currentIndex);
  const message = " -> NO SUCH INSTRUCTION";

  return errorIndex + errorInstruction + message;
};

const executesprintCode = function (sprintCode) {
  let currentIndex = 1;
  const sprintFunctions = {
    3: executeJump,
    0: executePut,
    7: executeCopy,
    1: executeAdd,
    2: executeSub,
    4: executeJumpIfEqual,
    5: executeJumpIfLessThan,
  };

  while (sprintCode.at(currentIndex) !== 9) {
    const command = sprintCode.at(currentIndex);

    if (!(command in sprintFunctions)) {
      return errorMessage(currentIndex, sprintCode);
    }

    currentIndex = sprintFunctions[command](currentIndex, sprintCode);
  }

  sprintCode[0] = "After execution  : ";
  return sprintCode.join(" ");
};

const run = () => {
  const sprintCode = prompt("Enter Sprint Code: ")
    .split(" ")
    .map((num) => +num);

  sprintCode.unshift("Before execution : ");
  console.log(sprintCode.join(" "));

  return executesprintCode(sprintCode);
};

console.log(run());

//3 10 0 0 0 0 0 0 0 0 one 1 4 11 10 27 1 11 1 12 1 11 1 11 3 10 2 10 17 31 0

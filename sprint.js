const add = (operand1, operand2) => operand1 + operand2;
const sub = (operand1, operand2) => operand1 - operand2;
const isEqual = (operand1, operand2) => operand1 === operand2;
const isLessThan = (operand1, operand2) => operand1 < operand2;
const haltExecution = (sprintCode, index) => sprintCode.at(index) === 9;
const exceededMaxInstructions = (insCount, threshold) => insCount > threshold;

const fetchArgs = (index, sprintCode) => {
  const [index1, index2, indexToPut] = sprintCode.slice(index + 1, index + 4);
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
  const [operand1, operand2, indexToPut] = fetchArgs(currentIndex, sprintCode);
  sprintCode[indexToPut] = operation(operand1, operand2);

  return currentIndex + 4;
};

const executeJumpIfEqualOrLessThan = (currentIndex, predicate, sprintCode) => {
  const [operand1, operand2, indexToJump] = fetchArgs(currentIndex, sprintCode);

  return predicate(operand1, operand2) ? indexToJump : currentIndex + 4;
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

const infiniteErrorMessage = () => "           ERROR :  Infinite Loop   ";

const errorMessage = (currentIndex, sprintCode) => {
  const errorIndex = "Index : " + currentIndex + " , Instruction : ";
  const errorInstruction = sprintCode.at(currentIndex);
  const errorMsg = " -> NO SUCH INSTRUCTION";

  return "           ERROR :  " + errorIndex + errorInstruction + errorMsg;
};

const getSprintInstructions = () =>
  prompt("Enter Sprint Code: ")
    .split(" ")
    .map((num) => +num);
    
const isInputInvalid = (sprintCode) => {
  return sprintCode.some(isNaN);
};

const executesprintCode = function (sprintCode) {
  let currentIndex = 1;
  let instructionCount = 0;
  const sprintFunctions = {
    3: executeJump,
    0: executePut,
    7: executeCopy,
    1: executeAdd,
    2: executeSub,
    4: executeJumpIfEqual,
    5: executeJumpIfLessThan,
  };

  while (!haltExecution(sprintCode, currentIndex)) {
    if (exceededMaxInstructions(instructionCount, 1000)) {
      return infiniteErrorMessage();
    }

    const command = sprintCode.at(currentIndex);

    if (!(command in sprintFunctions)) {
      return errorMessage(currentIndex, sprintCode);
    }

    currentIndex = sprintFunctions[command](currentIndex, sprintCode);
    instructionCount++;
  }

  sprintCode[0] = "After execution  : ";
  return sprintCode.join(" ");
};

const run = () => {
  const sprintCode = getSprintInstructions();

  if (isInputInvalid(sprintCode)) {
    return "Enter Valid Sprint Code";
  }

  sprintCode.unshift("Before execution : ");
  console.log(sprintCode.join(" "));

  return executesprintCode(sprintCode);
};

console.log(run());

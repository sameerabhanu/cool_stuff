1. 9 -> halt.
2. 3 -> [3, indexToMove] -> move to given index.
3. 0 -> [0, numberToPut, indexToPut] -> put the given number in given index.
4. 7 -> [7, indexToCopy, indexToPut] -> copy the value of given index and put in the given index.
5. 1 -> [1, addendIndex, augendIndex, indexToPut] -> add addend in given index to augend and put sum in given index and put in result index.
6. 2 -> [2, minuendIndex, subtrahendIndex, indexToPut] -> subtract subtrahend in givem index from minuend in given index and put the difference in result index.
7. 4 -> [4, number1Index, number2Index, indexToMove] -> if number1 and number2 in given indexes are equal move to index given, else next instruction.
8. 5 -> [5, number1Index, number2Index, indexToMove] -> if number1 is less than  number2 in given indexes move to index given, else next instruction.
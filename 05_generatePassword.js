console.clear();
const length = +prompt("please enter the length of password : ");

function generatePassword() {
  const passwordChars = 'abcdefghijklmnopqrstuvwxyz0123456789.,?{}+-*/';
  const password = createPassword('', passwordChars);

  return password;
}

function createPassword(password, passwordChars) {
  for (let passwordIndex = 0; passwordIndex <= length; passwordIndex++) {
    const randomIndex = Math.floor(Math.random() * passwordChars.length);
    password = password + passwordChars[randomIndex];
  } 

  return password;
}

console.log("Your Password is " + generatePassword());
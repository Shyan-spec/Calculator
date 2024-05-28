let num1;
let num2;
let currentOperation = null;

function getScreen() {
  return document.getElementById("screen").value;
}

function setScreen(value) {
  document.getElementById("screen").value = value;
}

function clears() {
  setScreen('0');
  document.getElementById("disable").disabled = false;
  num1 = undefined;
  num2 = undefined;
  currentOperation = null;
}

let decimal = ".";

function EnterNumber(number) {
  let screen = getScreen();
  if (screen === '0') {
    screen = '';
  }

  screen += number;
  setScreen(screen);

  if (screen.includes(decimal)) {
    document.getElementById("disable").disabled = true;
  }

  return screen;
}

function negOrPos() {
  setScreen(getScreen() * -1);
}

function getNum2() {
  num2 = parseFloat(getScreen());

  return num2
}

function Add() {
  if (currentOperation) {
    equal();
  }
  num1 = parseFloat(getScreen());
  setScreen('');
  document.getElementById("disable").disabled = false;
  currentOperation = 'add';
}

function Subtract() {
  if (currentOperation) {
    equal();
  }
  num1 = parseFloat(getScreen());
  setScreen('');
  document.getElementById("disable").disabled = false;
  currentOperation = 'subtract';
}

function Divide() {
  if (currentOperation) {
    equal();
  }
  num1 = parseFloat(getScreen());
  setScreen('');
  document.getElementById("disable").disabled = false;
  currentOperation = 'divide';
}

function Multiply() {
  if (currentOperation) {
    equal();
  }
  num1 = parseFloat(getScreen());
  setScreen('');
  document.getElementById("disable").disabled = false;
  currentOperation = 'multiply';
}

function equal() {
  if (!currentOperation) {
    return;
  }

  getNum2();

  let result;
  switch (currentOperation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'divide':
      if (num2 === 0) {
        result = 'Error';
      } else {
        result = num1 / num2;
      }
      break;
    case 'multiply':
      result = num1 * num2;
      break;
  }

  setScreen(result);
  num1 = result;
  num2 = undefined;
  currentOperation = null;
}

module.exports = { EnterNumber, getNum2, Add, Multiply, Divide, Subtract, equal, clears, negOrPos, setScreen, getScreen };

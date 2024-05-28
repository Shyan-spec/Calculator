// calculator.test.js
const { clears, EnterNumber, Add, Multiply, Divide, Subtract, equal, setScreen, getScreen, negOrPos, getNum2 } = require('../script');

beforeEach(() => {
  // Set up the DOM elements required for the tests
  document.body.innerHTML = `
    <input id="screen" type="text" value="0">
    <button id="disable"></button>
  `;
  clears();
});

describe('Testing our Add Function', () => {
  test('add 3 + 2 to equal 5', () => {
    setScreen('3');
    Add();
    EnterNumber(2);
    equal();
    const result = parseFloat(getScreen());
    const expected = 5;
    expect(result).toBe(expected);
  });
});

describe('Testing our Subtract Function', () => {
  test('subtract 5 - 2 to equal 3', () => {
    setScreen('5');
    Subtract();
    EnterNumber(2);
    equal();
    const result = parseFloat(getScreen());
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe('Testing our Multiply Function', () => {
  test('multiply 4 * 2 to equal 8', () => {
    setScreen('4');
    Multiply();
    EnterNumber(2);
    equal();
    const result = parseFloat(getScreen());
    const expected = 8;
    expect(result).toBe(expected);
  });
});

describe('Testing our Divide Function', () => {
  test('divide 6 / 2 to equal 3', () => {
    setScreen('6');
    Divide();
    EnterNumber(2);
    equal();
    const result = parseFloat(getScreen());
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe('Testing division by zero', () => {
  test('divide 6 / 0 to equal Error', () => {
    setScreen('6');
    Divide();
    EnterNumber(0);
    equal();
    const result = getScreen();
    const expected = 'Error';
    expect(result).toBe(expected);
  });
});

describe('Testing negOrPos Button', () => {
    test('Number should turn into a negative once clicked', () => {
        setScreen('2')
        negOrPos(getScreen())
        const result = parseFloat(getScreen());
        const expected = -2

        expect(result).toBe(expected);
    })
})


describe('Testing the clear feature', () => {
    
    beforeEach(() => {
        // Set up the DOM elements required for the tests
        document.body.innerHTML = `
          <input id="screen" type="text" value="0">
          <button id="disable"></button>
        `;
        setScreen('6');
        Divide();
        EnterNumber(3);
        
      });
        test('The clear button should clear the screen and variables', () => {
        
        clears()
        const result = parseFloat(getScreen())
        const expected = '' || 0
        expect(result).toBe(expected);
        })
        
})
 
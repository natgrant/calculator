

$(function() {
  const operators = {
    "x" : "*",
    "÷" : "/",
    "+" : "+",
    "-" : "-",
  }

  // selectors
  const $display = $(".calculator__display");
  const $equalsKey = $(".key--equal");
  const $expressionInputs = $(".key--operand, .key--operator");

  var functionExpression = [];
  var lastInput = null;

  // clear input/output with AC button
  $(".clear").click(() => {
    reset(true);
  });

  $expressionInputs.click((event) => {
    let currentInput = $(event.target).text();
    
    // if the current input is an operator
    if(Object.keys(operators).includes(currentInput)) {
      currentInput = operators[currentInput];

      if(lastInput === "operator") {
        if(functionExpression[functionExpression.length -1] === currentInput) {
          // error condition - 2 different operators have been pressed sequentially
          // reset the functionExpression, display an error
          return;
        }
        else {
          updateDisplay("invalid input");
          reset(false);
          return;
        }
      }
      lastInput = "operator";
    }
    else {
      lastInput = "operand";
    }

    console.log(`clicking button! ${currentInput}`);
    
    functionExpression.push(currentInput);
    let displayValue = functionExpression.join("");

    updateDisplay(displayValue);
  })

  $equalsKey.click((event) => {
    if(functionExpression.length === 0) { return; }

    let resultString = functionExpression.join("");
    console.log(`resultString => ${resultString}`);

    let functionExpressionResult = math.eval(resultString);
    console.log(`the result is: ${functionExpressionResult}`);

    updateDisplay(functionExpressionResult);
    reset(false);
  });

  updateDisplay = (value) => {
    console.log(`updating display with ${value}`);
    $display.text(value);
  }

  reset = (clearScreenText) => {
    if(clearScreenText) {
      $display.text("0");
      console.log(`display cleared, last functionExpression: ${functionExpression}`);
    }
    lastInput = null;
    functionExpression = [];
  }
});

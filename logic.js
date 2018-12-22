

$(function() {
  var functionExpression = [];
  
  const operators = {
    "x" : "*",
    "÷" : "/",
    "+" : "+",
    "-" : "-",
  }


  var lastInput = null;

  // clear input/output with AC button
  $(".clear").click(function() {
    reset(true);
  });

  $(".key--operand, .key--operator").click((event) => {
    let currentInput = $(event.target).text();

    // TODO: perform operator mapping using 'operators' object
    // if(value === "x") { value = "*"; };
    // if(value === "÷") { value = "/"; };

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
    let displayNum = functionExpression.join("");
    updateDisplay(displayNum);
    
  })

  // duplicate values not allowed

  $(".key--equal").click((event) => {
    if(functionExpression.length === 0) {
      // do nothing
    }
    
    else {
      let resultString = functionExpression.join("");
      console.log(`resultString => ${resultString}`);

      let functionExpressionResult = math.eval(resultString);
      console.log(`the result is: ${functionExpressionResult}`);
 
      updateDisplay(functionExpressionResult);
      reset(false);
    }
  });

  function updateDisplay(value) {
    console.log(`updating display with ${value}`);
    $(".calculator__display").text(value);
  }

  function reset(clearScreenText) {
    if(clearScreenText) {
      $(".calculator__display").text( "0" );
      console.log(`display cleared, last functionExpression: ${functionExpression}`);
    }
    lastInput = null;
    functionExpression = [];
  }
   
});



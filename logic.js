

$(function() {

  var expression = [];

  // clear input/output with AC button
  $(".clear").click(function() {
    $(".calculator__display").text( "!" );
    console.log(`display cleared ${expression}`);
    expression = [];
  });

  // decimal should append to current display 
  // two . in one number should not be possible


  $(".key--operand, .key--operator").click((event) => {
    let value = $(event.target).text();
    if(value === "x") { value = "*"; }
    if(value === "÷") { value = "/"; }     
    console.log(`clicking button! ${value}`);
    expression.push(value);
    updateDisplay(value);
  })

  $(".key--equal").click((event) => {
    if(expression.length === 0) {
      // do nothing
    }
    
    else {
      let resultString = expression.join(" ");
      console.log(`resultString => ${resultString}`);

      let expressionResult = math.eval(resultString);
      console.log(`the result is: ${expressionResult}`);

      updateDisplay(expressionResult);
      expression = [];
    }
  });

  function updateDisplay(value) {
    console.log(`updating display with ${value}`);
    $(".calculator__display").text(value);
  }
});



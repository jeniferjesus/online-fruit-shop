let currentResult = '';

function ToResult(value) {
  currentResult += value;
  document.getElementById('result').value = currentResult;
}

function calculateResult() {
    const result = eval(currentResult);
        document.getElementById('result').value = result;
        currentResult = result;
        // document.getElementById('result').style.padding="20px";
  
}

function clearResult() {
  currentResult = '';
  document.getElementById('result').value = '';
  
}
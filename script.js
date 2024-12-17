function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const resultField = document.getElementById('result');
    resultField.value = eval(resultField.value);
  } catch (error) {
    alert('Invalid calculation');
  }
}

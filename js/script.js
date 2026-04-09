function init() {
  const alertButton = document.getElementById('entrybutton');
  const textInput = document.getElementById('entryinput');
  const h2Element = document.getElementById('textoutput');

  alertButton.addEventListener('click', function() {
    const inputValue = textInput.value;
    alert('Adam Jaramillo: ' + inputValue);
    h2Element.textContent = inputValue;
  });
}

window.addEventListener('load', init);
function init() {
  const alertButton = document.getElementById('entrybutton');
  const textInput = document.getElementById('entryinput');
  const h2Element = document.getElementById('textoutput');

  alertButton.addEventListener('click', function() {
    const inputValue = textInput.value;
    if(!inputValue){
      alert('Adam Jaramillo: There was no inputted value');
      h2Element.textContent = "No value was inputted"
      return;
    }

    alert('Adam Jaramillo: ' + inputValue);
    h2Element.textContent = inputValue;
  });
}

window.addEventListener('load', init);
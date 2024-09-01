const button = document.getElementById('toggleButton');
const textInput = document.getElementById('textInput');

function showInput() {
    button.style.display = 'none';
    textInput.style.display = 'block';
    textInput.focus();
}

function updateButtonAndHideInput() {
    const inputValue = textInput.value.trim();
    if (inputValue !== '') {
        button.textContent = inputValue;
        button.style.display = 'block';
        textInput.style.display = 'none';
    }
}

button.addEventListener('click', showInput);

textInput.addEventListener('blur', function() {
    updateButtonAndHideInput();
});

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        updateButtonAndHideInput();
    }
});

textInput.addEventListener('click', function(event) {
    event.stopPropagation();
});

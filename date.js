const button = document.getElementById('toggleDateInput');
const dateInput = document.getElementById('dateInput');

button.addEventListener('click', function() {
    if (dateInput.style.display === 'block') {
        dateInput.style.display = 'none';
        dateInput.blur();
    } else {
        dateInput.style.display = 'block';
        dateInput.focus();
    }
});

document.addEventListener('click', function(event) {
    if (!document.querySelector('.date-container').contains(event.target)) {
        dateInput.style.display = 'none';
        dateInput.blur();
    }
});

dateInput.addEventListener('change', function() {
    const selectedDate = new Date(dateInput.value);
    const formattedDate = selectedDate.toLocaleDateString();
    button.textContent = formattedDate;
    dateInput.style.display = 'none';
});

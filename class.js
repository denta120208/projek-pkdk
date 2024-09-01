document.getElementById('toggleSelect').addEventListener('click', function() {
    var selectElement = document.getElementById('classSelect');
    if (selectElement.style.display === 'block') {
        selectElement.style.display = 'none';
    } else {
        selectElement.style.display = 'block';
    }
});

document.getElementById('classSelect').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    document.getElementById('toggleSelect').textContent = selectedOption.text;
    this.style.display = 'none';
});

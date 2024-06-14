document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('#grades-table td.editable');
    const headers = document.querySelectorAll('#grades-table th.editable');
    const editableElements = document.querySelectorAll('.info-block .editable');
    
    // Function to create editable input and handle blur event
    function makeEditable(element) {
        const currentValue = element.innerText.trim();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;

        input.addEventListener('blur', () => {
            element.innerText = input.value;
        });

        element.innerText = '';
        element.appendChild(input);
        input.focus();
    }

    // Add click event listener for table cells
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            makeEditable(this);
        });
    });

    // Add click event listener for table headers
    headers.forEach(header => {
        header.addEventListener('click', function() {
            makeEditable(this);
        });
    });

    // Add click event listener for editable elements in .info-block
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            makeEditable(this);
        });
    });

    // Add click event listener for .user-info h3
    const userInfoH3 = document.querySelector('.user-info h3');
    userInfoH3.addEventListener('click', function() {
        makeEditable(this);
    });

    // Add click event listener for .natija spans
    const natijaSpans = document.querySelectorAll('.natija span');
    natijaSpans.forEach(span => {
        span.addEventListener('click', function() {
            makeEditable(this.parentElement);
        });
    });

    // Handle the terms of service agreement
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const proceedLink = document.getElementById('proceedLink');

    agreeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            proceedLink.classList.remove('disabled');
            proceedLink.href = 'https://www.example.com'; // Replace with your website URL
        } else {
            proceedLink.classList.add('disabled');
            proceedLink.removeAttribute('href');
        }
    });
});

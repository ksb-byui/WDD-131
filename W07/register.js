import { participantTemplate, successTemplate } from './template.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', () => {
        participantCount++;
        const participantHTML = participantTemplate(participantCount);
        const participantsFieldset = document.querySelector('.participants');
        addButton.insertAdjacentHTML('beforebegin', participantHTML);
    });

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, element) => {
            return total + (parseFloat(element.value) || 0);
        }, 0);
    }

    function submitForm(event) {
        event.preventDefault();

        // Calculate total fees
        const total = totalFees();

        // Get the adult name
        const adultName = document.getElementById('adult_name').value;

        // Hide the form
        form.classList.add('hide');

        // Show the summary
        const summary = document.getElementById('summary');
        summary.innerHTML = successTemplate({ name: adultName, participants: participantCount, fees: total });
        summary.classList.remove('hide');
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
});

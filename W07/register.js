import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.getElementById('add').addEventListener('click', () => {
  participantCount++;
  const participantHTML = participantTemplate(participantCount);
  document.querySelector('.participants').insertAdjacentHTML('beforeend', participantHTML);
});

document.querySelector('form').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const totalFees = calculateTotalFees();
  const adultName = document.getElementById('adult_name').value;
  const summaryMessage = successTemplate({
    name: adultName,
    participantCount: participantCount,
    totalFees: totalFees
  });

  document.querySelector('form').style.display = 'none';
  document.getElementById('summary').innerHTML = summaryMessage;
}

function calculateTotalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((total, element) => total + Number(element.value || 0), 0);
}

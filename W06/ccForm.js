// ccForm.js
document.querySelector('.credit-card-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form inputs
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryMonth = document.getElementById('expiry-month').value;
    const expiryYear = document.getElementById('expiry-year').value;
    const cvc = document.getElementById('cvc').value;

    if (cardNumber && cardHolder && expiryMonth && expiryYear && cvc) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all required fields.');
    }
});

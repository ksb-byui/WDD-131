document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    function validateInput(input, regex, errorMsg) {
        const value = input.value.trim();
        if (!regex.test(value)) {
            input.setCustomValidity(errorMsg);
        } else {
            input.setCustomValidity("");
        }
        input.reportValidity();
    }

    nameInput.addEventListener("input", () => {
        validateInput(nameInput, /^[a-zA-Z\s]+$/, "Please enter a valid name.");
    });

    emailInput.addEventListener("input", () => {
        validateInput(emailInput, /^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Please enter a valid email.");
    });

    messageInput.addEventListener("input", () => {
        if (messageInput.value.trim() === "") {
            messageInput.setCustomValidity("Please enter a message.");
        } else {
            messageInput.setCustomValidity("");
        }
        messageInput.reportValidity();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});

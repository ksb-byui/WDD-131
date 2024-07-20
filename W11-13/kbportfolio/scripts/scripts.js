// scripts.js

// Dynamic Greetings
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.querySelector('#greeting');
    if (greetingElement) {
        const hours = new Date().getHours();
        let greeting;
        if (hours < 12) {
            greeting = 'Good Morning!';
        } else if (hours < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }
        greetingElement.textContent = greeting;
    }
});

// Filterable Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('input', function(event) {
            const target = event.target;
            if (target.name === 'name') {
                validateName(target);
            } else if (target.name === 'email') {
                validateEmail(target);
            } else if (target.name === 'message') {
                validateMessage(target);
            }
        });
        
        form.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }
});

function validateName(input) {
    if (input.value.trim() === '') {
        input.setCustomValidity('Name is required');
    } else {
        input.setCustomValidity('');
    }
}

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
        input.setCustomValidity('Invalid email address');
    } else {
        input.setCustomValidity('');
    }
}

function validateMessage(input) {
    if (input.value.trim() === '') {
        input.setCustomValidity('Message is required');
    } else {
        input.setCustomValidity('');
    }
}

function validateForm() {
    const form = document.getElementById('contact-form');
    return form.checkValidity();
}

// Filterable Project Gallery
document.addEventListener('DOMContentLoaded', function() {
    const filterDropdown = document.getElementById('filter-projects');
    if (filterDropdown) {
        filterDropdown.addEventListener('change', function() {
            const selectedCategory = filterDropdown.value;
            filterProjects(selectedCategory);
        });
    }
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.column');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

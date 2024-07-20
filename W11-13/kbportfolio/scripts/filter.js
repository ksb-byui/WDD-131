// DOM Elements
const filterSelect = document.getElementById('filter');
const projects = document.querySelectorAll('.column');

// Event Listener
filterSelect.addEventListener('change', filterProjects);

// Functions
function filterProjects() {
    const selectedCategory = filterSelect.value;

    projects.forEach(project => {
        if (selectedCategory === 'All' || project.dataset.category.includes(selectedCategory)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

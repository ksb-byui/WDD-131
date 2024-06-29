import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeDisplay = document.getElementById('recipe-display');
    const recipe = recipes[0]; // Load the first recipe for now

    const recipeHTML = `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <div class="tags">${recipe.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                <h2>${recipe.name}</h2>
                <p class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(recipe.rating)}
                    ${'<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(5 - recipe.rating)}
                </p>
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
    recipeDisplay.innerHTML = recipeHTML;
});

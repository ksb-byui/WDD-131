document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        {
            id: 1,
            title: 'Septimus Heap Book One: Magyk',
            date: 'July 5, 2022',
            description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
            imgAlt: 'Book cover for Septimus Heap 1',
            ages: '10-14',
            genre: 'Fantasy',
            stars: '****'
        },
        {
            id: 2,
            title: 'Magnus Chase Book One: Sword of Summer',
            date: 'December 12, 2021',
            description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
            imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
            imgAlt: 'Book cover for Magnus Chase 1',
            ages: '12-16',
            genre: 'Fantasy',
            stars: '⭐⭐⭐⭐'
        }
    ];

    const bookList = document.getElementById('book-list');

    articles.forEach(article => {
        // Create elements for each book entry
        const bookInfo = document.createElement('section');
        bookInfo.classList.add('book-info');

        const bookDetails = document.createElement('section');
        bookDetails.classList.add('book-details');

        bookInfo.innerHTML = `
            <h2>Release Date</h2>
            <p>${article.date}</p>
            <h2>Recommended Age</h2>
            <p>${article.ages}</p>
            <h2>Genre</h2>
            <p>${article.genre}</p>
            <h2>Rating</h2>
            <p>${article.stars}</p>
        `;

        bookDetails.innerHTML = `
            <h2 class="book-title">${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover">
            <p class="book-description">${article.description}</p>
        `;

        // Append book entries to the main book-list
        bookList.appendChild(bookInfo);
        bookList.appendChild(bookDetails);
    });
});

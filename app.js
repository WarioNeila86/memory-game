document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        }
    ];


    const grid = document.querySelector('.grid');
    const cardsChosen = [];
    const cardsChosenIds = [];

    // Create the board
    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', index);
            // card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();
});
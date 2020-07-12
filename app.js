document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
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
        }
    ];

    // Shuffle cards array
    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const scoreDisplay = document.querySelector('#score');
    let cardsChosen = [];
    let cardsChosenIds = [];
    const cardsFound = [];

    // Create the board
    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', index);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsFound.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again :(');
        }
        cardsChosen = [];
        cardsChosenIds = [];
        scoreDisplay.textContent = cardsFound.length;
        if (cardsFound.length === cardArray.length/2) {
            scoreDisplay.textContent = 'Congratulations!! You found them all!';
            const linkToRestart = document.createElement('p');
            linkToRestart.innerHTML = '<a href="">Restart game</a>';
            document.body.appendChild(linkToRestart);
        }
    }

    // Flip your card
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }


    createBoard();
});
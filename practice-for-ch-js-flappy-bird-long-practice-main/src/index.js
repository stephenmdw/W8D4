import FlappyBird from './game';


document.addEventListener('DOMContentLoaded', () => { 
    const canvas = document.getElementById('bird-game');
    let newGame = new FlappyBird(canvas);
    // newGame.restart();
    // newGame.play();
})


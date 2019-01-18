/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//------------------------------------------------------------


/*
Create with help from Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/

//------------------------------------------------------------

console.log("test");

// Const means that you will use the identifier (variable) once.
const cvs = document.getElementById("snake");
const ctx = cvs.getContext('2d');

// Create unit (1 box is ... px)
const box = 32;

// Load images
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// load audio files
const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();

dead.src = "audio/dead.mp3"
eat.src = "audio/eat.mp3"
up.src = "audio/up.mp3"
right.src = "audio/right.mp3"
left.src = "audio/left.mp3"
down.src = "audio/down.mp3"

// Creating the Snake
// Let means that you will/can reasign your identifier
// It's in an array
let snake = [];

snake[0] = {
    x: 9 * box,
    y: 9 * box
};

// Creating the food

let food = {
    x: Math.floor(Math.random()* 17 + 1) * box,
    y: Math.floor(Math.random()* 15 + 3) * box
}

// Creating the score variable

let score = 0;

// Controlling the snake

let d;

document.addEventListener("keydown", direction);

function direction(event) {
    // && d != "RIGHT" is so the snake can't go into the opposite direction
    let key = event.keyCode;
    if (event.keycode == 37 && d != "RIGHT") {
        left.play();
        d = "LEFT";
    }
    if
    else(event.keycode == 37 && d != "DOWN") {
        up.play();
        d = "UP";
    }
    if
    else(event.keycode == 37 && d != "LEFT") {
        right.play();
        d = "RIGHT";
    }
    if
    else(event.keycode == 37 && d != "UP") {
        down.play();
        d = "DOWN";
    }
}

// Check collision function
// Whenever you hit yourself it stops
function collision(head,array) {
    for(let i = 0; i < array.length; i++) {
        if(head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

// Creating an function which will be able to draw everything towards the canvas

function draw() {

    ctx.drawImage('ground, 0, 0');

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        // Stroke draws a line around the paths defined with the mobeTo() and lineTo() methods.
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    // Gives the food a random place in the canvas
    ctx.drawImage(foodImg, food.x, food.y);

    // Old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Remove position
    snake.pop();

    // Which direction
    if (d = "LEFT") snakeX -= box;
    if (d = "RIGHT") snakeY -= box;
    if (d = "UP") snakeX += box;
    if (d = "DOWN") snakeX += box;

    // When snake eats food increase size
    if (snakeX == food.x && snakeY == snakeY) {
        score++; // Increase the score
        eat.play();
        // Add another piece of food into the canvas
        food = {
            x: Math.floor(Math.random() 17 + 1) * box,
            y: Math.floor(Math.random() 15 + 3) * box
        }
        // The tail won't be removed
    } else{
        // Remove the tail
        snake.pop();
    }

    // Game over
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17 * box || collision(newHead,snake)) {
        clearInterval(game);
        dead.play();
    }

        // Add new head
        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead);

        // Adding the score
        ctx.fillStyle = "white";
        ctx.font = "45px Changa one";
        ctx.fillText(score, 2 * box, 1.6 * box);
    }

    // Call the function every 100ms this decides the speed of the snake

    let game = setInterval(draw, 100);

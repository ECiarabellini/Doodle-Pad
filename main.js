const pad = document.querySelector("#pad");
let newSquare;

let squareSize = "medium";
let numSmallSquares = 1600;
let numMediumSquares = 256;
let numLargeSquares = 16;

let squareClass = "mediumSquares";
let numSquares = 256;
console.log("squareSize is: " + squareSize)
console.log("squareClass is: " + squareClass);
console.log("numSquares is " + numSquares);

if (squareSize === "small"){
    numSquares = numSmallSquares;
    squareClass = "smallSquares";
} else if (squareSize === "large"){
    numSquares === numLargeSquares;
    squareClass = "largeSquares";
} else {
    numSquares = numMediumSquares;
    squareClass = "mediumSquares";
};

console.log("squareSize is: " + squareSize)
console.log("squareClass is: " + squareClass);
console.log("numSquares is " + numSquares);


for (let n=0; n<numSquares; n++){
    newSquare = document.createElement('div');
    newSquare.classList.add(squareClass);
    pad.appendChild(newSquare);
};

let squares = document.querySelectorAll("."+squareClass);
squares.forEach((square) =>{
    square.addEventListener('mouseover', () => {
        square.setAttribute('style','background-color:#008080;')
    });
});

const mediumButton = document.querySelector('#medium');
mediumButton.setAttribute('style', 'background-color: darkmagenta;');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => console.log(button));
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => location.reload());



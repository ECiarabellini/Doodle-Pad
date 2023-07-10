const pad = document.querySelector("#pad");
let newSquare;

let squareSize = "medium";
let numSmallSquares = 1600;
let numMediumSquares = 256;
let numLargeSquares = 16;

let squareClass;
let numSquares;
console.log("squareClass is: "+squareClass);
console.log("numSquares is "+ squareClass);

if (squareSize = "small"){
    numSquares = numSmallSquares;
    squareClass = ".smallSquares";
} else if (squareSize = "medium"){
    numSquares = numMediumSquares;
    squareClass = ".mediumSquares";
} else {
    numSquares = numLargeSquares;
    squareClass = ".largeSquares";
};

console.log("squareClass is: "+squareClass);
console.log("numSquares is "+ numSquares);


for (let n=0; n<numSquares; n++){
    newSquare = document.createElement('div');
    newSquare.classList.add(squareClass);
    pad.appendChild(newSquare);
};

let squares = document.querySelectorAll(squareClass);
squares.forEach((square) =>{
    square.addEventListener('mouseover', () => {
        square.setAttribute('style','background-color:#008080;')
    });
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => console.log(button));
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => location.reload());



// number of squares --> 400px wide box
// 265 (16x16) --> 25px height and innerWidth
// .
// .
// ...


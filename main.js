const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => location.reload());

const buttonSmall = document.querySelector('#small');
const buttonMedium = document.querySelector('#medium');
const buttonLarge = document.querySelector('#large');
buttonMedium.setAttribute('style', 'background-color: darkmagenta;'); //default starting grid

const pad = document.querySelector("#pad");
let squareClass; 
let numSquares;


function createGrid(size){
    pad.replaceChildren();   //replace previous grid each time a size is selected
    if (size == "small"){
        numSquares = 1600;
        squareClass = "smallSquares";
        buttonSmall.setAttribute('style', 'background-color: darkmagenta;');
        buttonLarge.setAttribute('style', 'background-color: antiquewhite;');
        buttonMedium.setAttribute('style', 'background-color: antiquewhite;');
    } else if (size == "large"){
        numSquares = 16;
        squareClass = "largeSquares";
        buttonLarge.setAttribute('style', 'background-color: darkmagenta;');
        buttonSmall.setAttribute('style', 'background-color: antiquewhite;');
        buttonMedium.setAttribute('style', 'background-color: antiquewhite;');
    } else if (size == "medium"){
        numSquares = 256;
        squareClass = "mediumSquares";
        buttonMedium.setAttribute('style', 'background-color: darkmagenta;');
        buttonSmall.setAttribute('style', 'background-color: antiquewhite;');
        buttonLarge.setAttribute('style', 'background-color: antiquewhite;');
    };
    for (let n=0; n<numSquares; n++){
        let newSquare = document.createElement('div');
        newSquare.classList.add(squareClass);
        pad.appendChild(newSquare);
    };
    setDrawColor(squareClass);
};


function setDrawColor (squareClass) {
    let squares = document.querySelectorAll("."+squareClass); 
    squares.forEach((square) =>{
        square.addEventListener('mouseover', () => {
            square.setAttribute('style','background-color:#008080;')
        });
    });
};


createGrid("medium");  //default starting grid

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {button.addEventListener('click', () => {
    //console.log(button.innerText);
    createGrid(button.innerText);
    })});

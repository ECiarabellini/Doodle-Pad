const pad = document.querySelector("#pad");
let newSquare;

for (let n=0; n<256; n++){
    newSquare = document.createElement('div');
    newSquare.classList.add('squares');
    pad.appendChild(newSquare);
}

let squares = document.querySelectorAll('.squares');
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
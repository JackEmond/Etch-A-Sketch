
const rows = 16;
const columns = 16;

const container = document.querySelector("#container");
container.style.cssText = 'grid-template-columns: repeat(' + columns + ',auto); grid-template-rows: repeat('+rows+', auto)';

numberofSquareDivsRequired = rows * columns;
currentNumberOfSquareDivs = 0;

while(currentNumberOfSquareDivs < numberofSquareDivsRequired)
{
    const squareDiv = document.createElement('div');
    container.appendChild(squareDiv);
    squareDiv.className = 'squareDiv';
    currentNumberOfSquareDivs += 1;
}

const buttons = document.querySelectorAll('.squareDiv');
buttons.forEach((div) => {

    // and for each one we add a 'click' listener
    div.addEventListener('mouseout', () => {
      div.style.cssText = "background-color: blue;";
    });
  });



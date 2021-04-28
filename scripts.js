

const container = document.querySelector("#container");



numberOfRowsandColumns();

function numberOfRowsandColumns(columns = 60){
    var rows = columns;
  container.innerHTML = '';
  container.style.cssText = 'grid-template-columns: repeat(' + columns + ',auto); grid-template-rows: repeat('+rows+', auto)';
}

numberofSquareDivs();

function numberofSquareDivs(columns = 60){
  var rows = columns;
  numberofSquareDivsRequired = rows * columns;
  currentNumberOfSquareDivs = 0;

  while(currentNumberOfSquareDivs < numberofSquareDivsRequired)
  {
      const squareDiv = document.createElement('div');
      container.appendChild(squareDiv);
      squareDiv.className = 'squareDiv';
      currentNumberOfSquareDivs += 1;
  }
}

addEventListener();

function addEventListener(){
  const squareDivs = document.querySelectorAll('.squareDiv');
  squareDivs.forEach((div) => {
      div.addEventListener('mouseout', () => {
      div.style.cssText = "background-color: black;";
    });
  });
}



const slider = document.querySelector("#slider");
slider.addEventListener('change', refreshStats);

function refreshStats(){
  numberOfRowsandColumns(this.value);
  numberofSquareDivs(this.value);
  addEventListener();

}



var x = document.querySelector("#slider").value;
console.log(x);


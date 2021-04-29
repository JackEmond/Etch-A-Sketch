const container = document.querySelector("#container");

const slider = document.querySelector("#slider");
slider.addEventListener('change', refreshStats);

let drawingColour = 'black';
const sliderText = document.querySelector("#sliderText");

refreshStats();

const colourButtons = document.querySelectorAll(".colourButtons");
colourButtons.forEach((button) => {
  button.addEventListener('click', changeColour);
})

const colourPicker = document.querySelector("#colourPicker");
colourPicker.addEventListener('input', changeColourPicker);


document.querySelector("#reset").addEventListener('click', () => {location.reload()});

function changeColourPicker(event){
  const colourPickerBorder = document.querySelector("#border");
  drawingColour = event.target.value;
  colourPickerBorder.style.cssText = 'background:' + drawingColour + '';
  changeActiveButton(this);
  addAbilitytoColour();
}

function changeColour(){
  drawingColour = this.id;
  changeActiveButton(this);
  addAbilitytoColour();
}

let activeButton = document.querySelector('#black');

function changeActiveButton(newActiveButton){
  activeButton.className = activeButton.className.replace(" active", "");
  activeButton = newActiveButton;
  newActiveButton.className += " active";
}

function numberOfRowsandColumns(){
  container.innerHTML = '';
  container.style.cssText = 'grid-template-columns: repeat(' + slider.value + ',auto); grid-template-rows: repeat('+ slider.value +', auto)';
}

function numberofSquareDivs(){
  numberofSquareDivsRequired = slider.value * slider.value;
  currentNumberOfSquareDivs = 0;

  while(currentNumberOfSquareDivs < numberofSquareDivsRequired)
  {
      const squareDiv = document.createElement('div');
      container.appendChild(squareDiv);
      squareDiv.className = 'squareDiv';
      currentNumberOfSquareDivs += 1;
  }
}

function addAbilitytoColour(){
  const squareDivs = document.querySelectorAll('.squareDiv');
  squareDivs.forEach((div) => {
      div.addEventListener('mouseover', () => {
        chooseColour(div);
    });
  });
}

function chooseColour(div){
  if(drawingColour == 'randomColour')
  {
    const colour = '#' + Math.floor(Math.random()*16777215).toString(16);
    div.style.cssText = "background-color: "+ colour +";";
  }
  else{
    div.style.cssText = "background-color: "+ drawingColour +";";
  }
}

function sliderTextInformation(){
  sliderText.innerHTML = 'Grid Size = ' + slider.value + ' X ' + slider.value;
}

function refreshStats(){
  sliderTextInformation();
  numberOfRowsandColumns();
  numberofSquareDivs();
  addAbilitytoColour();
}
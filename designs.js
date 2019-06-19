
// When size is submitted by the user, call makeGrid()
function submission() {
  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
}

function makeGrid(height, width) {
  const canvas = document.getElementById('pixelCanvas');
  let grid = '';

  //delete rows to start
  canvas.innerHTML = grid;

  //loop over each row
  for (let i = 0; i< height; i++) {
    let row = canvas.insertRow(i);

    //loop for each cell
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);

      //add click event
      const colorPicker = document.getElementById('colorPicker');
      cell.addEventListener("click", function(event){
         let clickedCell = event.target;
         clickedCell.style.backgroundColor = colorPicker.value;
       });
    }
    grid += '</tr>';
  }
}


document.getElementById('sizePicker').onsubmit = function () {
   submission();
};

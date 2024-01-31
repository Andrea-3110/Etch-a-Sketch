const grid = document.querySelector('.grid');
let gridSize = 16*16;
let opacity = 0.1

function createGrid() {
   grid.innerHTML = '';
   
   for (let i = 0; i < gridSize; i++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('grid-cell');
      grid.appendChild(gridCell);   
   }
   const gridCells = document.querySelectorAll(".grid-cell");

   gridCells.forEach(cell => {
      cell.addEventListener('mouseover',()=>{
         cell.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      })
   });

}
createGrid()

function changeSize(){
   let inputSize;
   do {
      inputSize = prompt("Enter a new size [min 3,max 100]")
      console.log(inputSize);
      if (inputSize == null) {
         inputSize = 16
         break
      }

   } while (inputSize > 100 || inputSize < 3);

   gridSize = inputSize**2

   grid.style.gridTemplateColumns = `repeat(${inputSize},1fr)`;
   createGrid()
}





//grid.innerHTML += '<div class="grid-cell"></div>';

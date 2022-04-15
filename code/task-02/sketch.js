function preload(){
  // preload assets
}


//defining variables

const sketchWidth = 400;
const sketchHeight = 400;
const size = 4;




function setup() {
  
  createCanvas(400, 400);
}

function draw() {

  background(255);
  noStroke();


  //defining grid

  const columns = sketchWidth / size;
  const rows = sketchHeight / size;


  //circles-loop

  for (let x = -0.5; x < columns; x += 1) {
    for (let y = 0.5; y < rows; y += 1) {
    
    fill (random(50, 200), random(120, 160), 255);
    circle (x * size, y * size, size);


    }
  }


  //rectangles-loop

  for (let x = 1; x < columns; x += 2) {
    for (let y = 0; y < rows; y += 2) {

    fill (random(50, 200), random(120, 160),255);
    rect (x * size, y * size, size, size);

    }
  }

  // rectangles-loop transitioned

  for (let x = 0; x < columns; x += 2) {
    for (let y = 1; y < rows; y += 2) {

      fill (random(50, 200), random(120, 160), 255);
      rect (x * size, y * size, size, size);

    }
  }


}
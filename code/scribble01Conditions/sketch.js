
const sketchWidth = 400;
const sketchHeight = 400;

let size = 50;



//Preload
function preload(){
}


//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  
  frameRate(2);



}


//Draw
function draw() {
  background(255);


  const columns = sketchWidth / size;
  const rows = sketchHeight / size;



  fill (0);
  stroke(255);


  for (let x = 0; x < columns; x +=1){
    for (let y = 0; y < rows; y += 1) {

      const shapeNum = random (0,4);

      if (shapeNum < 1){
        circle (x * size + size/2, y * size + size/2, size);
      }

      else if (shapeNum > 2 && shapeNum < 3) {

        triangle (x * size, y * size, x * size + size, y * size, x * size + size/2, y * size + size);
      }


      else {
        rect(x * size, y * size, size, size);
      }

    }

      
  }
}


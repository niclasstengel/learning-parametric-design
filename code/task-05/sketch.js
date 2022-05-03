
const sketchWidth = 400;
const sketchHeight = 400;


let offsetX = 0;
let offsetY = 0;


let x = 0;
let y = 0;




function preload(){
  // preload assets
}

function setup () {
  createCanvas(sketchWidth, sketchHeight);


}

function draw () {
  background (255);
  stroke('black');
  strokeWeight (1);

  for (let counter = 0; counter < 10; counter += 1){

  
  x = random (0, sketchWidth);
  y = random (0, sketchHeight);


  beginShape();
  curveVertex(x, y);
  curveVertex(x, y);
  curveVertex(x + random (175, 200), y + random(0, 25));
  curveVertex(x + random (175, 200) , y + random (175, 200));
  curveVertex(x + random(0, 25), y + random (175, 200));
  
 
  endShape(CLOSE);
  
  }

  

  noLoop();
  


  
 
}
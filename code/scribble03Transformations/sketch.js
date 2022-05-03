const sketchWidth = 400;
const sketchHeight = 400;


let angle = 0;

let rectDirectionX = 0;
let rectDirectionY = 0;

let rectSpeed = 0;





function setup() { 
  createCanvas(sketchWidth, sketchHeight);
  rectMode(CENTER);

  frameRate (60);
} 

let offsetX = 0;
let offsetY = 0;


function draw() { 
  background(220);


  // x and y cords for transformation
  let x = sketchWidth/2 + offsetX;
  let y = sketchHeight/2 + offsetY;

	
  
    
  //transformations
	angle+= 0.1; //speed of rotation
  translate (x, y);
  rotate(angle);

  //rect itself
	rect(0, 0, 100, 100);
  
  //increasing offset
  offsetX += random(0, 5);
  offsetY += random(0, 5);
  

  /*if (x > sketchWidth || x < 0){
    offsetX *= -1;

  }

  if (y > sketchHeight || y < 0){
    offsetY *= -1;

  }
*/

}
const sketchWidth = 400;
const sketchHeight = 400;

const numPoints = 20;
const velocity = 3;

const points = [];
  for (let p = 0; p < numPoints; p += 1){
    points.push ({

        x: Math.random() * sketchWidth,
        y: Math.random() * sketchHeight,

        vx: Math.random() * velocity,
        vy: Math.random() * velocity
    });

  }





//Preload
function preload(){
  // preload assets
}



//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight);

  frameRate(60);
  

}



//Draw
function draw() {
  background (255, 50);
  fill (0);

  for (let p = 0; p < points.length; p += 1){

    circle (points[p].x, points[p].y, 5);

    points[p].x += points[p].vx;
    points[p].y += points[p].vy;
  

    if (points[p].x>sketchWidth || points[p].x < 0){
        points[p].vx *= -1;
    }

     if (points[p].y>sketchHeight || points[p].y < 0){
        points[p].vy *= -1;
      }

}



  
  
  



      
  }
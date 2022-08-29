const sketchWidth = 600;
const sketchHeight = 600;

let points = [];





//Preload
function preload(){
  // preload assets
}

//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background(255);


  



}

//Draw
function draw() {

  for (let c = 0; c < sketchWidth; c +=1 ){
    points.push(  
      noise(c/200)
    );
  };

  for (let a = 0; a <= points.length; a +=1){
    circle(points.x, points.y, 10)
  }

  circle (points.x, points.y, 10);
  
  

//   stroke ('green');
//   strokeWeight (5);
//   beginShape();
//   for (let lx = 0; lx < sketchWidth; lx += 1) {
//     const ly = noise(lx / 200);
//     vertex(lx, ly * 100);
//   }
// endShape();


stroke('blue');
strokeWeight (1);
beginShape();
for (let c= 0; c <= points.length; c +=1){
  vertex(c, points[c] * 100);
}
endShape();





stroke('red');
beginShape();
    for (let xl = 0; xl < 600; xl += 1) {
      vertex(xl, points[xl] * 100 + random(200, 205))

    }
  
endShape();




   noLoop();

}


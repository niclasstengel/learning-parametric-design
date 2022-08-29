const sketchWidth = 600;
const sketchHeight = 600;

//noise array
let noiseX = [];
let noiseY = [];

//Preload
function preload(){
}


//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
  background (255);
  noFill();
  angleMode(DEGREES);

}



//Draw
function draw() {

  //FIN SVG
  stroke(0);
  beginShape();
  vertex(6,509.1);
  bezierVertex(29.1,450.1,126.6,301,211.3,222);
  bezierVertex(305.4,134.3,403.3,90,497.3,90);
  bezierVertex(586.7,94.2,595.6,143.2,594.8,154.5);
  bezierVertex(592.8,210.7,523.2,181,436.9,281.4);
  bezierVertex(355.4,375.7,405.2,480.8,408.1,509);
  vertex(6,509);
  vertex(6,509.1);
  endShape();



  //translating polardCoords (outer radius)
  translate(sketchWidth, sketchHeight);

  //polar coords with amount of steps "i"
  for(var i = 0; i < 360 * 4; i += 0.35){
    let maxY = 50;

    //creating points "p" based on noise
    let p = noise (i * 0.1) * maxY;
      
    //mapping point-values onto min and max radius
    var r = map(p, 0, maxY, 430, 515);

    //creating x and y coords for array
    var nx = r * cos(i) * 1.11
    var ny = r * sin(i) * 1.04
      

    //pushing x and y coords into array
    noiseX.push(nx);
    noiseY.push(ny);

  }

  //creating vertex (lightning) based on noise whith added random value 
  beginShape();
  stroke('red');
  strokeWeight(1.5);

    for (var c = 0; c <= noiseX.length / 4; c ++){  

      let randy = 2.8;
      vertex(
        noiseX[c] + random (-randy,randy),
        noiseY[c] + random (-randy,randy)
        );
    
  }
  endShape();

     
  //save as SVG
  // save("lightningBig.svg"); 

  noLoop();



}
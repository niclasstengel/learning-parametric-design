const sketchWidth = 600;
const sketchHeight = 600;

var minR = 23;
var maxR = 23;

var minR2 = 500;
var maxR2 = 520;

let pointsX = [];
let pointsY = [];

var x = 0;
var y = 0;

let exportCounter = 1;

//Preload
function preload(){
  // preload assets
}

//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
  background (255);
  stroke(255);
  noFill();
  angleMode(DEGREES);
}

//Draw
function draw() {

  translate(sketchWidth, sketchHeight);


  // //higher frequence
  // beginShape();
  // for(var i = 0; i < 359; i += 1){
  //   var r1 = map(sin(i * 200), -1, 1, minR2  + random(0), maxR2  + random(0))
  //   //var r2 = map(sin(i * 300), -1, 1, minR2  + random(0), maxR2  + random(0))
  //   var r = r1 //+r2
  //   var x = r * cos(i)
  //   var y = r * sin(i)
  //   vertex(x, y)
  //   //circle(x, y, 1);
  //   console.log(x, y);

    
  // }
  // endShape(CLOSE);




  //backup
  beginShape();
  stroke('red');
  for(var i = 0; i < 360; i += 2.2){
    var r1 = map(sin(i * 5), -1, 1, minR + random(-1.5), maxR + random(1.5))
    var r2 = map(sin(i * 10), -1, 1, minR + random(-1.5), maxR + random(1.5))
    var r = r1 * r2
    var x = r * cos(i)
    var y = r * sin(i)
    vertex(x, y)
    //circle(x, y, 1);
    pointsX.push(x);
    pointsY.push(y);

    console.log(r);

  }
  endShape(CLOSE);

  // //middle lightning
  // translate(100,100)
  // beginShape();
  // stroke('red');
  // for(var i = 0; i < 360; i += 2.2){
  //   var r1 = map(sin(i * 6), -1, 1, minR + random(-1.5), maxR + random(1.5))
  //   var r2 = map(sin(i * 12), -1, 1, minR + random(-1.5), maxR + random(1.5))
  //   var r = r1 * r2
  //   var x = r * cos(i)
  //   var y = r * sin(i)
  //   vertex(x, y)
  //   //circle(x, y, 1);
  //   pointsX.push(x);
  //   pointsY.push(y);

  //   //console.log(r);

  // }
  // endShape(CLOSE);


  // //small lightning
  // translate(100,100)
  // beginShape();
  // stroke('red');
  // for(var i = 0; i < 360; i += 2.2){
  //   var r1 = map(sin(i * 3), -1, 1, minR + random(-1.5), maxR + random(1.5))
  //   var r2 = map(sin(i * 8), -1, 1, minR + random(-1.5), maxR + random(1.5))
  //   var r = r1 * r2
  //   var x = r * cos(i)
  //   var y = r * sin(i)
  //   vertex(x, y)
  //   //circle(x, y, 1);
  //   pointsX.push(x);
  //   pointsY.push(y);

  //   console.log(pointsX);

  // }
  // endShape(CLOSE);



  // //vertex based on points
  // stroke(255);
  // beginShape();
  // for (let v = 0; v < pointsX.length; v ++){
  //   vertex(pointsX[v], pointsY[v]);
  // }
  // endShape(); 

  
  save("lightningBig.svg"); 


  noLoop();

}
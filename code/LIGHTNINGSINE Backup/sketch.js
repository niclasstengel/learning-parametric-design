const sketchWidth = 600;
const sketchHeight = 600;

var rando = 2;

var minR = 20;
var maxR = 20.7;

var nMinR = 450;
var nMaxR = 520;


let noiseX = [];
let noiseY = [];


let pointsX = [];
let pointsY = [];

var x = 0;
var y = 0;


let img;




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




  // //outerBolt MINR
  // stroke('red');
  // circle (sketchWidth, sketchHeight, 960);

  
  // //outerBolt MAXR
  // stroke('blue');
  // circle (sketchWidth, sketchHeight, 1050);


  //translate
  translate(sketchWidth, sketchHeight);


  //backup
  beginShape();
  stroke('red');
  strokeWeight(1.5);

    
      // for(var i = 0; i < 360; i += 0.35){

      //   let maxY = 50;

      //   let w = noise (i * 0.1) * maxY;
        
      //   var r = map(w, 0, maxY, 430, 515);
      //   var nx = r * cos(i) * 1.11
      //   var ny = r * sin(i) * 1.04
      //   //vertex(nx, ny)
      //   //circle(nx, ny, 1);
      //   noiseX.push(nx);
      //   noiseY.push(ny);

      //   console.log(w);

      // }
      // endShape(CLOSE);


      // beginShape();

          
      // for (var c = 0; c <= noiseX.length; c ++){
      //   // vertex(noiseX[c], noiseY[c])
      
      //   let randy = 2.8;

      //   vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
      // }
      // endShape();


    //noise coords
    for(var i = 0; i < 360 * 4; i += 0.35){

      let maxY = 50;

      let w = noise (i * 0.1) * maxY;
      
      var r = map(w, 0, maxY, 430, 515);
      var nx = r * cos(i) * 1.11
      var ny = r * sin(i) * 1.04
      
      noiseX.push(nx);
      noiseY.push(ny);

    }

    //vertex based on noise + random
    beginShape();
    for (var c = 0; c <= noiseX.length / 4; c ++){  
      let randy = 2.8;
      vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
    
    }
    endShape();

    translate (50, 50);
    //vertex based on noise + random
    beginShape();
    for (var c = 360; c <= noiseX.length / 4; c ++){  
      let randy = 2.8;
      vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
    
    }
    endShape();









  
  // beginShape();
  // for (var c = 0; c <= noiseX.length; c ++){
  //   // vertex(noiseX[c], noiseY[c])
  
  //   let randy = 2.8;

  //   vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
  // }
  // endShape();

  

 




  // //backup
  // beginShape();
  // stroke('red');
  // for(var i = 0; i < 360; i += 2.2){
  //   var r1 = map(sin(i * 5), -1, 1, minR + random(-1.5), maxR + random(1.5))
  //   var r2 = map(sin(i * 10), -1, 1, minR + random(-1.5), maxR + random(1.5))
  //   var r = r1 * r2
  //   var x = r * cos(i)
  //   var y = r * sin(i)
  //   vertex(x, y)
  //   //circle(x, y, 1);
  //   pointsX.push(x);
  //   pointsY.push(y);

  //   console.log(r);

  // }
  // endShape(CLOSE);


  // //normal sine wave
  // beginShape();
  // stroke('red');
  // for(var i = 0; i < 360; i += 0.5){
  //   var r = map(sin(i*30), -1, 1, minR, maxR) 
  //   var x = r * cos(i) * 1.16
  //   var y = r * sin(i) * 1.015
  //   vertex(x, y)
  //   //circle(x, y, 1);
  //   pointsX.push(x);
  //   pointsY.push(y);

  //   console.log(r);

  // }
  // endShape(CLOSE);


    // //double sine wave
    // beginShape();
    // stroke('red');
    // for(var i = 0; i < 360; i += 0.3){
    //   var r1 = map(sin(i*32), -1, 1, minR, maxR)
    //   var r2 = map(sin(i*52), -1, 1, minR, maxR) 


    //   var r = r1 * r2 
    //   var x = r  * cos(i) * 1.25 
    //   var y = r  * sin(i) * 1.2 
    //   // vertex(x, y)
    //   //circle(x, y, 1);
    //   pointsX.push(x);
    //   pointsY.push(y);
  
    //   console.log(r);
  
    // }
    // endShape(CLOSE);


  // //random on sine wave
  // beginShape();
  // for(var c = 0; c <= pointsX.length; c ++){
  //   //var randomX = random(-rando,rando)*cos(c)
  //   //var randomY = random(-rando,rando)*sin(c)


  //   // vertex(pointsX[c], pointsY[c])

  //   vertex(pointsX[c] + random (-4,4), pointsY[c] + random (-4,4))
  // }
  // endShape();

  


 

 



  // //noise curve
  // beginShape();
  // stroke('red');
  // for(var i = 0; i < 360; i += 0.5){
  //   var nr1 = noise(2) 
  //   //var nr2 = map(sin(i*43), -1, 1, minR, maxR) 


  //   var nr = nr1
  //   var nx = nr * cos(i) * 1.25
  //   var ny = nr * sin(i) * 1.2
  //   vertex(nx, ny)
  //   // circle(nx, ny, 1);


  //   //console.log(r);

  // }
  // endShape(CLOSE);

 
  


  
  
  //save("lightningBig.svg"); 

  noLoop();



}
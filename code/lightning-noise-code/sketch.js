const sketchWidth = 600;
const sketchHeight = 600;


let noiseX = [];
let noiseY = [];

let SVGcounter = 1;

let button;


function saveSVG(){
  save("lightning.svg");
}








//Preload
function preload(){
}

//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
  background (255);

  noFill();
  angleMode(DEGREES);

    // Create a button
    button = createButton('SVG');
    button.mousePressed(saveSVG);
  


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

  stroke('red');
  strokeWeight(1.5);




  


  //translate
  translate(sketchWidth, sketchHeight);

  //noise coords
  for(var i = 0; i < 360; i += 0.35){
      let maxY = 50;

      let w = noise (i * 0.2) * maxY;
      
      var r = map(w, 0, maxY, 430, 515);
      var nx = r * cos(i) * 1.11
      var ny = r * sin(i) * 1.04
      
      noiseX.push(nx);
      noiseY.push(ny);

    }




  //vertex based on noise + random
  beginShape();
  for (var c = 0; c <= noiseX.length; c ++){  
      let randy = 2.9;
      vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
    
    }
  endShape();


  // let offsetX = 50;
  // let offsetY = 50;


  // translate(offsetX,offsetY);
  // //2vertex based on noise + random
  // beginShape();
  // for (var c = 0; c <= noiseX.length; c ++){  
  //     let randy = 2.8;
  //     vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
    
  //   }
  // endShape();

  // translate(offsetX,offsetY);
  // //3vertex based on noise + random
  // beginShape();
  // for (var c = 0; c <= noiseX.length; c ++){  
  //     let randy = 2.8;
  //     vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
    
  //   }
  // endShape();

  // translate(offsetX,offsetY);
  // //4vertex based on noise + random
  // beginShape();
  // for (var c = 0; c <= noiseX.length; c ++){  
  //     let randy = 2.8;
  //     vertex(noiseX[c] + random (-randy,randy), noiseY[c] + random (-randy,randy))
    
  //   }
  // endShape();



  


  

  


  noLoop();



      //save("lightning" +  SVGcounter + ".svg");
   
  



}

var circles = [];

const sketchWidth = 1440;
const sketchHeight = 720;

function setup() {
  createCanvas(sketchWidth, sketchHeight);

}


var protection = 0;

function draw (){
  // Lets make sure we don't get stuck in infinite loop

  // Try to get to 500
  while (circles.length < 500) {
    // Pick a random circle
    var dot = {
      x: random(sketchWidth),
      y: random(sketchHeight),
      r: random(6, 36)
    };

    // Does it overlap any previous circles?
    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(dot.x, dot.y, other.x, other.y);
      if (d < dot.r + other.r) {
        overlapping = true;
      }
    }

    // If not keep it!
    if (!overlapping) {
      circles.push(dot);
    }

    // Are we stuck?
    protection++;
    if (protection > 10000) {
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    fill(0);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

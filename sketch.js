let angle = 0;

function setup() {
  createCanvas(700, 700);
  rectMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(50);
  stroke(255);
}

function draw() {
  background(255);

  translate(width/2, height/2);
  
  for (var i = 0; i < 100; i++) {
    fill(i*100, i+50, i*2);
    rotate(angle);
    rect(0, 0, 500, 500);
    scale(0.8)
    rotate(angle);
  }

  angle += 0.2;
}

// By Maya Gutierrez for MMP 100
/// "Hi Maya "

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(254, 201, 253);

  //interactive - if mouseIsPressed, text is purple, else text is random

  if (mouseIsPressed) {
    stroke(100);
    strokeWeight(2);
    fill(random(190, 255), random(0, 255), random(200, 205));
  } else {
    stroke(random(150, 160), 102, random(200, 205));
    strokeWeight(1);
    fill(random(150, 160), 102, random(200, 205));
  }

  //text - "HI MAYA"
  textAlign(CENTER);
  textSize(50);
  text("HI", 250, 100);

  textAlign(CENTER);
  textSize(50);
  text("MAYA", 250, 450);

  //interactive - if mouseIsPressed, shapes are purple, else shapes are random

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(50, 100, 5, 10, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -50.0);
  star(55, 0, 200, 60, 5);
  pop();

  push();
  translate(width * 0.9, height * 0.5);
  rotate(frameCount / +20.0);
  star(55, 0, 200, 6, 25);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

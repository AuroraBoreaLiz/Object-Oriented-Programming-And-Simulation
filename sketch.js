let p;
function setup() {
  createCanvas(600, 400);
  p = new Particle();
}

function draw() {
  background(0);
  
  p.show();
}

class Particle {
  
  
  constructor(){
    //particles start at the bottom
    this.x = 300;
    this.y = 380;
  }
  
  show () {
    stroke(255);
    fill (255,10);
    ellipse(this.x, this.y, 16);
  }
}

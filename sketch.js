let particles = [];
function setup() {
  createCanvas(600, 400);
  let p = new Particle ();
  particles.push(p);
}

function draw() {
  background(0);
  
  for (let i = 0; i <particles.length; i++){
    particles[i].update();
    particles[i].show();
  }

}

class Particle {
  
  
  constructor(){
    //particles start at the bottom
    this.x = 300;
    this.y = 380;
    this.vx = random(-1,1);
    this.vy = random(-5,-1);
    
  }
  
  update(){
    this.x += this.vx;
    this.y += this.vy;
  }
  show () {
    stroke(255);
    fill (255,10);
    ellipse(this.x, this.y, 16);
  }
}

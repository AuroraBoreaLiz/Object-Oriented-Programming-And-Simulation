let particles = [];
function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  
  //makes lots of particles. Move to setup to have not continuous
  let p = new Particle ();
  particles.push(p);
  
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
    //change this to make particles go random left and right
    this.vx = random(-1,1);
    //change this in the negative to make the particles go up randomly
    this.vy = random(-5,-1);
    this.alpha = 255;
    
  }
  
  //moves the particles x and y with the random from vx and vy
  update(){
    this.x += this.vx;
    this.y += this.vy;
    //controls fade over time
    this.alpha -= 5;
  }
  
  //controls what the particle looks like
  show () {
    stroke(255);
    fill (255,this.alpha);
    ellipse(this.x, this.y, 16);
  }
}

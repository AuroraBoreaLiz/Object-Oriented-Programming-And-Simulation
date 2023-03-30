//watching tutorial and commenting what I'm learning and how to control
// https://thecodingtrain.com/challenges/78-simple-particle-system


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
    if (particles[i].finished()){
      //remove this particle
      //splice function removes an element from the array at position i from just that one element
      particles.splice(i,1);
    }
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
  
  finished(){
    //this function returns true or false
    return this.alpha < 0;
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
    //noStroke();
    stroke(255);
    fill (255,this.alpha);
    ellipse(this.x, this.y, 16);
  }
}

//watching tutorial and commenting what I'm learning and how to control
// https://thecodingtrain.com/challenges/78-simple-particle-system


let particles = [];
let fire = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
    
  //fill smoke array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <5; i++) {
    
    let p = new Particle ();
    particles.push(p);
    
  }
  
  //for (let i = 0; i <particles.length; i++){
  //particles.length-1 starts from the end of the array when deleting particles at the end of their lifespace so they aren't skipped when the array shifts
  for (let i = particles.length-1; i >= 0; i--){
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()){
      //remove this particle
      //splice function removes an element from the array at position i from just that one element
      particles.splice(i,1);
    }
  }
  
  for (let i=0; i <5; i++) {
    
    let f = new Fire ();
    fire.push(f);
    
  }
  //Fill Fire Array
  for (let i = 0; i < fire.length; i++){
    fire[i].update();
    fire[i].show();
  }

}

class Fire {
  constructor(){
    this.fx = 300;
    this.fy = 380;
    this.fvx = random (-1,1);
    this.fvy = random(-3,-1);
    this.alpha = 100;
    
  }
  
    
  finished(){
    //this function returns true or false
    return this.alpha < 0;
  }

    update(){
    this.fx += this.fvx;
    this.fy += this.fvy;
    //controls fade over time
    this.alpha -= 2;
  }
  
  show(){
    noStroke();
    fill(255,128,0,this.alpha)
    ellipse(this.fx, this.fy, 18);
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
    noStroke();
    //stroke(255);
    fill (255,this.alpha);
    ellipse(this.x, this.y, 16);
  }
}

//watching tutorial and commenting what I'm learning and how to control
// https://thecodingtrain.com/challenges/78-simple-particle-system


let smoke = [];
let fire = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
    
  //fill smoke array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <5; i++) {
    let s = new Smoke ();
    smoke.push(s);
    
  }
  
  //for (let i = 0; i <particles.length; i++){
  //particles.length-1 starts from the end of the array when deleting particles at the end of their lifespace so they aren't skipped when the array shifts
  for (let i = smoke.length-1; i >= 0; i--){
    smoke[i].update();
    smoke[i].show();
    if (smoke[i].finished()){
      
      //remove this smoke
      //splice function removes an element from the array at position i from just that one element
      smoke.splice(i,1);
    }
  }
  //fill fire array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <10; i++) {
    
    let f = new Fire ();
    fire.push(f);
    
  }
  //doing the reverse count for this array puts the later particles on top so the visual is less pleasing
  for (let i = 0; i < fire.length; i++){
    fire[i].update();
    fire[i].show();
    
    //remove this fire particle when it is no longer visible
    if (fire[i].finished()){     
      
      fire.splice(i,1);
    }
  }
}


class Fire {
  
  constructor(){
    this.fx = random(280,320);
    this.fy = 380;
    this.fvx = random (-1,1);
    this.fvy = random(-3,-1);
    this.alpha = 155;
    //controls the starting color of R in RGB.
    this.rColor = 255;
    //controls the starting color of G in RGB. 
    this.gColor = 125;
    //controls the starting color of B in RBG
    this.bColor = 0;
    //controls the starting scale of the fire particle
    this.fScale = 25;
    
  }
  
    
  finished(){
    //this function returns true or false
    return this.alpha < 0;
  }

    update(){
    //connects the current x or y to the vector x or y
    this.fx += this.fvx;
    this.fy += this.fvy;
    //controls fade over time
    this.alpha -= 2;
    //the color changes as the fire goes up
    //controls the fire turning yellow to red
    this.gColor -= 2;
    this.fScale -= 2;
  }
  
  show(){
    noStroke();
    fill(this.rColor,this.gColor,this.bColor,this.alpha)
    ellipse(this.fx, this.fy, this.fScale);
  }
}
class Smoke {
  
  
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
    //when the particle fades below zero the particle dies
    return this.alpha < 0;
  }
  
  //moves the particles x and y with the random from vx and vy
  update(){
    this.x += this.vx;
    this.y += this.vy;
    //controls fade over time
    //particle lifetime
    this.alpha -= 5;
  }
  
  //controls what the particle looks like
  show () {
    noStroke();
    //stroke(255);
    fill (100,this.alpha);
    ellipse(this.x, this.y, random(10,20));
  }
}

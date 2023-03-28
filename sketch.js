let bug; // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  bug = new Jitter();
}

function draw() {
  background(50, 89, 100);
  

  bug.move();
  bug.display();


}

// Jitter class
class Jitter {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.diameter = random(10, 30);
    //If I adjust this number the random horizontal distance will go up in the move()
    this.speed = 5;
  }

  move() {

    this.x += random(-this.speed, this.speed);
    //if you adjust this number to be positive the bug will go down!
    //if you adjust this number to be negative the bug will go up!
    //using a larger number makes the bug go faster.
    this.y += -4;
 

    if (this.y < 0) {
      this.y = height/1.5;
    }

  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

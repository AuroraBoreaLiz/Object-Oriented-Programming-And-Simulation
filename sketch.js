let img;

function preload() {
  img1 = loadImage('assets/unnamed.jpg');
  img2 = loadImage('assets/unnamed.jpg');
}

function setup() {
  createCanvas(400, 400);
  
  //load image
  image(img1,0,0); 
  //filter smaller cropped image
  img2.filter(POSTERIZE,3);
  image(img2, 100,100,60,60,50,50,50,50);
  
  //get a color from a spot
  let c = get(150,150);
  fill(c);
  noStroke();
  //make a square that color
  rect(100,170,50,50);
}

function draw() {
  
}

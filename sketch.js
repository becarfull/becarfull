var landing_gialla;
var landing_bianca;

function preload(){
  landing_gialla = loadImage('assets/Risorsa9.jpg');
  landing_bianca = loadImage('assets/Risorsa10.png');
}

function setup() {
  createCanvas(windowWidth,6000);

}

function draw() {
  push();
  image(landing_gialla,0,0,landing_gialla.width,landing_gialla.height);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
